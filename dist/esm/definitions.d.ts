export interface AppCheckPlugin {
    getToken(): Promise<{
        token: string;
        expireTimeMillis: string;
    }>;
    enableDebug(): Promise<void>;
}
