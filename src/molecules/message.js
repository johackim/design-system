import React from 'react';
import { ExclamationIcon, CheckCircleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/solid';

const Message = ({ children, type }) => {
    const textClassName = {
        error: 'text-red-700',
        info: 'text-gray-700',
        warning: 'text-yellow-700',
        success: 'text-green-700',
    };

    const iconClassName = {
        error: 'text-red-400',
        info: 'text-gray-400',
        warning: 'text-yellow-400',
        success: 'text-green-400',
    };

    const bgClassName = {
        error: 'bg-red-50 border-red-400 dark:bg-red-800',
        info: 'bg-gray-50 border-gray-400 dark:bg-gray-800',
        warning: 'bg-yellow-50 border-yellow-400 dark:bg-yellow-800',
        success: 'bg-green-50 border-green-400 dark:bg-green-800',
    };

    return (
        <div className={`${bgClassName[type]} border-l-4 p-4`}>
            <div className="flex">
                {type === 'info' && <div><InformationCircleIcon className={`w-5 h-5 ${iconClassName[type]}`} /></div>}
                {type === 'error' && <div><XCircleIcon className={`w-5 h-5 ${iconClassName[type]}`} /></div>}
                {type === 'warning' && <div><ExclamationIcon className={`w-5 h-5 ${iconClassName[type]}`} /></div>}
                {type === 'success' && <div><CheckCircleIcon className={`w-5 h-5 ${iconClassName[type]}`} /></div>}
                <div className="ml-3">
                    <p className={`text-sm ${textClassName[type]}`} style={{ marginTop: 0, marginBottom: 0 }}>
                        {children}
                    </p>
                </div>
            </div>
        </div>
    );
};

Message.defaultProps = {
    type: 'info',
    children: 'hello world',
};

export default Message;
