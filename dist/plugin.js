var capacitorAppCheck = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
