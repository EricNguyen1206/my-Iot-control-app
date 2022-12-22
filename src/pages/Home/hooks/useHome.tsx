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
    countdown: number;
    temperature: number;
    openDialog: boolean;
    startTimer: boolean;
    timerEnable: boolean;
    tempEnable: boolean;
    setRotate: React.Dispatch<React.SetStateAction<boolean>>;
    setPowerMode: React.Dispatch<React.SetStateAction<Mode>>;
    setPowerOn: React.Dispatch<React.SetStateAction<boolean>>;
    setCountdown: React.Dispatch<React.SetStateAction<number>>;
    setTemperature: React.Dispatch<React.SetStateAction<number>>;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
    setStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
    setTimerEnable: React.Dispatch<React.SetStateAction<boolean>>;
    setTempEnable: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function useHome(): HomeHookType {
    const [countdown, setCountdown] = useState<number>(0);
    const [startTimer, setStartTimer] = useState<boolean>(false);
    const [timer] = useCountdown({
        milliseconds: countdown,
        startTimer,
        setStartTimer,
    });
    const [powerOn, setPowerOn] = useState<boolean>(false);
    const [powerMode, setPowerMode] = useState<Mode>(Mode.EnegySave);
    const [temperature, setTemperature] = useState<number>(32);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [rotate, setRotate] = useState<boolean>(false);
    const [timerEnable, setTimerEnable] = useState<boolean>(false);
    const [tempEnable, setTempEnable] = useState<boolean>(false);

    return {
        timer,
        rotate,
        powerOn,
        powerMode,
        countdown,
        temperature,
        openDialog,
        startTimer,
        timerEnable,
        tempEnable,
        setRotate,
        setPowerOn,
        setPowerMode,
        setCountdown,
        setTemperature,
        setOpenDialog,
        setStartTimer,
        setTimerEnable,
        setTempEnable,
    };
}
