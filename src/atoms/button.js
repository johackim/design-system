import React from 'react';
import { cva } from 'class-variance-authority';
import Loading from '@atoms/loading';

const style = cva(
    'inline-flex items-center px-5 py-2 rounded-md disabled:cursor-not-allowed disabled:opacity-75',
    {
        variants: {
            secondary: {
                false: '!bg-gray-600 text-white hover:text-white hover:!bg-gray-700 disabled:hover:bg-gray-600 disabled:dark:hover:!bg-gray-700 dark:!bg-gray-700 dark:hover:!bg-gray-600',
                true: 'border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 disabled:hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-white',
            },
        },
        defaultVariants: {
            secondary: false,
        },
    },
);

const Button = ({ secondary, children, onClick, className, disabled, loading, ...rest }) => (
    <button type="button" onClick={onClick} className={style({ className, secondary })} disabled={disabled || loading} {...rest}>
        {loading ? <Loading text="Loading..." className={secondary ? '' : 'text-white'} /> : children}
    </button>
);

Button.style = style;

Button.defaultProps = {
    onClick: () => {},
    secondary: false,
    children: 'Button',
    loading: false,
    className: '',
};

export default Button;
