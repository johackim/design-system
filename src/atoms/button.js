import React from 'react';
import Loading from '@atoms/loading';

const Button = ({ secondary, children, onClick, className, disabled, loading, ...rest }) => {
    const baseClassName = `inline-flex rounded-md items-center justify-center px-5 py-2 border focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 ${className}`;

    const primaryClassName = `${baseClassName} border-transparent text-white !bg-gray-600 hover:!bg-gray-700 disabled:hover:!bg-gray-600 disabled:dark:hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white disabled:dark:hover:!text-gray-300 dark:text-gray-300`;

    const secondaryClassName = `${baseClassName} border-gray-300 text-gray-700 hover:text-gray-900 disabled:hover:text-gray-700 disabled:hover:border-gray-300 hover:border-gray-400 dark:text-gray-300 dark:hover:text-white dark:hover:border-white`;

    const buttonClassName = secondary ? secondaryClassName : primaryClassName;

    return (
        <button type="button" onClick={onClick} className={buttonClassName} disabled={disabled || loading} {...rest}>
            {loading ? <Loading text="Loading..." className={secondary ? '' : 'text-white'} /> : children}
        </button>
    );
};

Button.defaultProps = {
    onClick: () => {},
    secondary: false,
    children: 'Button',
    loading: false,
    className: '',
};

export default Button;
