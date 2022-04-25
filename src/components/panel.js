import React from 'react';

const Panel = ({ title, description, footer, children }) => (
    <div className={`tw-bg-white dark:tw-bg-gray-800 tw-text-gray-700 dark:tw-text-gray-300 tw-overflow-hidden tw-shadow tw-rounded-lg ${footer ? 'tw-divide-y tw-divide-gray-200 dark:tw-divide-gray-700' : ''}`}>
        <div className="tw-px-4 tw-py-5 sm:tw-p-6">
            {(title || description) && (
                <div className="tw-mb-6">
                    {title && <h2 className="tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900 dark:tw-text-gray-100">{title}</h2>}
                    {description && <p className="tw-mt-1 tw-text-sm tw-text-gray-500 dark:tw-text-gray-400">{description}</p>}
                </div>
            )}

            {children}
        </div>

        {footer && (
            <div className="tw-px-4 tw-py-4 sm:tw-px-6">
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
