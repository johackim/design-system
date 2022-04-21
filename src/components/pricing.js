import React from 'react';
import Button from '@components/button';
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const Pricing = ({ className, plans, features }) => (
    <div className={`container mx-auto grid lg:grid-flow-col auto-cols-auto gap-4 lg:gap-6 items-end text-gray-700 dark:text-gray-300 ${className}`}>
        {plans.map((plan) => (
            <div key={plan.name} className="border dark:border-gray-700 rounded w-full">
                {plan.recommanded && (
                    <>
                        <div className="p-2 text-center font-bold">Recommandé</div>
                        <hr className="dark:border-gray-700" />
                    </>
                )}
                <div className="text-center my-4 p-4">
                    <h5 className="font-bold text-xl">{plan.name}</h5>
                </div>
                <hr className="mt-2 dark:border-gray-700" />
                <div className="my-4 flex items-center justify-center">
                    <span className="px-3 flex items-start text-6xl leading-none tracking-tight">
                        <span className="font-extrabold">{plan.price || 0}</span>
                        <span className="mt-2 dark:border-gray-700 text-4xl font-medium">{plan.currency || '€'}</span>
                    </span>
                    <span className="text-xl leading-7 font-medium">{plan.annual ? '/an' : '/mois'}</span>
                </div>
                <hr className="mt-2 dark:border-gray-700" />
                <ul className="px-4 py-2">
                    {features.map((feature) => (
                        <li key={feature.name} className={`my-2 h-6 ${!feature.plans?.includes(plan.name) ? 'text-gray-400' : ''}`}>
                            {feature.plans?.includes(plan.name) ? (
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
                    <Button onClick={plan.onClick} className="inline-block w-full mx-2">S'abonner maintenant</Button>
                </div>
            </div>
        ))}
    </div>
);

Pricing.defaultProps = {
    features: [],
    plans: [],
    className: '',
};

export default Pricing;
