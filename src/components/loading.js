import React from 'react';

const Loading = ({ message, subMessage }) => (
    <div className="text-gray-700 dark:text-gray-300" data-test="loading">
        <p className="inline-flex text-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-8 h-8" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" className="stroke-current stroke-gray-700 dark:stroke-gray-300" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
                </circle>
            </svg>
            {message && <span>{message}</span>}
        </p>
        {subMessage && <div>{subMessage}</div>}
    </div>
);

Loading.defaultProps = {
    message: 'Loading...',
    subMessage: '',
};

export default Loading;
