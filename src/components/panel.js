import React from 'react';

const Panel = ({ title, description, footer, children }) => (
    <div className={`bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 overflow-hidden shadow rounded-lg ${footer ? 'divide-y divide-gray-200 dark:divide-gray-700' : ''}`}>
        <div className="px-4 py-5 sm:p-6">
            {(title || description) && (
                <div className="mb-6">
                    {title && <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">{title}</h2>}
                    {description && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>}
                </div>
            )}

            {children}
        </div>

        {footer && (
            <div className="px-4 py-4 sm:px-6">
                {footer}
            </div>
        )}
    </div>
);

Panel.defaultProps = {
    children: '',
    footer: '',
    title: '',
    description: '',
};

export default Panel;
