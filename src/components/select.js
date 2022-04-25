import React from 'react';

const Select = ({ name, label, options, className }) => (
    <div className={className}>
        {label && <label htmlFor={name} className="tw-capitalize tw-block tw-text-sm tw-font-medium tw-text-gray-700 dark:tw-text-gray-300">{label}</label>}
        <select id={name} name={name} className={`tw-mt-1 tw-block tw-pl-3 tw-pr-10 tw-py-2 tw-text-base tw-border-gray-300 focus:tw-border-gray-300 sm:tw-text-sm tw-rounded-md tw-appearance-none focus:tw-outline-none focus:tw-shadow-outline-none focus:tw-ring-0 tw-text-gray-700 dark:tw-bg-transparent dark:tw-text-gray-300 dark:tw-border-gray-500 ${className.includes('tw-w-full') ? 'tw-w-full' : ''}`}>
            {options.map((option) => (
                <option key={option} className="dark:tw-text-gray-900">{option}</option>
            ))}
        </select>
    </div>
);

Select.defaultProps = {
    name: '',
    label: '',
    options: [],
    className: '',
};

export default Select;
