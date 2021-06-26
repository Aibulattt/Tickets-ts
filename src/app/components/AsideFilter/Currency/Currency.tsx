import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import './Currency.scss'

interface ICurrencyProp {
    onChangeCurrency: (currency: string) => void
}

interface IBtnActive {
    rub: boolean,
    usd: boolean,
    eur: boolean
}

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    active: {
      backgroundColor: '#00BFFF',
      color: '#fff',
      '&:hover': {
        color: '#3f51b5'
      }
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

//компонент для выбора валюты
export const Currency = ({onChangeCurrency}: ICurrencyProp) => {
    const classes = useStyles()

    //стейт для определения класса у кнопок
    const [btnRub, setBtnRub] = useState<boolean>(true)
    const [btnUsd, setBtnUsd] = useState<boolean>(false)
    const [btnEur, setBtnEur] = useState<boolean>(false)

    //класс для кнопок
    const activeBtnRub: string = btnRub ? classes.active : ''
    const activeBtnUsd: string = btnUsd ? classes.active : ''
    const activeBtnEur: string = btnEur ? classes.active : ''

    // переключает активный класс у кнопок
    const toggleClassRub = () => {
        setBtnRub(!btnRub)
        setBtnUsd(false)
        setBtnEur(false)
    }

    const toggleClassUsd = () => {
        setBtnRub(false)
        setBtnUsd(!btnUsd)
        setBtnEur(false)
    }

    const toggleClassEur = () => {
        setBtnRub(false)
        setBtnUsd(false)
        setBtnEur(!btnEur)
    }

    return (
        <div className="currency">
            <h2 className='currency__title'>Валюта</h2>
            <div className="currency__btn-group">
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button 
                        className={activeBtnRub}
                        onClick={ev => {
                            onChangeCurrency(ev.currentTarget.id)
                            toggleClassRub()
                        }}
                        id='rub'
                    >
                            RUB
                    </Button>
                    <Button 
                        className={activeBtnUsd}
                        onClick={ev => {
                            onChangeCurrency(ev.currentTarget.id)
                            toggleClassUsd()
                        }}
                        id='usd'
                    >
                            USD
                    </Button>
                    <Button 
                        className={activeBtnEur}
                        onClick={ev => {
                            onChangeCurrency(ev.currentTarget.id)
                            toggleClassEur()
                        }}
                        id='eur'
                    >
                            EUR
                    </Button>
                </ButtonGroup>  
            </div>
        </div>
    )
}