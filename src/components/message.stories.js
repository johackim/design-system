import Message from '@components/message';

export default {
    title: 'Components/Message',
    component: Message,
};

const Template = (args) => <Message {...args} />;

export const Default = Template.bind({});

Default.args = Message.defaultProps;

export const Warning = Template.bind({});

Warning.args = {
    ...Default.args,
    type: 'warning',
};

export const Error = Template.bind({});

Error.args = {
    ...Default.args,
    type: 'error',
};

export const Success = Template.bind({});

Success.args = {
    ...Default.args,
    type: 'success',
};
