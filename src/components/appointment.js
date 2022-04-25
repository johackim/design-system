import React from 'react';

import Button from '@components/button';

const Appointment = ({ name, date, location, href }) => (
    <div className="tw-py-6 tw-grid md:tw-grid-cols-none md:tw-grid-flow-col tw-justify-between">
        <div className="tw-flex tw-gap-2">
            <div className="tw-bg-gray-200 dark:tw-bg-gray-700 dark:tw-text-gray-300 tw-px-4 tw-py-2 tw-rounded tw-text-center tw-w-[58px]">
                <div className="tw-text-xs tw-capitalize">{(new Date(date).toLocaleString('default', { month: 'short' }))}</div>
                <div className="tw-text-xl">{(new Date(date).getDate())}</div>
            </div>
            <div className="tw-ml-2">
                <h3 className="tw-pr-10 tw-font-semibold dark:tw-text-gray-300">{name}</h3>
                <div className="tw-text-gray-500 tw-grid md:tw-grid-flow-col tw-justify-start dark:tw-text-gray-300">
                    {location}
                </div>
            </div>
        </div>

        {href && (
            <div className="tw-flex tw-items-center">
                <Button href={href} target="_blank" className="md:tw-ml-4 !tw-py-1 !tw-px-2" secondary>Réserver</Button>
            </div>
        )}
    </div>
);

Appointment.defaultProps = {
    name: '',
    place: '',
    city: '',
    country: '',
    date: new Date(),
    href: '',
};

export default Appointment;
