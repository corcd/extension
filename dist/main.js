"use strict";
var path = require('path');
var fs = require('fs-extra');
var hooks = require('./hooks');
var hook = function (name, fn) {
    hooks.add(name, fn);
};
var loadPlugin = function () {
    fs.readdirSync(path.join(__dirname, './plugins')).forEach(function (file) {
        return require(require.resolve(__dirname + "/plugins/" + file)).apply(hook);
    });
};
var onCreate = function () {
    console.log('onCreate');
    hooks.invoke('onCreate', { name: 'onCreate' });
};
var onStart = function () {
    console.log('onStart');
    hooks.invoke('onCreate', { name: 'onStart' });
};
var main = function () {
    loadPlugin();
    onCreate();
    onStart();
};
main();
