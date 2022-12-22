import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { db } from 'configs/firebase';

export type useFirebaseProps = {
    powerOn: boolean;
    timerEnable: boolean;
    setPowerOn: any;
    setTimerEnable: any;
    setTempEnable: any;
};

const useFirebase = ({
    powerOn,
    timerEnable,
    setPowerOn,
    setTimerEnable,
    setTempEnable,
}: useFirebaseProps) => {
    const [curTemperature, setCurTemperature] = useState(32);
    useEffect(() => {
        const starCountRef = ref(db, '/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setPowerOn(data.fan.enable);
            setTimerEnable(data.timer.enable);
            setTempEnable(data.temp.enable);
        });
    }, []);

    const handleOnOffFan = () => {
        const db = getDatabase();
        set(ref(db, 'fan/enable'), !powerOn);
    };

    const handleEnableTimer = () => {
        const db = getDatabase();
        set(ref(db, 'timer/enable'), !timerEnable);
    };

    const handleEnableTempControl = () => {
        const db = getDatabase();
        set(ref(db, 'temp/enable'), true);
    };
    return {
        curTemperature,
        setCurTemperature,
        handleOnOffFan,
        handleEnableTimer,
        handleEnableTempControl,
    };
};

export default useFirebase;
