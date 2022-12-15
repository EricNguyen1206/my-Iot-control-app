import { useAppSelector } from 'app/hooks';
import { privateRoutes, publicRoutes } from 'routes';
import { useEffect, useState } from 'react';

const usePages = () => {
    const user = useAppSelector((state) => state.user);
    const [routes, setRoutes] = useState(publicRoutes);
    useEffect(() => {
        if (user.data !== null) {
            setRoutes(privateRoutes);
        }
    }, [user]);

    return [routes];
};

export default usePages;
