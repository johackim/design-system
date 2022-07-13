import React from 'react';
import PricingPlan from '@components/pricingPlan';

const Pricing = ({ className, plans, features }) => (
    <div className={`container mx-auto grid lg:grid-flow-col auto-cols-auto gap-4 lg:gap-6 items-end lg:justify-center text-gray-700 dark:text-gray-300 ${className}`}>
        {plans.map((plan, index) => (
            <PricingPlan
                key={plan.name}
                features={features}
                index={index}
                {...plan}
            />
        ))}
    </div>
);

Pricing.defaultProps = {
    features: [],
    plans: [],
    className: '',
};

export default Pricing;
