var capacitorAppCheck = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
