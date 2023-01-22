import H1 from '@components/h1';

export default {
    title: 'Components/H1',
    component: H1,
};

const Template = (args) => <H1 {...args} />;

export const Default = Template.bind({});

Default.args = H1.defaultProps;
