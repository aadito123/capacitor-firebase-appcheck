import { WebPlugin } from '@capacitor/core';
export class AppCheckWeb extends WebPlugin {
    async getToken() {
        return { token: 'web', expireTimeMillis: 'web' };
    }
    async enableDebug() {
        return;
    }
}
//# sourceMappingURL=web.js.map