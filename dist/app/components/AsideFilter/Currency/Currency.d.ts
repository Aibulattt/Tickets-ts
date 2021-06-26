/// <reference types="react" />
import './Currency.scss';
interface ICurrencyProp {
    onChangeCurrency: (currency: string) => void;
}
export declare const Currency: ({ onChangeCurrency }: ICurrencyProp) => JSX.Element;
export {};
