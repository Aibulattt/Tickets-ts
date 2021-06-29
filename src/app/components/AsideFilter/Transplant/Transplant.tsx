import React, { useContext, useEffect, useState } from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { FilterContext } from '../../../Context/FilterTransplantsContext'
import './Transplant.scss'

interface IChecked {
    transplantAll: boolean,
    direct: boolean,
    transplantOne: boolean,
    transplantTwo: boolean,
    transplantThree: boolean
}

//компонент для выбора кол-ва пересадок
export const Transplant = () => {
    const {onChangeFilter} = useContext(FilterContext)
    
    const [checked, setChecked] = useState<IChecked>({
        transplantAll: true,
        direct: false,
        transplantOne: false,
        transplantTwo: false,
        transplantThree: false
    })


    useEffect(() => {
        if ((checked.direct === true) || (checked.transplantOne === true) || (checked.transplantThree === true) || (checked.transplantTwo === true)) {
            setChecked({transplantAll: false,direct: checked.direct, transplantOne: checked.transplantOne, transplantThree: checked.transplantThree, transplantTwo: checked.transplantTwo})
        } 
    }, [checked.direct, checked.transplantOne, checked.transplantTwo, checked.transplantThree])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked })
        onChangeFilter({...checked,[event.target.name]: event.target.checked})
    }
    return (
        <div className="transplant">
            <h2 className='transplant__title'>Количество пересадок</h2>
            <FormGroup row>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={checked.transplantAll}
                        onChange={handleChange}
                        name="transplantAll"
                        color="primary"
                    />
                    }
                    label="Все"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={checked.direct}
                        onChange={handleChange}
                        name="direct"
                        color="primary"
                    />
                    }
                    label="Без пересадок"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={checked.transplantOne}
                        onChange={handleChange}
                        name="transplantOne"
                        color="primary"
                    />
                    }
                    label="1 пересадка"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={checked.transplantTwo}
                        onChange={handleChange}
                        name="transplantTwo"
                        color="primary"
                    />
                    }
                    label="2 пересадки"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={checked.transplantThree}
                        onChange={handleChange}
                        name="transplantThree"
                        color="primary"
                    />
                    }
                    label="3 пересадки"
                />
            </FormGroup>    
        </div>

    )
}