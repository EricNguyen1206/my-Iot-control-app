import React, { ReactNode } from 'react';
import './AppButton.scss';

type Props = {
    children: ReactNode;
    onClick?: (event: MouseEvent) => void;
    className?: string;
};

const AppButton = ({ children, onClick, className }: Props) => {
    return (
        <button
            className={`appbtn ${className}`}
            onClick={onClick && onClick.bind}
        >
            <p>{children}</p>
        </button>
    );
};

export default AppButton;
