import React from 'react';

const Input = ({ id, type, label, name, placeholder, className, disabled, addOn, ...rest }) => {
    const input = (
        <input
            id={id || name}
            type={type}
            name={name}
            disabled={disabled}
            className={`p-2 border border-gray-300 rounded-md focus:border-gray-300 focus:outline-none focus:shadow-outline-none focus:ring-0 text-gray-700 dark:bg-transparent dark:border-gray-500 dark:text-gray-300 dark:focus:border-gray-300 ${disabled ? 'bg-gray-200 dark:!bg-gray-700 !cursor-not-allowed' : ''} ${className.includes('w-full') ? 'w-full' : ''} ${addOn ? 'flex rounded-none !rounded-r-md' : ''}`}
            placeholder={placeholder || name}
            {...rest}
        />
    );

    return (
        <div className={className}>
            {label && <label htmlFor={name} className="capitalize block text-sm font-medium leading-5 text-gray-700 dark:text-gray-300 mb-1">{label}</label>}
            {addOn ? (
                <div className="flex rounded-md">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">{addOn}</span>
                    {input}
                </div>
            ) : input}
        </div>
    );
};

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
