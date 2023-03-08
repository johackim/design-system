import Banner from '@atoms/banner';

export default {
    title: 'Atoms/Banner',
    component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const Default = Template.bind({});

Default.args = Banner.defaultProps;
