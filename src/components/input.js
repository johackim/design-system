import React from 'react';

const Input = ({ type, label, name, value, onChange, className, placeholder, required, disabled }) => (
    <div className={className}>
        {label && <label htmlFor={name} className="tw-capitalize tw-block tw-text-sm tw-font-medium tw-leading-5 tw-text-gray-700 dark:tw-text-gray-300">{label}</label>}
        <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={`tw-mt-1 tw-py-2 tw-px-3 tw-border tw-border-gray-300 tw-rounded-md focus:tw-border-gray-300 focus:tw-outline-none focus:tw-shadow-outline-none focus:tw-ring-0 sm:tw-text-sm sm:tw-leading-5 tw-text-gray-700 dark:tw-bg-transparent dark:tw-border-gray-500 dark:tw-text-gray-300 dark:focus:tw-border-gray-300 ${disabled ? 'tw-bg-gray-200 dark:!tw-bg-gray-700 tw-cursor-not-allowed' : ''} ${className.includes('tw-w-full') ? 'tw-w-full' : ''}`}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
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
