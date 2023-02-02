import Pricing from '@organisms/pricing';

export default {
    title: 'Organisms/Pricing',
    component: Pricing,
};

const Template = (args) => <Pricing {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Pricing.defaultProps,
    plans: [
        { name: 'Gratuit', price: 0 },
        { name: 'Annuel', price: 39 },
        { name: 'Mensuel', price: 9 },
    ],
    features: [
        { name: 'Newsletter gratuite', plans: [1, 2, 3] },
        { name: 'Accès complet aux contenus privés', plans: [2, 3] },
        { name: 'Soutenir un indépendant', plans: [2, 3] },
        { name: 'Zéro publicité', plans: [2, 3] },
        { name: '+60% de réduction', plans: [2] },
    ],
};

export const WithReduction = Template.bind({});

WithReduction.args = {
    ...Pricing.defaultProps,
    plans: [
        { name: 'Gratuit', price: 0 },
        { name: 'Annuel', price: 39, reduction: 38, head: 'Offre limitée', spots: { total: 10, left: 3 } },
        { name: 'Mensuel', price: 9 },
    ],
    features: [
        { name: 'Newsletter gratuite', plans: [1, 2, 3] },
        { name: 'Accès complet aux contenus privés', plans: [2, 3] },
        { name: 'Soutenir un indépendant', plans: [2, 3] },
        { name: 'Zéro publicité', plans: [2, 3] },
        { name: '+60% de réduction', plans: [2] },
    ],
};
