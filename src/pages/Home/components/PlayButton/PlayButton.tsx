import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import './PlayButton.scss';
import { Mode } from 'pages/Home/hooks/useHome';
import { Typography } from '@mui/material';
type Props = {
    powerOn: boolean;
    setPowerOn: React.Dispatch<React.SetStateAction<boolean>>;
    mode?: Mode;
    temperature?: number;
};

const PlayButton = ({
    powerOn,
    setPowerOn,
    mode = Mode.EnegySave,
    temperature = 32,
}: Props) => {
    return (
        <div className='circle'>
            <span
                className={`circle__btn ${powerOn && 'shadow'}`}
                onClick={() => setPowerOn((prev) => !prev)}
            >
                {mode === Mode.EnegySave ? (
                    <React.Fragment>
                        <PlayArrowIcon
                            className={`pause ${powerOn && 'visibility'}`}
                        />
                        <StopIcon
                            className={`play ${powerOn && 'visibility'}`}
                        />
                    </React.Fragment>
                ) : (
                    <Typography variant='h2' className='circle__btn--number'>
                        {temperature}°
                    </Typography>
                )}
            </span>
            <span className={`circle__back-1 ${!powerOn && 'paused'}`} />
            <span className={`circle__back-2 ${!powerOn && 'paused'}`} />
        </div>
    );
};

export default PlayButton;
