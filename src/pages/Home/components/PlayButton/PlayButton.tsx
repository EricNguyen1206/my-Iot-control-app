import React, { useEffect, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import './PlayButton.scss';
import { Mode } from 'pages/Home/hooks/useHome';
import { Typography } from '@mui/material';
import useFirebase from 'hooks/useFirebase';
import moment, { Moment } from 'moment';
type Props = {
    powerOn: boolean;
    mode?: Mode;
    startTime: Moment | null;
    endTime: Moment | null;
    setPowerOn: React.Dispatch<React.SetStateAction<boolean>>;
    setPowerMode: React.Dispatch<React.SetStateAction<Mode>>;
};

const PlayButton = ({
    powerOn,
    mode = Mode.Fan,
    startTime,
    endTime,
    setPowerOn,
    setPowerMode,
}: Props) => {
    const {
        curTemperature,
        handleOnOffFan,
        handleEnableTempControl,
        handleEnableTimer,
    } = useFirebase();
    const [curTime, setCurrentTime] = useState<Moment | null>(
        moment(new Date())
    );

    useEffect(() => {
        const interval = setInterval(() => {
            const curMoment = moment(new Date());
            if (
                moment(curMoment).isBefore(endTime) &&
                moment(curMoment).isAfter(startTime)
            ) {
                handleOnOffFan(true);
                setPowerOn(true);
            } else {
                handleOnOffFan(false);
                setPowerOn(false);
            }
            setCurrentTime(curMoment);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        handleOnOffFan(!powerOn);
        setPowerMode(Mode.Fan);
        setPowerOn(!powerOn);
        handleEnableTempControl(false);
        handleEnableTimer(false);
    };

    return (
        <div className='circle'>
            <span
                className={`circle__btn ${powerOn && 'shadow'}`}
                onClick={handleClick}
            >
                {mode === Mode.Fan ? (
                    <React.Fragment>
                        <PlayArrowIcon
                            className={`pause ${powerOn && 'visibility'}`}
                        />
                        <StopIcon
                            className={`play ${powerOn && 'visibility'}`}
                        />
                    </React.Fragment>
                ) : mode === Mode.Temp ? (
                    <Typography variant='h2' className='circle__btn--number'>
                        {curTemperature}°
                    </Typography>
                ) : (
                    <Typography variant='h2' className='circle__btn--time'>
                        {moment(curTime).format('H:mm')}
                    </Typography>
                )}
            </span>
            <span className={`circle__back-1 ${!powerOn && 'paused'}`} />
            <span className={`circle__back-2 ${!powerOn && 'paused'}`} />
        </div>
    );
};

export default PlayButton;
