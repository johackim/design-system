import React, { useState } from 'react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';
import Button from '@atoms/button';

const PricingPlan = ({ name, head, price, reduction, features, currency, mensual, spots, onClick, className, index, ...props }) => {
    const reductionPercentage = (currentPrice) => Math.round((((currentPrice - reduction) - currentPrice) / currentPrice) * 100);
    const percentage = (left, total) => (Math.min(left, total) / total) * 100;
    const [isLoading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        await onClick(props);
        setLoading(false);
    };

    return (
        <div className={`border dark:border-gray-700 rounded w-full ${className}`}>
            {head && (
                <div className="flex justify-center transform -translate-y-1/2 -mb-4">
                    <span className="inline-flex rounded-full bg-gray-600 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                        {head}
                    </span>
                </div>
            )}
            <div className="text-center my-4 p-4">
                <h5 className="font-bold text-xl">{name}</h5>
            </div>
            <hr className="mt-2 dark:border-gray-700" />
            <div className="my-4">
                {!!reduction && (
                    <p className="text-xs text-gray-500 text-center">
                        <span className="line-through text-xl mr-2">{`${price}${currency}`}</span>
                        <span>{`(${reductionPercentage(price)}% de réduction)`}</span>
                    </p>
                )}
                <div className="flex items-center justify-center">
                    <span className="px-3 flex items-start text-6xl leading-none tracking-tight">
                        <span className="font-extrabold">{price - reduction}</span>
                        <span className="mt-2 dark:border-gray-700 text-4xl font-medium">{currency}</span>
                    </span>
                    <span className="text-xl leading-7 font-medium">{mensual ? '/mois' : '/an'}</span>
                </div>
            </div>
            {spots && (
                <div className="mx-6 -mt-2">
                    {spots && <p className="flex flex-row-reverse text-xs">{`${spots?.left} places restantes`}</p>}
                    <div className="w-full bg-gray-300 rounded-md">
                        <div
                            className="bg-gray-500 text-xs leading-none py-1 text-center font-bold text-white rounded-md"
                            style={{ width: `${percentage(spots?.left, spots?.total)}%` }}
                        />
                    </div>
                </div>
            )}
            <hr className="mt-2 dark:border-gray-700" />
            <ul className="px-4 py-2">
                {features?.map((feature) => (
                    <li key={feature.name} className={`my-2 h-6 ${!feature.plans?.includes(index + 1) ? 'text-gray-400' : ''}`}>
                        {feature.plans?.includes(index + 1) ? (
                            <CheckIcon className="w-5 mr-2 inline fill-current" />
                        ) : (
                            <XIcon className="w-5 mr-2 inline fill-current" />
                        )}
                        {feature.name}
                    </li>
                ))}
            </ul>
            <hr className="mb-2 dark:border-gray-700" />
            <div className="flex m-auto mb-2 dark:border-gray-700">
                {props.button ? props.button : (
                    <Button onClick={handleClick} className="inline-block w-full mx-2">
                        { isLoading ? (
                            <span className="inline">Chargement...</span>
                        ) : (
                            <span>S'abonner maintenant</span>
                        ) }
                    </Button>
                )}
            </div>
        </div>
    );
};

PricingPlan.defaultProps = {
    price: 10,
    currency: '€',
    name: 'Plan name',
    features: [
        { name: 'Feature 1' },
        { name: 'Feature 2' },
        { name: 'Feature 3' },
        { name: 'Feature 4' },
        { name: 'Feature 5' },
    ],
    className: '',
    mensual: false,
    reduction: 0,
    onClick: () => {},
};

export default PricingPlan;
