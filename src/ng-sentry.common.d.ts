export interface KeyValue<T> {
    [key: string]: T;
}
export declare class Common {
    private static instance;
    private maxAmountOfBreadcrumbs;
    private endPoint;
    private readonly storageKey;
    private breadcrumbs;
    private versionName;
    private versionCode;
    private sentryId;
    private environment;
    private userId;
    constructor();
    static getInstance(): Common;
    setCredentials(sentryId: string, sentryKey: string, environment?: string, userId?: string): void;
    setCustomEndPoint(endPoint: string, sentryId: string, environment?: string): void;
    setMaxAmountOfBreadcrumbs(amount: number): void;
    saveBreadcrumb(message: string, category: string, properties?: KeyValue<string>): void;
    saveCrash(errorMessage: string, errorDetails: string): void;
    sendCrashes(): void;
    private submitCrash(crash);
    private setVersionName();
    private setVersionCode();
    private isPresentInSettings(storeKey);
    private customIndexOf(arr, searchElement);
}
