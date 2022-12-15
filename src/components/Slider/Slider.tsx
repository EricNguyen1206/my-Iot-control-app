import Box from '@mui/material/Box/Box';
import Slider from '@mui/material/Slider/Slider';
import React, { useState } from 'react';
import './Slider.scss';

type Props = {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
    [props: string]: any;
};

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 32,
        label: '32°C',
    },
    {
        value: 50,
        label: '50°C',
    },
];

function valuetext(value: number) {
    return `${value}°C`;
}

const SlideSwitch = ({ value, setValue, ...props }: Props) => {
    const handleChangeValue = (e: Event) => {
        const target: any = e.target;
        setValue(target.value);
    };
    return (
        <Box className='slider ' {...props}>
            <Slider
                className='slider__component'
                aria-label='Always visible'
                value={value}
                onChange={handleChangeValue}
                getAriaValueText={valuetext}
                step={1}
                marks={marks}
                max={50}
            />
        </Box>
    );
};

export default SlideSwitch;
