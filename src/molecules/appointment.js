import React from 'react';

import Button from '@atoms/button';

const Appointment = ({ name, date, location, onClick }) => (
    <div className="grid justify-between py-6 md:grid-flow-col md:grid-cols-none">
        <div className="flex gap-2">
            <div className="w-[58px] rounded bg-gray-200 px-4 py-2 text-center dark:bg-gray-700 dark:text-gray-300">
                <div className="text-xs capitalize">{(new Date(date).toLocaleString('default', { month: 'short' }))}</div>
                <div className="text-xl">{(new Date(date).getDate())}</div>
            </div>
            <div className="ml-2">
                <h3 className="pr-10 font-semibold dark:text-gray-300">{name}</h3>
                <div className="grid justify-start text-gray-500 dark:text-gray-300 md:grid-flow-col">
                    {location}
                </div>
            </div>
        </div>

        {onClick && typeof onClick === 'function' && (
            <div className="flex items-center">
                <Button onClick={onClick} target="_blank" className="!px-2 !py-1 md:ml-4" secondary>Réserver</Button>
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
