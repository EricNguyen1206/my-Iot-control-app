import { useEffect, useState } from 'react';

export type Timer = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

type CountdownHookProps = {
    milliseconds: number;
    startTimer: boolean;
    setStartTimer: React.Dispatch<React.SetStateAction<boolean>>;
};

const useCountdown = ({
    milliseconds,
    startTimer,
    setStartTimer,
}: CountdownHookProps) => {
    const [countDown, setCountDown] = useState<number>(milliseconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown((prev) => prev - 1000);
        }, 1000);
        if (!startTimer) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [startTimer]);

    return getReturnValues({
        milliseconds: countDown,
        startTimer,
        setStartTimer,
    });
};

const getReturnValues = ({
    milliseconds,
    startTimer,
    setStartTimer,
}: CountdownHookProps): [Timer] => {
    // calculate time left
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    const timer = {
        days,
        hours,
        minutes,
        seconds,
    };
    return [timer];
};

export { useCountdown };
