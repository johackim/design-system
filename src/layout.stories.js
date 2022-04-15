import Layout from '@components/layout';

export default {
    title: 'Components/Layout',
    component: Layout,
};

const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Layout.defaultProps,
    children: <section className="pt-20 px-4 container mx-auto max-w-screen-lg">Hello world</section>,
};

Default.decorators = [(Story) => <div id="storybook">{Story()}</div>];
