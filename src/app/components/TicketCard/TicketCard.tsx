import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import './TicketCard.scss'

//интрефейс для пропов карточки билета
interface ITicketCard {
    price: number,
    fromTime: string,
    fromCity: string,
    fromDate: string,
    toTime: string,
    toCity: string,
    toDate: string,
    transplants: string,
    selectedCurrency?: string,
    currencyTicket: {
        Valute: {
            USD: {
                Value: number
            },
            EUR: {
                Value: number
            }
        }
    }
}

//стили для компонентов material-ui
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        backgroundColor: '#f57c00',
        minWidth: 200,
        fontSize: 18,
        lineHeight: "24px",
        color: '#fff'
      },
    },
  }),
)

//карточка билета
export const TicketCard = (props: ITicketCard) => {
    //локальный стейт для перезаписи валюты
    const [price, setPrice] = useState(props.price)
    
    //меняем валюту в случае изменения
    useEffect(() => {
        if(props.selectedCurrency === 'usd') setPrice(price/props.currencyTicket.Valute.USD.Value)
        else if (props.selectedCurrency === 'eur')  setPrice(price/props.currencyTicket.Valute.EUR.Value)
    }, [])

    const handleClick = () => {
        alert('Redirected to checkout page')
        
    }

    const classes = useStyles()
    
    return (
        <div className="ticket-card">
            <div className="ticket__buy">
                <img className='ticket__logo' src="../../../assets/logo-card.jpeg" alt="logo" />
                <div className={classes.root}>
                    <Button 
                        variant="contained" 
                        className="ticket__btn btn"
                        onClick={handleClick}
                    >
                        Купить 
                        <span>
                            {((price ^ 0) === price) ? price : price.toFixed(2)}
                        </span>
                    </Button>
                </div>
            </div>
            <div className="ticket__flight">
                <div className="flight__from">
                    <p className='flight__time'>{props.fromTime}</p>
                    <p className='flight__city'>{props.fromCity}</p>
                    <p className='flight__date'>{props.fromDate}</p>
                </div>
                <div className='flight__arrow'>{props.transplants}</div>
                <div className="flight__to">
                    <p className='flight__time'>{props.toTime}</p>
                    <p className='flight__city'>{props.toCity}</p>
                    <p className='flight__date'>{props.toDate}</p>
                </div>
            </div>
        </div>
    )
}
