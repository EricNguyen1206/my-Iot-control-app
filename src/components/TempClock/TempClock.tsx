import React from 'react';
import { Box, Typography } from '@mui/material';
import './TempClock.scss';

type Props = {
    temperature: number;
};

const TempClock = ({ temperature }: Props) => {
    return (
        <React.Fragment>
            <Box className='temp-clock active'>
                <Typography variant='h2' className='temp-clock__number'>
                    {temperature}°
                </Typography>
            </Box>
        </React.Fragment>
    );
};

export default TempClock;
