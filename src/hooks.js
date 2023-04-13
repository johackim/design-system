import React, { createContext, useContext, useState, useMemo } from 'react';
import Notification from '@molecules/notification';
import Modal from '@organisms/modal';

export const NotificationContext = createContext({
    add: () => {},
    remove: () => {},
    notifications: [],
});

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const value = useMemo(() => ({
        notifications,
        add: ({ timeout, onClose = () => {}, ...data }) => {
            const id = Math.random();
            setNotifications((n) => [...n, { id, ...data }]);

            if (!timeout) return;

            setTimeout(() => {
                setNotifications((n) => n.filter((notification) => notification.id !== id));
                onClose();
            }, timeout * 1000);
        },
        remove: (id) => setNotifications((n) => n.filter((notification) => notification.id !== id)),
    }), [notifications]);

    return (
        <NotificationContext.Provider value={value}>
            <div className="pointer-events-none grid fixed right-0 p-4 z-50 gap-2 w-full max-w-sm">
                {notifications.map(({ onClose = () => {}, ...notification }) => (
                    <Notification
                        key={notification.id}
                        onClose={() => {
                            value.remove(notification.id);
                            onClose();
                        }}
                        {...notification}
                    />
                ))}
            </div>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => useContext(NotificationContext);

export const ModalContext = createContext({
    add: () => {},
    remove: () => {},
    isOpen: false,
    modals: [],
});

export const ModalProvider = ({ children }) => {
    const [modals, setModals] = useState([]);

    const value = useMemo(() => ({
        modals,
        add: (data) => setModals((m) => [...m, { id: Math.random(), ...data }]),
        remove: (id) => setModals((m) => m.filter((modal) => modal.id !== id)),
        isOpen: (id) => modals.some((modal) => modal.id === id),
    }), [modals]);

    return (
        <ModalContext.Provider value={value}>
            {modals.map(({ onClose = () => {}, ...modal }) => (
                <Modal
                    key={modal.id}
                    onClose={() => {
                        value.remove(modal.id);
                        onClose();
                    }}
                    {...modal}
                />
            ))}
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);

export const Compose = ({ components, children }) => (
    components.reduceRight((acc, Comp) => <Comp>{acc}</Comp>, children)
);

export const AppProvider = ({ children }) => (
    <Compose components={Object.values({ NotificationProvider, ModalProvider })}>
        {children}
    </Compose>
);
