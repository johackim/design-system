import Divider from '@atoms/divider';

export default {
    title: 'Atoms/Divider',
    component: Divider,
};

const Template = (args) => <Divider {...args} />;

export const Default = Template.bind({});

Default.args = Divider.defaultProps;
