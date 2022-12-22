import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import './Home.scss';
import AppSwitch from 'components/AppSwitch';
import TimerDialog from 'components/TimerDialog';
import useHome, { Mode } from './hooks/useHome';
import Counter from './components/Counter';
import Modes from './components/Modes';
import PlayButton from './components/PlayButton';
import TempClock from 'components/TempClock';
// import Slider from '@mui/material/Slider/Slider';
import Slider from 'components/Slider';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { db } from 'configs/firebase';

type Props = {};

const Home = (props: Props) => {
    const {
        timerEnable,
        tempEnable,
        timer,
        rotate,
        powerOn,
        powerMode,
        countdown,
        temperature,
        openDialog,
        startTimer,
        setRotate,
        setPowerOn,
        setPowerMode,
        setCountdown,
        setTemperature,
        setOpenDialog,
        setStartTimer,
        setTempEnable,
        setTimerEnable,
    } = useHome();

    useEffect(() => {
        const starCountRef = ref(db, '/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setPowerOn(data.fan.enable);
            setTimerEnable(data.timer.enable);
            setTempEnable(data.temp.enable);
        });
    }, []);

    const handleOnOffFan = () => {
        const db = getDatabase();
        set(ref(db, 'fan/enable'), !powerOn);
    };

    const handleEnableTimer = () => {
        const db = getDatabase();
        set(ref(db, 'timer/enable'), !timerEnable);
    };

    const handleEnableTempControl = () => {
        const db = getDatabase();
        set(ref(db, 'temp/enable'), !rotate);
    };

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
                        <PlayButton
                            powerOn={powerOn}
                            setPowerOn={handleOnOffFan}
                            mode={powerMode}
                            temperature={temperature}
                        />
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
                                <Slider
                                    sx={{
                                        visibility: `${
                                            powerMode === Mode.EnegySave
                                                ? 'hidden'
                                                : 'visible'
                                        }`,
                                    }}
                                    value={temperature}
                                    setValue={setTemperature}
                                />
                            </Box>
                            <Box className='home-setting__timer'>
                                <Typography
                                    variant='h3'
                                    className='home-setting__timer--label'
                                >
                                    Timer
                                </Typography>
                                <AppSwitch
                                    open={timerEnable}
                                    setOpen={handleEnableTimer}
                                />
                                <TimerDialog
                                    open={openDialog}
                                    setOpen={setOpenDialog}
                                />
                            </Box>
                            <Box className='home-setting__countdown'>
                                <Counter
                                    hours={0}
                                    minutes={1}
                                    seconds={0}
                                    setOpenDialog={setOpenDialog}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Home;
