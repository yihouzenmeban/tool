//require("!style!css!./app/style.css");
//require("./css/main.scss");
import './css/main.scss';
//var content = require("./js/content.js");
//import content from './js/content.js';
//var $ = require('jquery');
import $ from 'jquery';
//var moment = require('moment');
//import moment from 'moment';
//var app = $('<div><h1>Hello World it</h1></div>');
import 'imports?jQuery=jquery!./js/plugin.js';
$(document).ready(function() {
    $('body').append('<div><h1>Hello World!</h1></div>');
    $('h1').greenify();
})