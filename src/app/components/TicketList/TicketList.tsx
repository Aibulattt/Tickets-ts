import React, { useCallback, useContext, useEffect, useState } from 'react'
import { TicketCard } from '../TicketCard/TicketCard'
import data from './Tickets.json'   //тут получаем список билетов и данные о них
import {nanoid} from 'nanoid'  //это либа для создания уникального айди
import { CurrencyContext } from '../../Context/CurrencyContext'
import { FilterContext } from '../../Context/FilterTransplantsContext'

interface ITicketCurrency {
    Valute: {
        USD: {
            Value: number
        },
        EUR: {
            Value: number
        }
    }
}

interface ITicketListProps {
    price: number,
    fromTime: string,
    fromCity: string,
    fromDate: string,
    toTime: string,
    toCity: string,
    toDate: string,
    transplants: string,
    transfers: string
}

//Компонент рендерит все билеты
export const TicketList = () => {
    //локальный стейт для записи иностранных валют
    const [currency, setCurrency] = useState<ITicketCurrency>({Valute: {USD: {Value: 0}, EUR: {Value: 0}}})
    //Получаем данные из контекста
    const {selectedCurrency} = useContext(CurrencyContext)
    const {filter} = useContext(FilterContext)

    const [ticketList, setTicketList] = useState<ITicketListProps[]>(data)

    useEffect(() => {
        //получаем из обьекта отмеченных чекбоксов только те, которые в true
        const filterItem = Object.entries(filter).reduce((acc, [ k, v ]) => v === true ? { ...acc, [k]: v } : acc, {})

        //записываем выбранные фильтры в массив
        const filterItems = Object.keys(filterItem)
        
        //фильтрация по количеству пересадок
        filterItems.forEach(el => {
            // setTicketList(data.filter(item => item.transfers === el))
            setTicketList(data.filter(({ transfers }) => filterItems.includes(transfers)))
        })

        //сортировка по цене
        ticketList.sort((a, b) => {
            if (a.price > b.price) {
                return 1
            } if (a.price < b.price) {
                return -1
            }
            return 0
        })
    }, [filter])
    
    //Получаем актуальные курсы валют
    const getExchangeRates =  useCallback(async () => {
        const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        const dataCurrency = await response.json()
        setCurrency(dataCurrency)
    }, [])

    useEffect(() => {
        getExchangeRates()
    }, [])

    return (
        <ul>
            {/* Мапаем  список билетов и выводим*/}
            {ticketList?.map((ticket: any) => {
                return (
                    // присваиваем каждой карточке id
                    <li key={nanoid()}> 
                    {/* рендерим саму карточку и передаем пропы */}
                        <TicketCard 
                            selectedCurrency={selectedCurrency}
                            currencyTicket={currency}
                            price={ticket.price} 
                            fromTime={ticket.fromTime}
                            fromCity={ticket.fromCity}
                            fromDate={ticket.fromDate}
                            toTime={ticket.toTime}
                            toCity={ticket.toCity}
                            toDate={ticket.toDate}
                            transplants={ticket.transplants}
                        />
                    </li>
                )
            })}
        </ul>
        
    )
}