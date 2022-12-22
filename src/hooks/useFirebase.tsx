import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { db } from 'configs/firebase';
import { UPDATE_TEMPERATURE_TIMESTAMP } from 'constant/Interval';

const useFirebase = () => {
    const [curTemperature, setCurTemperature] = useState(32);

    useEffect(() => {
        const interval = setInterval(() => {
            handleUpdateTemperature();
        }, UPDATE_TEMPERATURE_TIMESTAMP);
        return () => clearInterval(interval);
    }, []);

    const handleUpdateTemperature = () => {
        const starCountRef = ref(db, '/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setCurTemperature(data.temp.measure);
        });
    };

    const handleOnOffFan = (fanEnable: boolean) => {
        const db = getDatabase();
        set(ref(db, 'fan/enable'), fanEnable);
    };

    const handleEnableTimer = (timerEnable: boolean) => {
        const db = getDatabase();
        set(ref(db, 'timer/enable'), timerEnable);
    };

    const handleSetStartTimer = (time: string) => {
        const db = getDatabase();
        set(ref(db, 'timer/start'), time);
    };

    const handleSetEndTimer = (time: string) => {
        const db = getDatabase();
        set(ref(db, 'timer/end'), time);
    };

    const handleEnableTempControl = (tempEnable: boolean) => {
        const db = getDatabase();
        set(ref(db, 'temp/enable'), tempEnable);
    };

    const handleSetTempThreshold = (threshold: number) => {
        const db = getDatabase();
        set(ref(db, 'temp/threshold'), threshold);
    };

    return {
        curTemperature,
        handleOnOffFan,
        handleEnableTimer,
        handleSetStartTimer,
        handleSetEndTimer,
        handleEnableTempControl,
        handleSetTempThreshold,
    };
};

export default useFirebase;
