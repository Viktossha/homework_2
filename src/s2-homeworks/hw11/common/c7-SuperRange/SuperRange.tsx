import React from 'react'
import {Slider, SliderProps} from '@mui/material'

type SuperRangeType = SliderProps & {
    onChange: (event: any, value: any) => void
    value: number | number[]
}

const SuperRange: React.FC<SuperRangeType> = (props: SuperRangeType) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                width: '250px'
            }}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default SuperRange
