import Loading from '@components/loading';

export default {
    title: 'Components/Loading',
    component: Loading,
};

const Template = (args) => <Loading {...args} />;

export const Default = Template.bind({});

Default.args = Loading.defaultProps;

export const withSubMessage = Template.bind({});

withSubMessage.args = {
    ...Loading.defaultProps,
    subMessage: 'Sub message',
};
