import React from 'react';

import Button from '@atoms/button';

const Empty = ({ title, subtitle, icon, button, ...rest }) => (
    <div className="text-center" {...rest}>
        {icon}
        <h3 className="mt-2 text-md font-medium text-gray-900 dark:text-gray-300">{title}</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        {button && (
            <div className="mt-4">
                {button}
            </div>
        )}
    </div>
);

Empty.defaultProps = {
    title: 'No projects',
    subtitle: 'Get started by creating a new project.',
    icon: (
        <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
        </svg>
    ),
    button: (
        <Button
            type="button"
        >
            <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            New Project
        </Button>
    ),
};

export default Empty;
