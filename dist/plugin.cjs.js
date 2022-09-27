'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const AppCheck = core.registerPlugin('AppCheck', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AppCheckWeb()),
});

class AppCheckWeb extends core.WebPlugin {
    async getToken() {
        throw new Error('Method not implemented, use Firebase JS SDK');
    }
    async enableDebug() {
        throw new Error('Method not implemented, use Firebase JS SDK');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AppCheckWeb: AppCheckWeb
});

exports.AppCheck = AppCheck;
//# sourceMappingURL=plugin.cjs.js.map
