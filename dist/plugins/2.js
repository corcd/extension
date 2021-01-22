"use strict";
console.log('2 loaded');
function apply(hook) {
    hook('onCreate', function (ctx) {
        console.log('2-onCreate');
        console.log(ctx);
    });
    hook('onStart', function (ctx) {
        console.log('2-onStart');
        console.log(ctx);
    });
}
module.exports = { apply: apply };
