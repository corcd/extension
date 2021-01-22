"use strict";
console.log('1 loaded');
function apply(hook) {
    hook('onCreate', function (ctx) {
        console.log('1-onCreate');
        console.log(ctx);
    });
    hook('onStart', function (ctx) {
        console.log('1-onStart');
        console.log(ctx);
    });
}
module.exports = { apply: apply };
