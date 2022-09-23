import { WebPlugin } from '@capacitor/core';
import type { AppCheckPlugin } from './definitions';
export declare class AppCheckWeb extends WebPlugin implements AppCheckPlugin {
    getToken(): Promise<{
        token: string;
        expireTimeMillis: string;
    }>;
    enableDebug(): Promise<void>;
}
