import React from 'react';

const Switch = ({ onClick, icons, className }) => (
    <button type="button" aria-label="switch" onClick={onClick} className={`${className} !bg-gray-200 dark:!bg-gray-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none`}>
        {icons.length === 2 ? (
            <span className="dark:translate-x-5 translate-x-0 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200">
                <span className="dark:opacity-0 dark:ease-out dark:duration-100 opacity-100 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity">
                    {icons[0]}
                </span>
                <span className="dark:opacity-100 dark:ease-in duration-200 opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity">
                    {icons[1]}
                </span>
            </span>
        ) : (
            <span className="dark:translate-x-5 translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200" />
        )}
    </button>
);

Switch.defaultProps = {
    icons: [],
    className: '',
    onClick: () => {},
};

export default Switch;
