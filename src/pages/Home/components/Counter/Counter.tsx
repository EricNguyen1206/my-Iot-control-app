import React from 'react';
import { Box, Typography } from '@mui/material';
import './Counter.scss';
import moment from 'moment';

type Props = {
    hours: number;
    minutes: number;
    seconds: number;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const Counter = ({ hours, minutes, seconds, setOpenDialog }: Props) => {
    const convertTimer = (time: number): string => {
        return time > 9 ? time.toString() : '0' + time;
    };
    const handleClick = () => {
        setOpenDialog(true);
    };
    return (
        <React.Fragment>
            <Box className='counter' onClick={handleClick}>
                <Typography variant='body1' className='counter__number'>
                    {convertTimer(hours)}
                </Typography>

                <Typography variant='body1' className='counter__colon'>
                    :
                </Typography>

                <Typography variant='body1' className='counter__number'>
                    {convertTimer(minutes)}
                </Typography>

                <Typography variant='body1' className='counter__colon'>
                    :
                </Typography>

                <Typography variant='body1' className='counter__number'>
                    {convertTimer(seconds)}
                </Typography>
            </Box>
        </React.Fragment>
    );
};

export default Counter;
