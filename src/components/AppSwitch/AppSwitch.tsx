import { Box } from '@mui/material';
import React from 'react';
import './AppSwitch.scss';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppSwitch = ({ open, setOpen }: Props) => {
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box className='switch' onClick={handleClick}>
            <input className='switch__input' type='checkbox' />
            <label className={`switch__label ${open && 'checked'}`}></label>
        </Box>
    );
};

export default AppSwitch;
