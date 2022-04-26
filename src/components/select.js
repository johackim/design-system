import React from 'react';

const Select = ({ name, label, options, className }) => (
    <div className={className}>
        {label && <label htmlFor={name} className="capitalize block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
        <select id={name} name={name} className={`mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:border-gray-300 sm:text-sm rounded-md appearance-none focus:outline-none focus:shadow-outline-none focus:ring-0 text-gray-700 dark:bg-transparent dark:text-gray-300 dark:border-gray-500 ${className.includes('w-full') ? 'w-full' : ''}`}>
            {options.map((option) => (
                <option key={option} className="dark:text-gray-900">{option}</option>
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
