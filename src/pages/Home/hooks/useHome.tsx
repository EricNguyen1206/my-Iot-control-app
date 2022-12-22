import { useState } from 'react';
import { Timer, useCountdown } from './useCountdown';
export enum Mode {
    EnegySave = 1,
    Medium = 2,
    Strong = 3,
}
export type HomeHookType = {
    timer: Timer;
    rotate: boolean;
    powerMode: Mode;
    powerOn: boolean;
    countdown: Date;
    temperature: number;
    openDialog: boolean;
    startTimer: boolean;
    setRotate: React.Dispatch<React.SetStateAction<boolean>>;
    setPowerMode: React.Dispatch<React.SetStateAction<Mode>>;
    setPowerOn: React.Dispatch<React.SetStateAction<boolean>>;
    setCountdown: React.Dispatch<React.SetStateAction<Date>>;
    setTemperature: React.Dispatch<React.SetStateAction<number>>;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
    setStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function useHome(): HomeHookType {
    const [countdown, setCountdown] = useState<Date>(() => new Date());
    const [startTimer, setStartTimer] = useState<boolean>(false);
    const [powerOn, setPowerOn] = useState<boolean>(false);
    const [timer] = useCountdown({
        countdown,
        startTimer,
        setStartTimer,
        setPowerOn,
    });
    const [powerMode, setPowerMode] = useState<Mode>(Mode.EnegySave);
    const [temperature, setTemperature] = useState<number>(32);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [rotate, setRotate] = useState<boolean>(false);

    return {
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
    };
}
