import H2 from '@components/h2';

export default {
    title: 'Components/H2',
    component: H2,
};

const Template = (args) => <H2 {...args} />;

export const Default = Template.bind({});

Default.args = H2.defaultProps;
