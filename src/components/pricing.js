import React from 'react';
import Button from '@components/button';
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const Pricing = ({ className, plans, features }) => (
    <div className={`tw-container tw-mx-auto tw-grid lg:tw-grid-flow-col tw-auto-cols-auto tw-gap-4 lg:tw-gap-6 tw-items-end tw-text-gray-700 dark:tw-text-gray-300 ${className}`}>
        {plans.map((plan) => (
            <div key={plan.name} className="tw-border dark:tw-border-gray-700 tw-rounded tw-w-full">
                {plan.recommanded && (
                    <>
                        <div className="tw-p-2 tw-text-center tw-font-bold">Recommandé</div>
                        <hr className="dark:tw-border-gray-700" />
                    </>
                )}
                <div className="tw-text-center tw-my-4 tw-p-4">
                    <h5 className="tw-font-bold tw-text-xl">{plan.name}</h5>
                </div>
                <hr className="tw-mt-2 dark:tw-border-gray-700" />
                <div className="tw-my-4 tw-flex tw-items-center tw-justify-center">
                    <span className="tw-px-3 tw-flex tw-items-start tw-text-6xl tw-leading-none tw-tracking-tight">
                        <span className="tw-font-extrabold">{plan.price || 0}</span>
                        <span className="tw-mt-2 dark:tw-border-gray-700 tw-text-4xl tw-font-medium">{plan.currency || '€'}</span>
                    </span>
                    <span className="tw-text-xl tw-leading-7 tw-font-medium">{plan.annual ? '/an' : '/mois'}</span>
                </div>
                <hr className="tw-mt-2 dark:tw-border-gray-700" />
                <ul className="tw-px-4 tw-py-2">
                    {features.map((feature) => (
                        <li key={feature.name} className={`tw-my-2 tw-h-6 ${!feature.plans?.includes(plan.name) ? 'tw-text-gray-400' : ''}`}>
                            {feature.plans?.includes(plan.name) ? (
                                <CheckIcon className="tw-w-5 tw-mr-2 tw-inline tw-fill-current" />
                            ) : (
                                <XIcon className="tw-w-5 tw-mr-2 tw-inline tw-fill-current" />
                            )}
                            {feature.name}
                        </li>
                    ))}
                </ul>
                <hr className="tw-mb-2 dark:tw-border-gray-700" />
                <div className="tw-flex tw-m-auto tw-mb-2 dark:tw-border-gray-700">
                    <Button onClick={plan.onClick} className="tw-inline-block tw-w-full tw-mx-2">S'abonner maintenant</Button>
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
