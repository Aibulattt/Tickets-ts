import { createContext } from "react";

interface ICurrencyContext {
    selectedCurrency?: string
    onChangeCurrency: (currency: string) => void
}
export const CurrencyContext = createContext<ICurrencyContext>({
    selectedCurrency: '',
    onChangeCurrency: () => {}
})
