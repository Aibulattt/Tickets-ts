/// <reference types="react" />
interface ICurrencyContext {
    selectedCurrency?: string;
    onChangeCurrency: (currency: string) => void;
}
export declare const CurrencyContext: import("react").Context<ICurrencyContext>;
export {};
