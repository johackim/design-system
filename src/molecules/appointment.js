import React from 'react';

import Button from '@atoms/button';

const Appointment = ({ name, date, location, onClick }) => (
    <div className="py-6 grid md:grid-cols-none md:grid-flow-col justify-between">
        <div className="flex gap-2">
            <div className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 px-4 py-2 rounded text-center w-[58px]">
                <div className="text-xs capitalize">{(new Date(date).toLocaleString('default', { month: 'short' }))}</div>
                <div className="text-xl">{(new Date(date).getDate())}</div>
            </div>
            <div className="ml-2">
                <h3 className="pr-10 font-semibold dark:text-gray-300">{name}</h3>
                <div className="text-gray-500 grid md:grid-flow-col justify-start dark:text-gray-300">
                    {location}
                </div>
            </div>
        </div>

        {onClick && typeof onClick === 'function' && (
            <div className="flex items-center">
                <Button onClick={onClick} target="_blank" className="md:ml-4 !py-1 !px-2" secondary>Réserver</Button>
            </div>
        )}
    </div>
);

Appointment.defaultProps = {
    name: '',
    location: '',
    date: new Date(),
    onClick: false,
};

export default Appointment;
