import React from 'react';

const Checkbox = ({ id, type, label, name, placeholder, className, disabled, ...rest }) => (
    <div>
        <input
            id={id || name}
            type="checkbox"
            name={name}
            className={`p-2 border border-gray-300 rounded-md focus:border-gray-300 focus:outline-none focus:shadow-outline-none focus:ring-0 text-gray-700 dark:bg-transparent dark:border-gray-500 dark:text-gray-300 dark:focus:border-gray-300 ${disabled ? 'bg-gray-200 dark:!bg-gray-700 cursor-not-allowed' : ''} ${className.includes('w-full') ? 'w-full' : ''}`}
            placeholder={placeholder || name}
            {...rest}
        />
        {label && <label htmlFor={name} className="capitalize inline-block ml-2 text-sm font-medium leading-5 text-gray-700 dark:text-gray-300">{label}</label>}
    </div>
);

Checkbox.defaultProps = {
    type: 'text',
    name: '',
    value: '',
    label: '',
    placeholder: 'Text',
    disabled: false,
    required: false,
    className: '',
    onChange: () => {},
};

export default Checkbox;
