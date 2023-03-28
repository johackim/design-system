import React from 'react';
import { XIcon } from '@heroicons/react/solid';
import { CheckCircleIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/react/outline';

const Notification = ({ title, text, type, onClose }) => (
    <div className="pointer-events-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-4" role="alert">
        <div className="flex items-start">
            <div className="flex-shrink-0">
                {type === 'success' && <CheckCircleIcon className="h-6 w-6 text-green-400" />}
                {type === 'error' && <XCircleIcon className="h-6 w-6 text-red-400" />}
                {type === 'info' && <InformationCircleIcon className="h-6 w-6 text-blue-400" />}
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">{title}</p>
                <p className="mt-1 text-sm text-gray-500">{text}</p>
            </div>
            <div className="ml-4 flex flex-shrink-0">
                <button type="button" className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none" onClick={onClose}>
                    <span className="sr-only">Close</span>
                    <XIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    </div>
);

Notification.defaultProps = {
    title: 'Title',
    type: 'success',
    text: 'text',
    className: '',
    onClose: () => {},
};

export default Notification;
