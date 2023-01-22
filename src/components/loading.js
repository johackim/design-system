import React from 'react';

const Loading = ({ message, subMessage, size, ...rest }) => {
    const circleClassName = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        xl: 'w-8 h-8',
    };

    const textClassName = {
        sm: 'text-sm',
        md: 'text-xl',
        xl: 'text-3xl',
    };

    return (
        <div className={`text-gray-700 dark:text-gray-300 ${textClassName[size]}`} data-test="loading" {...rest}>
            <div className="inline-flex align-middle items-center">
                <svg className={`mr-1 ${circleClassName[size]}`} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" fill="none" className="stroke-current stroke-gray-700 dark:stroke-gray-300" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
                    </circle>
                </svg>
                {message && <span>{message}</span>}
            </div>
            {subMessage && <div>{subMessage}</div>}
        </div>
    );
};

Loading.defaultProps = {
    message: 'Loading...',
    subMessage: '',
    size: 'sm',
};

export default Loading;
