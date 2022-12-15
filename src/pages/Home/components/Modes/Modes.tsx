import React from 'react';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import './Modes.scss';
import { Mode } from 'pages/Home/hooks/useHome';

type Props = {
    powerMode: Mode;
    setMode: React.Dispatch<React.SetStateAction<Mode>>;
};

const Modes = ({ powerMode, setMode }: Props) => {
    return (
        <div className='modes'>
            <input
                type='radio'
                name='radio2'
                defaultValue={Mode.EnegySave}
                id='tab-1'
                onClick={() => setMode(Mode.EnegySave)}
            />
            <label
                htmlFor='tab-1'
                className={`modes__1 ${
                    powerMode === Mode.EnegySave && 'active'
                }`}
            >
                <p>
                    <KeyboardCommandKeyIcon className='home-mode__icon' />
                </p>
            </label>
            <input
                type='radio'
                name='radio2'
                defaultValue={Mode.Medium}
                id='tab-2'
                onClick={() => setMode(Mode.Medium)}
            />
            <label
                htmlFor='tab-2'
                className={`modes__2 ${powerMode === Mode.Medium && 'active'}`}
            >
                <p>
                    <ThermostatAutoIcon className='home-mode__icon' />
                </p>
            </label>
        </div>
    );
};

export default Modes;
