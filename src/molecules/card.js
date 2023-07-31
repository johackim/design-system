import React from 'react';

const Card = ({ children, className }) => (
    <div className={`px-4 py-5 bg-white dark:bg-gray-800 shadow rounded-lg sm:p-4 flex flex-col relative ${className}`}>
        {children}
    </div>
);

Card.Name = ({ children, className }) => <dt className={`text-sm font-semibold dark:text-white ${className}`}>{children}</dt>;

Card.Value = ({ children, className }) => <dd className={`text-sm text-gray-500 ${className}`}>{children}</dd>;

export default Card;
