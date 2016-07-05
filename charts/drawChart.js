var utils = {

  sort: function(raw, sorted) {
    var sortTable = [];
    for (var key in raw) {
      sortTable.push([key, raw[key].max]);
    }
    sortTable.sort(function(a, b) {return b[1] - a[1]});

    //重新生成从大到小排序后的 data
    for (var key in sortTable) {
      var index = sortTable[key][0];
      sorted[index] = {};
      for (var k in raw[index]) {
        sorted[index][k] = raw[index][k];
      }
    }
  },

  getTotal: function(raw) {
    var total = 0;
    for (var key in raw) {
      total += raw[key].max;
    }
    return total;
  },

  getPercentage: function(sorted, percentage, total) {
    for (var key in sorted) {
      percentage[key] = sorted[key].max / total;
    }
  },

  getRadius: function(deg) {
    return deg / 180 * Math.PI;
  }

};

//PieChart
function PieChart(opt, fc) {
  this.ctx = fc.ctx;
  this.canvas = fc.canvas;
  this.data = fc.data;
  this.cx = opt.cx || 100;
  this.cy = opt.cy || 100;
  this.r = opt.r || 180;
  this.color = opt.color || ['#ff9197', '#ffd25a', '#d9a1df', '#4fd3cc'];
}

//准备画
PieChart.prototype.draw = function() {
  this.cx = this.canvas.width / 2 - 10;
  this.cy = this.canvas.width / 2 - 20;
  this._drawPieChart(-90);
  this._drawLabel();
};

//画饼图
PieChart.prototype._drawPieChart = function(startDeg){
  var ctx = this.ctx;

  var deg = 0;
  var endDeg = 0;
  var startRadius = 0;
  var endRadius = 0;
  var startPos = {'x': this.cx, 'y': this.cy - this.r};
  var endPos = {'x': 0, 'y': 0};
  var textPos = {'x': 0, 'y': 0};
  var placeholder = {'x': 0, 'y': 0};
  this.currentDeg = 0;

  for (var key in this.data.percentage) {

    var perR = this.data.sorted[key].level / this.data.sorted[key].max;

    deg = this.data.percentage[key] * 360;
    if (deg === 0) {
      continue;
    }
    endDeg = startDeg + deg;
    startRadius = utils.getRadius(startDeg);
    endRadius = utils.getRadius(endDeg);

    //画外面的大扇形
    ctx.beginPath();
    ctx.moveTo(this.cx, this.cy);
    ctx.lineTo(startPos.x, startPos.y);
    ctx.arc(this.cx, this.cy, this.r, startRadius, endRadius, 0, 0);
    this._getPos(endDeg, endPos, this.r, placeholder);
    ctx.fillStyle = '#e8eef3';
    ctx.fill();

    //画分割线
    ctx.lineTo(this.cx, this.cy);
    ctx.lineWidth = '3';
    ctx.strokeStyle = '#fff';
    ctx.stroke();
    ctx.closePath();

    //画里面的小扇形
    ctx.beginPath();
    ctx.moveTo(this.cx, this.cy);
    ctx.lineTo((startPos.x - this.cx) * perR + this.cx, (startPos.y - this.cy) * perR + this.cy);
    ctx.arc(this.cx, this.cy, this.r * perR, startRadius, endRadius, 0, 0);
    ctx.fillStyle = this.color[(this.data.sorted[key].rank - 1)];
    ctx.fill();

    //画分割线
    ctx.lineTo(this.cx, this.cy);
    ctx.lineWidth = '3';
    ctx.strokeStyle = '#fff';
    ctx.stroke();
    ctx.closePath();

    //写备注
    ctx.font = '25px \'Helvetica Neue\', Helvetica, sans-serif';
    ctx.fillStyle = '#3d4145';
    this._getPos(startDeg + (endDeg - startDeg) / 2, placeholder, this.r, textPos, ctx.measureText(key).width);
    ctx.fillText(key, textPos.x, textPos.y);

    //等级占比
    ctx.font = '20px \'Helvetica Neue\', Helvetica, sans-serif';
    ctx.fillText('等级：' + this.data.sorted[key].level + '/' + this.data.sorted[key].max, textPos.x, textPos.y + 30);

    //下一组数据
    startDeg = endDeg;
    startPos.x = endPos.x;
    startPos.y = endPos.y;

  }
};

