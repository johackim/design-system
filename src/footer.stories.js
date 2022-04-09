import Footer from '@components/footer';

export default {
    title: 'Components/Footer',
    component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = Footer.defaultProps;
