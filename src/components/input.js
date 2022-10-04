import React from 'react';

const Input = ({ id, type, label, name, placeholder, className, disabled, ...rest }) => (
    <div className={className}>
        {label && <label htmlFor={name} className="capitalize block text-sm font-medium leading-5 text-gray-700 dark:text-gray-300">{label}</label>}
        <input
            id={id || name}
            type={type}
            name={name}
            className={`p-2 border border-gray-300 rounded-md focus:border-gray-300 focus:outline-none focus:shadow-outline-none focus:ring-0 text-gray-700 dark:bg-transparent dark:border-gray-500 dark:text-gray-300 dark:focus:border-gray-300 ${disabled ? 'bg-gray-200 dark:!bg-gray-700 cursor-not-allowed' : ''} ${className.includes('w-full') ? 'w-full' : ''}`}
            placeholder={placeholder || name}
            {...rest}
        />
    </div>
);

Input.defaultProps = {
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

export default Input;
