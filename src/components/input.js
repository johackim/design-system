import React from 'react';

const Input = ({ type, label, name, value, onChange, className, placeholder, required, disabled }) => (
    <div className={className}>
        {label && <label htmlFor={name} className="capitalize block text-sm font-medium leading-5 text-gray-700 dark:text-gray-300">{label}</label>}
        <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={`mt-1 py-2 px-3 border border-gray-300 rounded-md focus:border-gray-300 focus:outline-none focus:shadow-outline-none focus:ring-0 sm:text-sm sm:leading-5 ${disabled ? 'bg-gray-200' : ''}`}
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
