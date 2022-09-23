import { registerPlugin } from '@capacitor/core';
const AppCheck = registerPlugin('AppCheck', {
    web: () => import('./web').then(m => new m.AppCheckWeb()),
});
export * from './definitions';
export { AppCheck };
//# sourceMappingURL=index.js.map