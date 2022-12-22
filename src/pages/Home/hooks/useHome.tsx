import { db } from 'configs/firebase';
import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import moment, { Moment } from 'moment';
import getNextHours from 'utils/getNextHour';
import useFirebase from 'hooks/useFirebase';
export enum Mode {
    Fan = 1,
    Temp = 2,
    Timer = 3,
}
export type HomeHookType = {
    powerOn: boolean;
    powerMode: Mode;
    temperature: number;
    startTime: Moment | null;
    endTime: Moment | null;
    setPowerMode: React.Dispatch<React.SetStateAction<Mode>>;
    setPowerOn: React.Dispatch<React.SetStateAction<boolean>>;
    setTemperature: React.Dispatch<React.SetStateAction<number>>;
    setFbStartTime: any;
    setFbEndTime: any;
};
export default function useHome(): HomeHookType {
    const [powerOn, setPowerOn] = useState<boolean>(false);
    const [powerMode, setPowerMode] = useState<Mode>(Mode.Fan);
    const [temperature, setTemperature] = useState<number>(32);
    const [startTime, setStartTime] = useState<Moment | null>(
        moment(new Date())
    );
    const [endTime, setEndTime] = useState<Moment | null>(
        moment(getNextHours())
    );

    const {
        curTemperature,
        handleOnOffFan,
        handleSetStartTimer,
        handleSetEndTimer,
    } = useFirebase();

    const setFbStartTime = (time: Moment) => {
        const timer = moment(time).format('H:mm');
        handleSetStartTimer(timer);
        setStartTime(time);
    };

    const setFbEndTime = (time: Moment) => {
        const timer = moment(time).format('H:mm');
        handleSetEndTimer(timer);
        setEndTime(time);
    };

    useEffect(() => {
        const starCountRef = ref(db, '/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setPowerOn(data.fan.enable);
            setTemperature(data.temp.threshold);
            setPowerMode(
                data.timer.enable
                    ? Mode.Timer
                    : data.temp.enable
                    ? Mode.Temp
                    : Mode.Fan
            );
        });
    }, []);

    useEffect(() => {
        if (powerMode === Mode.Temp) {
            if (curTemperature > temperature && powerMode) {
                setPowerOn(true);
                handleOnOffFan(true);
            } else {
                setPowerOn(false);
                handleOnOffFan(false);
            }
        }
    }, [curTemperature, temperature, powerMode]);

    return {
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
    };
}
