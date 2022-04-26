import Layout from '@components/layout';

export default {
    title: 'Components/Layout',
    component: Layout,
    decorators: [(Story) => <div id="storybook">{Story()}</div>],
};

const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Layout.defaultProps,
    children: <section className="pt-20 px-4 container mx-auto lg:max-w-screen-lg text-gray-700 dark:text-gray-300">Hello world</section>,
};

export const WithContentCentered = Template.bind({});

WithContentCentered.args = {
    ...Layout.defaultProps,
    className: 'flex flex-col justify-center',
    children: <section className="pt-20 px-4 container mx-auto lg:max-w-screen-lg text-center text-gray-700 dark:text-gray-300">Centered Message</section>,
};
