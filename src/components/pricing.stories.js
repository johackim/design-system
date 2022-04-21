import Pricing from '@components/pricing';

export default {
    title: 'Components/Pricing',
    component: Pricing,
};

const Template = (args) => <Pricing {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Pricing.defaultProps,
    plans: [
        { name: 'Gratuit' },
        { name: 'Annuel', price: 39, annual: true, recommanded: true },
        { name: 'Mensuel', price: 9 },
    ],
    features: [
        { name: 'Newsletter gratuite', plans: ['Gratuit', 'Mensuel', 'Annuel'] },
        { name: 'Accès complet aux contenus privés', plans: ['Mensuel', 'Annuel'] },
        { name: 'Soutenir un indépendant', plans: ['Mensuel', 'Annuel'] },
        { name: 'Zéro publicité', plans: ['Mensuel', 'Annuel'] },
        { name: '+60% de réduction', plans: ['Annuel'] },
    ],
    onClick: () => {},
};
