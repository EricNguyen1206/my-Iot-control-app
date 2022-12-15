import { useState } from 'react';
import { Timer, useCountdown } from './useCountdown';
export enum Mode {
    EnegySave = 1,
    Medium = 2,
    Strong = 3,
}
export type HomeHookType = [
    timer: Timer,
    rotate: boolean,
    powerOn: boolean,
    powerMode: Mode,
    countdown: number,
    openDialog: boolean,
    startTimer: boolean,
    setRotate: React.Dispatch<React.SetStateAction<boolean>>,
    setPowerOn: React.Dispatch<React.SetStateAction<boolean>>,
    setCountdown: React.Dispatch<React.SetStateAction<number>>,
    setPowerMode: React.Dispatch<React.SetStateAction<Mode>>,
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>,
    setStartTimer: React.Dispatch<React.SetStateAction<boolean>>
];
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
    const [openDialog, setOpenDialog] = useState<boolean>(true);
    const [rotate, setRotate] = useState<boolean>(false);

    return [
        timer,
        rotate,
        powerOn,
        powerMode,
        countdown,
        openDialog,
        startTimer,
        setRotate,
        setPowerOn,
        setPowerMode,
        setCountdown,
        setOpenDialog,
        setStartTimer,
    ];
}
