import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import './PlayButton.scss';
type Props = {};

const PlayButton = (props: Props) => {
    const [powerOn, setPowerOn] = React.useState<boolean>(false);
    return (
        <div className='circle'>
            <span
                className={`circle__btn ${powerOn && 'shadow'}`}
                onClick={() => setPowerOn((prev) => !prev)}
            >
                <PlayArrowIcon className={`pause ${powerOn && 'visibility'}`} />
                <StopIcon className={`play ${powerOn && 'visibility'}`} />
            </span>
            <span className={`circle__back-1 ${!powerOn && 'paused'}`} />
            <span className={`circle__back-2 ${!powerOn && 'paused'}`} />
        </div>
    );
};

export default PlayButton;
