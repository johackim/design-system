import React from 'react';

const Heading = ({ children, size, className }) => {
    const heading = {
        h1: <h1 className={`font-semibold text-gray-700 dark:text-gray-300 my-4 text-4xl ${className}`}>{children}</h1>,
        h2: <h2 className={`font-semibold text-gray-700 dark:text-gray-300 my-4 text-3xl ${className}`}>{children}</h2>,
        h3: <h3 className={`font-semibold text-gray-700 dark:text-gray-300 my-4 text-xl ${className}`}>{children}</h3>,
        h4: <h4 className={`font-semibold text-gray-700 dark:text-gray-300 my-4 text-sm ${className}`}>{children}</h4>,
        h5: <h5 className={`font-semibold text-gray-700 dark:text-gray-300 my-4 text-xs ${className}`}>{children}</h5>,
    };

    return heading[size];
};

Heading.defaultProps = {
    size: 'h2',
};

export default Heading;
