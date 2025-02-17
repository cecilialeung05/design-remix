
import React from 'react';
import './Button.scss'; 

function Button({ variant = 'primary', children, onClick, className = '', ...props }) {
    let buttonClass = 'button';

    switch (variant) {
        case 'primary':
            buttonClass += ' button--primary';
            break;
        case 'secondary':
            buttonClass += ' button--secondary';
            break;
        case 'ghost':
            buttonClass += ' button--ghost';
            break;
        case 'outline':
            buttonClass += ' button--outline';
            break;
        default:
            buttonClass += ' button--primary'; 
            break;
    }

    return (
        <button className={`${buttonClass} ${className}`} onClick={onClick} {...props}>
            {children}
        </button>
    );
}

export default Button;