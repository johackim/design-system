import Layout from '@components/layout';

export default {
    title: 'Components/Layout',
    component: Layout,
};

const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Layout.defaultProps,
    children: <section className="pt-20 px-4 container mx-auto lg:max-w-screen-lg">Hello world</section>,
};

Default.decorators = [(Story) => <div id="storybook">{Story()}</div>];

export const WithContentCentered = Template.bind({});

WithContentCentered.args = {
    ...Layout.defaultProps,
    className: 'flex flex-col justify-center',
    children: <section className="pt-20 px-4 container mx-auto lg:max-w-screen-lg text-center">Centered Message</section>,
};

WithContentCentered.decorators = [(Story) => <div id="storybook">{Story()}</div>];
