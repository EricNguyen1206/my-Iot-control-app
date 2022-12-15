import React from 'react';
import './AppSwitch.scss';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppSwitch = ({ open, setOpen }: Props) => {
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className='switch' onClick={handleClick}>
            <input className='switch__input' type='checkbox' />
            <label className={`switch__label ${open && 'checked'}`}></label>
        </div>
    );
};

export default AppSwitch;
