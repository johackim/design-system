import React from 'react';

const Card = ({ small, name, value, right, center, bottom, ...rest }) => (
    small ? (
        <div key={name} className="px-4 py-5 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden sm:p-4 flex flex-col" {...rest}>
            <div>
                <span className="text-sm text-gray-700 dark:text-gray-300 float-right">{right}</span>
                <dt className="text-sm font-semibold dark:text-white">{name}</dt>
                {value && <dd className="text-sm text-gray-500">{value}</dd>}
            </div>
            {center}
            {bottom}
        </div>
    ) : (
        <div key={name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-4 dark:bg-gray-800 flex flex-col" {...rest}>
            <div>
                <span className="text-sm float-right">{right}</span>
                <dt className="truncate text-sm font-medium text-gray-500 dark:text-white">{name}</dt>
                {value && <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">{value}</dd>}
            </div>
            {center}
            {bottom}
        </div>
    )
);

Card.defaultProps = {
    name: 'name',
    value: 'value',
    small: false,
    right: '',
    bottom: '',
};

export default Card;
