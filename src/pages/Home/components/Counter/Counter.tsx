import React from 'react';
import { Box, Typography } from '@mui/material';
import './Counter.scss';

type Props = {
    hours: number;
    minutes: number;
    seconds: number;
};

const Counter = ({ hours, minutes, seconds }: Props) => {
    const convertTimer = (time: number): string => {
        return time > 9 ? time.toString() : '0' + time;
    };
    return (
        <React.Fragment>
            <Box className='counter'>
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
