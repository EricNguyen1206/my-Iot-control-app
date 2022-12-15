import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';
import './Home.scss';
import AppSwitch from 'components/AppSwitch';
import TimerDialog from 'components/TimerDialog';
import useHome from './hooks/useHome';
import Counter from './components/Counter';
import Modes from './components/Modes';
import PlayButton from './components/PlayButton';

type Props = {};

const Home = (props: Props) => {
    const [
        timer,
        rotate,
        powerOn,
        powerMode,
        countdown,
        openDialog,
        startTimer,
        setRotate,
        setPowerOn,
        setPowerMode,
        setCountdown,
        setOpenDialog,
        setStartTimer,
    ] = useHome();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className='home' maxWidth='sm' sx={{ padding: 0 }}>
                <Grid
                    container
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    className='home-wrapper'
                >
                    <Grid item xs={4} className='home-power'>
                        <PlayButton />
                    </Grid>
                    <Grid item xs={8} className='home-setting'>
                        <Box className='home-setting__wrapper'>
                            <Box className='home-setting__mode'>
                                <Modes
                                    powerMode={powerMode}
                                    setMode={setPowerMode}
                                />
                            </Box>
                            <Box className='home-setting__rotate'>
                                <Typography
                                    variant='h3'
                                    className='home-setting__rotate--label'
                                >
                                    Rotate
                                </Typography>
                                <AppSwitch open={rotate} setOpen={setRotate} />
                            </Box>
                            <Box className='home-setting__timer'>
                                <Typography
                                    variant='h3'
                                    className='home-setting__timer--label'
                                >
                                    Timer
                                </Typography>
                                <AppSwitch
                                    open={startTimer}
                                    setOpen={setStartTimer}
                                />
                                <TimerDialog
                                    open={openDialog}
                                    setOpen={setOpenDialog}
                                />
                            </Box>
                            <Box className='home-setting__countdown'>
                                <Counter hours={0} minutes={1} seconds={0} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Home;
