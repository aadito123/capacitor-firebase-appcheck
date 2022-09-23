import { WebPlugin } from '@capacitor/core';
import type { AppCheckPlugin } from './definitions';

export class AppCheckWeb extends WebPlugin implements AppCheckPlugin {
  async getToken(): Promise<{ token: string; expireTimeMillis: string }> {
    throw new Error('Method not implemented, use Firebase JS SDK');
  }
  async enableDebug(): Promise<void> {
    throw new Error('Method not implemented, use Firebase JS SDK');
  }
}
