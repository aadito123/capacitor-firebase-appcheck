'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const AppCheck = core.registerPlugin('AppCheck', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AppCheckWeb()),
});

class AppCheckWeb extends core.WebPlugin {
    async getToken() {
        return { token: 'web', expireTimeMillis: 'web' };
    }
    async enableDebug() {
        return;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AppCheckWeb: AppCheckWeb
});

exports.AppCheck = AppCheck;
//# sourceMappingURL=plugin.cjs.js.map
