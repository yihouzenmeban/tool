webpackJsonp([0],{0:function(module,exports,__webpack_require__){eval("/* WEBPACK VAR INJECTION */(function($) {'use strict';\n\n__webpack_require__(2);\n\nvar _content = __webpack_require__(7);\n\nvar _content2 = _interopRequireDefault(_content);\n\nvar _moment = __webpack_require__(8);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\n__webpack_require__(107);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//var $ = require('jquery');\n//import $ from 'jquery';\n//var moment = require('moment');\n//require(\"!style!css!./app/style.css\");\n//require(\"./css/main.scss\");\n\nvar app = $('<div></div>');\n//app.append(content());\n\n//var app = $('<div><h1>Hello World it</h1></div>');\n\n//var content = require(\"./js/content.js\");\nvar myPromise = Promise.resolve(42);\nmyPromise.then(function (number) {\n    $('body').append('<p>promise result is ' + number + ' now is <span>' + (0, _moment2.default)().format() + '</span></p>');\n    //call our jquery plugin!\n    $('p').greenify();\n});\napp.append('<h1>Hello World it</h1>');\napp.append((0, _content2.default)());\n$('body').append(app);\n//$('body').append('<p>look at me! now is ' + moment().format() + '</p>');\nfunction time() {\n    $('span').html((0, _moment2.default)().format());\n}\nsetInterval(time, 200);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZW50cnkuanM/NjgzZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsSUFBSSxNQUFNLEVBQUUsYUFBRixDQUFOOzs7Ozs7QUFFSixJQUFNLFlBQVksUUFBUSxPQUFSLENBQWdCLEVBQWhCLENBQVo7QUFDTixVQUFVLElBQVYsQ0FBZSxVQUFDLE1BQUQsRUFBWTtBQUN2QixNQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLDBCQUEwQixNQUExQixHQUFtQyxnQkFBbkMsR0FBc0Qsd0JBQVMsTUFBVCxFQUF0RCxHQUEwRSxhQUExRSxDQUFqQjs7QUFEdUIsS0FHdkIsQ0FBRSxHQUFGLEVBQU8sUUFBUCxHQUh1QjtDQUFaLENBQWY7QUFLQSxJQUFJLE1BQUosQ0FBVyx5QkFBWDtBQUNBLElBQUksTUFBSixDQUFXLHdCQUFYO0FBQ0EsRUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixHQUFqQjs7QUFFQSxTQUFTLElBQVQsR0FBZ0I7QUFDWixNQUFFLE1BQUYsRUFBVSxJQUFWLENBQWUsd0JBQVMsTUFBVCxFQUFmLEVBRFk7Q0FBaEI7QUFHQSxZQUFZLElBQVosRUFBa0IsR0FBbEIsRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9yZXF1aXJlKFwiIXN0eWxlIWNzcyEuL2FwcC9zdHlsZS5jc3NcIik7XG4vL3JlcXVpcmUoXCIuL2Nzcy9tYWluLnNjc3NcIik7XG5pbXBvcnQgJy4vY3NzL21haW4uc2Nzcyc7XG4vL3ZhciBjb250ZW50ID0gcmVxdWlyZShcIi4vanMvY29udGVudC5qc1wiKTtcbmltcG9ydCBjb250ZW50IGZyb20gJy4vanMvY29udGVudC5qcyc7XG4vL3ZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4vL2ltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vL3ZhciBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50Jztcbi8vdmFyIGFwcCA9ICQoJzxkaXY+PGgxPkhlbGxvIFdvcmxkIGl0PC9oMT48L2Rpdj4nKTtcbmltcG9ydCAnLi9qcy9wbHVnaW4uanMnO1xubGV0IGFwcCA9ICQoJzxkaXY+PC9kaXY+Jyk7XG4vL2FwcC5hcHBlbmQoY29udGVudCgpKTtcbmNvbnN0IG15UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSg0Mik7XG5teVByb21pc2UudGhlbigobnVtYmVyKSA9PiB7XG4gICAgJCgnYm9keScpLmFwcGVuZCgnPHA+cHJvbWlzZSByZXN1bHQgaXMgJyArIG51bWJlciArICcgbm93IGlzIDxzcGFuPicgKyBtb21lbnQoKS5mb3JtYXQoKSArICc8L3NwYW4+PC9wPicpO1xuICAgIC8vY2FsbCBvdXIganF1ZXJ5IHBsdWdpbiFcbiAgICAkKCdwJykuZ3JlZW5pZnkoKTtcbn0pO1xuYXBwLmFwcGVuZCgnPGgxPkhlbGxvIFdvcmxkIGl0PC9oMT4nKTtcbmFwcC5hcHBlbmQoY29udGVudCgpKTtcbiQoJ2JvZHknKS5hcHBlbmQoYXBwKTtcbi8vJCgnYm9keScpLmFwcGVuZCgnPHA+bG9vayBhdCBtZSEgbm93IGlzICcgKyBtb21lbnQoKS5mb3JtYXQoKSArICc8L3A+Jyk7XG5mdW5jdGlvbiB0aW1lKCkge1xuICAgICQoJ3NwYW4nKS5odG1sKG1vbWVudCgpLmZvcm1hdCgpKTtcbn1cbnNldEludGVydmFsKHRpbWUsIDIwMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvZW50cnkuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9")},7:function(module,exports){eval('"use strict";\n\nfunction generateText() {\n    var element = document.createElement(\'h2\');\n    element.innerHTML = "Hello h2 world";\n    return element;\n}\nmodule.exports = generateText;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvY29udGVudC5qcz83Y2UzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBUyxZQUFULEdBQXdCO0FBQ3BCLFFBQUksVUFBVSxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVixDQURnQjtBQUVwQixZQUFRLFNBQVIsR0FBb0IsZ0JBQXBCLENBRm9CO0FBR3BCLFdBQU8sT0FBUCxDQUhvQjtDQUF4QjtBQUtBLE9BQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2VuZXJhdGVUZXh0KCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiSGVsbG8gaDIgd29ybGRcIjtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVUZXh0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2pzL2NvbnRlbnQuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9')},107:function(module,exports,__webpack_require__){eval("/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';\n\n(function ($) {\n    var shade = '#556b2f';\n    $.fn.greenify = function () {\n        this.css('color', shade);\n        return this;\n    };\n})(jQuery);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvcGx1Z2luLmpzPzlmYTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFVBQVUsQ0FBVixFQUFhO0FBQ1YsUUFBTSxRQUFRLFNBQVIsQ0FESTtBQUVWLE1BQUUsRUFBRixDQUFLLFFBQUwsR0FBZ0IsWUFBVztBQUN2QixhQUFLLEdBQUwsQ0FBUyxPQUFULEVBQWtCLEtBQWxCLEVBRHVCO0FBRXZCLGVBQU8sSUFBUCxDQUZ1QjtLQUFYLENBRk47Q0FBYixFQU1DLE1BTkQsQ0FBRCxDIiwiZmlsZSI6IjEwNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoJCkge1xuICAgIGNvbnN0IHNoYWRlID0gJyM1NTZiMmYnO1xuICAgICQuZm4uZ3JlZW5pZnkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jc3MoJ2NvbG9yJywgc2hhZGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KGpRdWVyeSkpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2pzL3BsdWdpbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=")}});