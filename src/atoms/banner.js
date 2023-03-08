import React from 'react';

const Banner = ({ children, className, onClick }) => (
    <div className={`flex items-center gap-x-6 bg-gray-800 py-2.5 px-6 sm:px-3.5 sm:before:flex-1 ${className}`}>
        <p className="text-sm leading-6 text-white">
            {children}
        </p>
        <div className="flex flex-1 justify-end">
            <button type="button" onClick={onClick} className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                <span className="sr-only">Dismiss</span>
                <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
            </button>
        </div>
    </div>
);

Banner.defaultProps = {
    children: 'Banner',
    onClick: () => {},
    className: '',
};

export default Banner;
