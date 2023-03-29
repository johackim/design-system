import React, { useEffect, useRef } from 'react';
import { XIcon } from '@heroicons/react/solid';

const Modal = ({ title, description, children, onClose, header, footer, fullscreen }) => {
    const ref = useRef();

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!fullscreen && !ref.current?.contains(e.target)) {
                onClose();
            }
        };

        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    }, []);

    if (fullscreen) {
        return (
            <div className="fixed inset-x-0 px-4 pb-6 inset-0 p-0 flex items-center justify-center z-30 flex">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-black opacity-90" />
                    <div className="absolute top-0 right-0 p-8">
                        <XIcon className="h-12 w-12 fill-current text-white cursor-pointer" onClick={onClose} />
                    </div>
                </div>

                <div className="transform text-center text-white lg:max-w-screen-lg p-4 md:p-0">
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div ref={ref} className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                {header}
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    {title}
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">{description}</p>
                                </div>
                                <div className="mt-2">
                                    {children}
                                </div>
                            </div>
                        </div>
                        {footer && (
                            <div className="bg-gray-50 px-4 py-3 sm:flex justify-end sm:px-6 grid gap-2">
                                {footer}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.defaultProps = {
    children: '',
    onClose: () => {},
    title: 'title',
    description: '',
    fullscreen: false,
    header: null,
    footer: null,
};

export default Modal;