//下一个扇形开始位置以及文本备注位置
PieChart.prototype._getPos = function(currentDeg, lineToPos, r, textPos, textWidth) {
  var radius = 0,
    deg = 0;
    textWidth = textWidth || 0;

  currentDeg += 90;

  if (currentDeg > 360) {
    currentDeg -= 360;
  }

  if (currentDeg <= 90) {
    deg = 90 - currentDeg;
    radius = utils.getRadius(deg);
    lineToPos.x = this.cx + Math.cos(radius) * r;
    lineToPos.y = this.cy - Math.sin(radius) * r;
    textPos.x = lineToPos.x + 10;
    textPos.y = lineToPos.y - 40;
  }
  else if (currentDeg <= 180) {
    deg = currentDeg - 90;
    radius = utils.getRadius(deg);
    lineToPos.x = this.cx + Math.cos(radius) * r;
    lineToPos.y = this.cy + Math.sin(radius) * r;
    textPos.x = lineToPos.x + 20;
    textPos.y = lineToPos.y + 20;
  }
  else if (currentDeg <= 270) {
    deg = 270 - currentDeg;
    radius = utils.getRadius(deg);
    lineToPos.x = this.cx - Math.cos(radius) * r;
    lineToPos.y = this.cy + Math.sin(radius) * r;
    textPos.x = lineToPos.x - textWidth - 20;
    textPos.y = lineToPos.y + 20;
  }
  else if (currentDeg <= 360) {
    deg = currentDeg - 270;
    radius = utils.getRadius(deg);
    lineToPos.x = this.cx - Math.cos(radius) * r;
    lineToPos.y = this.cy - Math.sin(radius) * r;
    textPos.x = lineToPos.x - textWidth - 10;
    textPos.y = lineToPos.y - 40;
  }
};

//画标签
PieChart.prototype._drawLabel = function() {
  var ctx = this.ctx,
      x = this.cx - this.r - 130,
      y = this.cy + this.r + 80,
      levelColor = {
        '优秀': '#4fd3cc',
        '良好': '#d9a1df',
        '尚可': '#ffd25a',
        '薄弱': '#ff9197'
      };
  PieChart.prototype._drawText.call(this, x, y, '掌握程度：');
  x += 160;
  for (var key in levelColor) {
    ctx.fillStyle = levelColor[key];
    ctx.fillRect(x, y, 30, 30);
    PieChart.prototype._drawText.call(this, x, y, key);
    x += 120;
  }
};

//写标签文字
PieChart.prototype._drawText = function(x, y, key) {
  var ctx = this.ctx;
  ctx.font = '25px \'Helvetica Neue\', Helvetica, sans-serif';
  ctx.fillStyle = '#3d4145';
  ctx.fillText(key, x + 33, y + 25);
};

//处理 data
function drawData(data) {
  this.raw = data;
  this.sorted = {};
  this.total = 0;
  this.percentage = {};
}

//初始化图表
function drawChart(opt) {
  var chartCanvas = document.createElement('canvas');
  opt.wrapper.appendChild(chartCanvas);
  this.canvas = chartCanvas;
  this.ctx = chartCanvas.getContext('2d');

  this.data = new drawData(opt.data);
  this.data.total = utils.getTotal(this.data.raw);
  utils.sort(this.data.raw, this.data.sorted);
  utils.getPercentage(this.data.sorted, this.data.percentage, this.data.total);
  this.canvas.width = parseInt(opt.wrapper.style.width) * 2;
  this.canvas.height = parseInt(opt.wrapper.style.height) * 2;
  this.canvas.style.cssText = '-webkit-transform: translateX(-' + (this.canvas.width / 4) + 'px) scale(0.5);-webkit-transform-origin: 50% 0';
  this.draw(opt);
}

//开始画
drawChart.prototype.draw = function(opt) {

  var obj = new PieChart(opt, this);

  obj.draw();

};