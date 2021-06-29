import React, { useContext, useState } from 'react'
import { Currency } from './Currency/Currency'
import { Transplant } from './Transplant/Transplant'
import './AsideFilter.scss'
import { CurrencyContext } from '../../Context/CurrencyContext'

export const AsideFilter = () => {

    const {onChangeCurrency} = useContext(CurrencyContext)
    
    return (
        <div className='aside-filter'>
            <Currency 
                onChangeCurrency={onChangeCurrency}
            />
            <Transplant />
        </div>
    )
}