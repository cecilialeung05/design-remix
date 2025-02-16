// components/Button.jsx
import React from 'react';
import './Button.scss'; // Import the SCSS module

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
            buttonClass += ' button--primary'; // Default to primary
            break;
    }

    return (
        <button className={`${buttonClass} ${className}`} onClick={onClick} {...props}>
            {children}
        </button>
    );
}

export default Button;