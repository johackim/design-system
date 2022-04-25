import React from 'react';

const Empty = ({ title, subtitle, icon, button }) => (
    <div className="tw-text-center">
        {icon}
        <h3 className="tw-mt-2 tw-text-md tw-font-medium tw-text-gray-900 dark:tw-text-gray-300">{title}</h3>
        <p className="tw-mt-1 tw-text-sm tw-text-gray-500 dark:tw-text-gray-400">{subtitle}</p>
        {button && (
            <div className="tw-mt-4">
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
            className="tw-mx-auto tw-h-12 tw-w-12 tw-text-gray-400"
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
        <button
            type="button"
            className="tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-border tw-border-transparent tw-shadow-sm tw-text-sm tw-font-medium tw-rounded-md tw-text-white tw-bg-gray-600 hover:tw-bg-gray-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-gray-500"
        >
            <svg className="-tw-ml-1 tw-mr-2 tw-h-5 tw-w-5" x-description="Heroicon name: solid/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            New Project
        </button>
    ),
};

export default Empty;
