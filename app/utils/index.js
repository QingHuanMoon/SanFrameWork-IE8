/**
 * 基础补丁包
 * */
require('./patch/console');
require('es6-promise/auto');

/**
 * 功能扩展包
 * */
// window.$ = require('./tools/jquery.min');
window.$ajax = require('axios')
window.San = require('san')
window.DataTypes = San.DataTypes
window.sanRouter = require('san-router');
window.router = sanRouter.router;
window.Link = sanRouter.Link;

