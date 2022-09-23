import { WebPlugin } from '@capacitor/core';
import type { AppCheckPlugin } from './definitions';

export class AppCheckWeb extends WebPlugin implements AppCheckPlugin {
  async getToken(): Promise<{ token: string; expireTimeMillis: string }> {
    return { token: 'web', expireTimeMillis: 'web' };
  }
  async enableDebug(): Promise<void> {
    return;
  }
}
