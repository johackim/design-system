import React from 'react';

const Badge = ({ children, color, className }) => {
    const colorClassName = {
        gray: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
        red: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
        blue: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100',
        green: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
        yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
    };

    return (
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClassName[color]} ${className}`}>
            {children}
        </span>
    );
};

Badge.defaultProps = {
    children: 'Badge',
    className: '',
    color: 'gray',
};

export default Badge;
