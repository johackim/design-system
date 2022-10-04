import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';

const Notification = ({ title, message, type, className, onClose, timeout, ...props }) => {
    const [isOpen, setOpen] = useState(false);

    const close = () => {
        onClose();
        setOpen(false);
    };

    useEffect(() => {
        setOpen(props.isOpen);

        if (props.isOpen && timeout) {
            setTimeout(() => {
                onClose();
                setOpen(false);
            }, timeout * 1000);
        }
    }, [props.isOpen]);

    return (
        <div className={`pointer-events-none fixed inset-0 items-end px-4 py-6 sm:items-start sm:p-6 z-50 ${isOpen ? 'flex' : 'hidden'} ${className}`} role="alert">
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                {type === 'success' && <CheckCircleIcon className="h-6 w-6 text-green-400" />}
                                {type === 'error' && <XCircleIcon className="h-6 w-6 text-red-400" />}
                                {type === 'info' && <InformationCircleIcon className="h-6 w-6 text-blue-400" />}
                            </div>
                            <div className="ml-3 w-0 flex-1 pt-0.5">
                                <p className="text-sm font-medium text-gray-900">{title}</p>
                                <p className="mt-1 text-sm text-gray-500">{message}</p>
                            </div>
                            <div className="ml-4 flex flex-shrink-0">
                                <button type="button" className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none" onClick={close}>
                                    <span className="sr-only">Close</span>
                                    <XIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Notification.defaultProps = {
    isOpen: false,
    title: 'Title',
    type: 'success',
    message: 'message',
    className: '',
};

export default Notification;
