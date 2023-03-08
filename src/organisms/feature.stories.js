import Feature from '@organisms/feature';

export default {
    title: 'Organisms/Feature',
    component: Feature,
};

const Template = (args) => <Feature {...args} />;

export const Default = Template.bind({});

Default.args = Feature.defaultProps;
