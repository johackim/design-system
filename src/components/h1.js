import React from 'react';

export default ({ children, className }) => (
    <h1 className={`text-4xl font-semibold text-gray-700 dark:text-gray-300 my-4 ${className}`}>{children}</h1>
);
