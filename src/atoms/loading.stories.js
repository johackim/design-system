import Loading from '@atoms/loading';

export default {
    title: 'Atoms/Loading',
    component: Loading,
};

const Template = (args) => <Loading {...args} />;

export const Default = Template.bind({});

Default.args = Loading.defaultProps;
