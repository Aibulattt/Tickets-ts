/// <reference types="react" />
import './TicketCard.scss';
interface ITicketCard {
    price: number;
    fromTime: string;
    fromCity: string;
    fromDate: string;
    toTime: string;
    toCity: string;
    toDate: string;
    transplants: string;
    selectedCurrency?: string;
    currencyTicket: {
        Valute: {
            USD: {
                Value: number;
            };
            EUR: {
                Value: number;
            };
        };
    };
}
export declare const TicketCard: (props: ITicketCard) => JSX.Element;
export {};
