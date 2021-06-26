import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { AsideFilter } from './components/AsideFilter/AsideFilter'
import { TicketList } from './components/TicketList/TicketList'
import { CurrencyContext } from './Context/CurrencyContext'
import { FilterContext } from './Context/FilterTransplantsContext'
import { Header } from './components/Header'

// основной компонент
export const App = () => {
    //Создаем стейт и передаем его в контекст, в нем храним текющу валюту
    const [selectedCurrency, setSelectedCurrency] = useState<string>('rub')
    const [filter, setFilter] = useState({})

    const onChangeFilter = (filter: {}) => {
        setFilter(filter)
    }

    //возвращает доченрие компоненты
    return (
        <Grid container>
            <FilterContext.Provider value={{
                filter,
                onChangeFilter
            }}>
                <CurrencyContext.Provider value={{
                    selectedCurrency, 
                    onChangeCurrency: setSelectedCurrency
                }}>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                    <Grid item xs={4}>
                        {/* Компонент фильтрации билетов */}
                        <AsideFilter />
                    </Grid>
                    <Grid item xs={8}>
                        {/* список билетов */}
                        <TicketList />
                    </Grid>
                </CurrencyContext.Provider>
            </FilterContext.Provider>
        </Grid>
    )
}