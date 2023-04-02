import React, { useState } from 'react';

const Input = ({ id, type, label, name, value, placeholder, className, disabled, addOn, showPassword, ...rest }) => {
    const [isPasswordDisplayed, setIsPasswordDisplayed] = useState(false);

    const input = (
        <div className={`relative inline-block ${className.includes('w-full') ? 'w-full' : ''}`}>
            <input
                id={id || name}
                type={type === 'password' && isPasswordDisplayed ? 'text' : type}
                name={name}
                value={value}
                disabled={disabled}
                className={`p-2 border border-gray-300 rounded-md focus:border-gray-300 focus:outline-none focus:shadow-outline-none focus:ring-0 text-gray-700 dark:bg-transparent dark:border-gray-500 dark:text-gray-300 dark:focus:border-gray-300 ${disabled ? 'bg-gray-200 dark:!bg-gray-700 !cursor-not-allowed' : ''} ${className.includes('w-full') ? 'w-full' : ''} ${addOn ? 'flex rounded-none !rounded-r-md' : ''}`}
                placeholder={placeholder || name}
                {...rest}
            />
            {showPassword && type === 'password' && value && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button type="button" className="focus:outline-none" onClick={() => setIsPasswordDisplayed(!isPasswordDisplayed)}>
                        <label
                            className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 cursor-pointer"
                            htmlFor="toggle"
                        >
                            {isPasswordDisplayed ? 'hide' : 'show'}
                        </label>
                    </button>
                </div>
            )}
        </div>
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
    showPassword: false,
    disabled: false,
    required: false,
    className: '',
    onChange: () => {},
};

export default Input;
