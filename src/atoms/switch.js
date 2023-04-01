import React from 'react';

const Switch = ({ onClick, icons, className }) => (
    <button type="button" aria-label="switch" onClick={onClick} className={`!bg-gray-200 dark:!bg-gray-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer focus:outline-none ${className}`}>
        {icons.length === 2 ? (
            <span className="dark:translate-x-5 translate-x-0 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0">
                <span className="dark:opacity-0 opacity-100 absolute inset-0 h-full w-full flex items-center justify-center">
                    {icons[0]}
                </span>
                <span className="dark:opacity-100 opacity-0 absolute inset-0 h-full w-full flex items-center justify-center">
                    {icons[1]}
                </span>
            </span>
        ) : (
            <span className="dark:translate-x-5 translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0" />
        )}
    </button>
);

Switch.defaultProps = {
    icons: [],
    className: '',
    onClick: () => {},
};

export default Switch;
