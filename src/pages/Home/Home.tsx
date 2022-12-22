import { Box, Container, CssBaseline, Grid, TextField } from '@mui/material';
import React from 'react';
import './Home.scss';
import useHome, { Mode } from './hooks/useHome';
import Modes from './components/Modes';
import PlayButton from './components/PlayButton';
import Slider from 'components/Slider';
import { TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';

type Props = {};

const Home = (props: Props) => {
    const {
        powerOn,
        powerMode,
        temperature,
        startTime,
        endTime,
        setPowerOn,
        setPowerMode,
        setTemperature,
        setFbStartTime,
        setFbEndTime,
    } = useHome();

    return (
        <React.Fragment>
            <LocalizationProvider dateAdapter={AdapterMoment}>
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
                                setPowerOn={setPowerOn}
                                mode={powerMode}
                                setPowerMode={setPowerMode}
                                startTime={startTime}
                                endTime={endTime}
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
                                <Box
                                    className='home-setting__temperature'
                                    sx={{
                                        display: `${
                                            powerMode === Mode.Temp
                                                ? 'flex'
                                                : 'none !important'
                                        }`,
                                    }}
                                >
                                    <Slider
                                        value={temperature}
                                        setValue={setTemperature}
                                    />
                                </Box>
                                <Box
                                    className='home-setting__timer'
                                    sx={{
                                        display: `${
                                            powerMode === Mode.Timer
                                                ? 'flex'
                                                : 'none !important'
                                        }`,
                                    }}
                                >
                                    <TimePicker
                                        className='home-setting__timer--item'
                                        label='Start'
                                        value={startTime}
                                        onChange={(newValue) =>
                                            setFbStartTime(
                                                moment(newValue).isBefore(
                                                    endTime
                                                )
                                                    ? newValue
                                                    : endTime
                                            )
                                        }
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                    <TimePicker
                                        className='home-setting__timer--item'
                                        label='End'
                                        value={endTime}
                                        onChange={(newValue) =>
                                            setFbEndTime(
                                                moment(newValue).isAfter(
                                                    startTime
                                                )
                                                    ? newValue
                                                    : startTime
                                            )
                                        }
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </LocalizationProvider>
        </React.Fragment>
    );
};

export default Home;
