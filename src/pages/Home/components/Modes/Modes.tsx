import React from 'react';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import './Modes.scss';
import { Mode } from 'pages/Home/hooks/useHome';
import useFirebase from 'hooks/useFirebase';

type Props = {
    powerMode: Mode;
    setMode: React.Dispatch<React.SetStateAction<Mode>>;
};

const Modes = ({ powerMode, setMode }: Props) => {
    const { handleEnableTimer, handleEnableTempControl } = useFirebase();
    const handleClick = (mode: Mode) => {
        setMode(mode);
        if (mode === Mode.Temp) {
            handleEnableTempControl(true);
            handleEnableTimer(false);
            return;
        }
        if (mode === Mode.Timer) {
            handleEnableTempControl(false);
            handleEnableTimer(true);
            return;
        }
        handleEnableTempControl(false);
        handleEnableTimer(false);
    };
    return (
        <div className='modes'>
            <input
                type='radio'
                name='radio1'
                defaultValue={Mode.Fan}
                id='tab-1'
                onClick={() => handleClick(Mode.Fan)}
            />
            <label
                htmlFor='tab-1'
                className={`modes__1 ${powerMode === Mode.Fan && 'active'}`}
            >
                <p>
                    <KeyboardCommandKeyIcon className='home-mode__icon' />
                </p>
            </label>
            <input
                type='radio'
                name='radio2'
                defaultValue={Mode.Temp}
                id='tab-2'
                onClick={() => {
                    handleClick(Mode.Temp);
                }}
            />
            <label
                htmlFor='tab-2'
                className={`modes__2 ${powerMode === Mode.Temp && 'active'}`}
            >
                <p>
                    <ThermostatAutoIcon className='home-mode__icon' />
                </p>
            </label>
            <input
                type='radio'
                name='radio3'
                defaultValue={Mode.Timer}
                id='tab-3'
                onClick={() => {
                    handleClick(Mode.Timer);
                }}
            />
            <label
                htmlFor='tab-3'
                className={`modes__3 ${powerMode === Mode.Timer && 'active'}`}
            >
                <p>
                    <AccessAlarmIcon className='home-mode__icon' />
                </p>
            </label>
        </div>
    );
};

export default Modes;
