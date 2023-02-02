import Avatar from '@atoms/avatar';

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = Avatar.defaultProps;
