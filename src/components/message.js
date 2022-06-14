import React from 'react';
import { ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/outline';

const Message = ({ text, warning, info }) => (
    <div className="bg-gray-100 dark:bg-gray-800 border-l-4 border-gray-400 p-4">
        <div className="flex">
            {warning && <div><ExclamationCircleIcon className="w-5 h-5 text-gray-400" /></div>}
            {info && <div><InformationCircleIcon className="w-5 h-5 text-gray-400" /></div>}
            <div className="ml-3">
                <p className="text-sm text-gray-400" style={{ marginTop: 0, marginBottom: 0 }}>
                    {text}
                </p>
            </div>
        </div>
    </div>
);

Message.defaultProps = {
    text: 'Hello world',
    warning: false,
    info: false,
};

export default Message;
