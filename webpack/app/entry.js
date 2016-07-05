//require("!style!css!./app/style.css");
//require("./css/main.scss");
import './css/main.scss';
//var content = require("./js/content.js");
import content from './js/content.js';
//var $ = require('jquery');
//import $ from 'jquery';
//var moment = require('moment');
import moment from 'moment';
//var app = $('<div><h1>Hello World it</h1></div>');
import './js/plugin.js';
let app = $('<div></div>');
//app.append(content());
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
    $('body').append('<p>promise result is ' + number + ' now is <span>' + moment().format() + '</span></p>');
    //call our jquery plugin!
    $('p').greenify();
});
app.append('<h1>Hello World it</h1>');
app.append(content());
$('body').append(app);
//$('body').append('<p>look at me! now is ' + moment().format() + '</p>');
function time() {
    $('span').html(moment().format());
}
setInterval(time, 200);