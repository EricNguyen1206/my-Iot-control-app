import { useEffect, useState } from 'react';

export type Timer = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

type CountdownHookProps = {
    countdown: Date;
    startTimer: boolean;
    setStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
    setPowerOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const useCountdown = ({
    countdown,
    startTimer,
    setStartTimer,
    setPowerOn,
}: CountdownHookProps) => {
    const [timer, setTimer] = useState<Date>(() => new Date());

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTimer(new Date());
    //     }, 1000);
    //     if (countdown === timer || startTimer === false) {
    //         setPowerOn(false);
    //         clearInterval(interval);
    //     }
    //     return () => clearInterval(interval);
    // });

    return getReturnValues(timer);
};

const getReturnValues = (timer: Date): [Timer] => {
    // calculate time left
    const days = timer.getDate();
    const hours = timer.getHours();
    const minutes = timer.getMinutes();
    const seconds = timer.getSeconds();
    return [{ days, hours, minutes, seconds }];
};

export { useCountdown };
