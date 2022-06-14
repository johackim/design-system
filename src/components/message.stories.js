import Message from '@components/message';

export default {
    title: 'Components/Message',
    component: Message,
};

const Template = (args) => <Message {...args} />;

export const Default = Template.bind({});

Default.args = Message.defaultProps;
