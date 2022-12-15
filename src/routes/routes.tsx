import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const SignIn = React.lazy(() => import('../pages/SignIn'));

export interface RouteProps {
    exact: boolean;
    path: string;
    element: React.ReactNode | null;
}

export const publicRoutes: RouteProps[] = [
    {
        exact: true,
        path: '/',
        element: <SignIn />,
    },
    {
        exact: true,
        path: '/signin',
        element: <SignIn />,
    },
];

export const privateRoutes: RouteProps[] = [
    {
        exact: true,
        path: '/',
        element: <Home />,
    },
    {
        exact: true,
        path: '/signin',
        element: <SignIn />,
    },
];
