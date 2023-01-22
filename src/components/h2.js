import React from 'react';

export default ({ children, className }) => (
    <h2 className={`text-3xl font-semibold text-gray-700 dark:text-gray-300 my-4 ${className}`}>{children}</h2>
);
