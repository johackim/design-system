import Footer from '@components/footer';

export default {
    title: 'Components/Footer',
    component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Footer.defaultProps,
    links: [{ name: 'Link 1', path: '/' }, { name: 'Link 2', path: '/' }],
};
