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
    children: <section className="tw-pt-20 tw-px-4 tw-container tw-mx-auto lg:tw-max-w-screen-lg tw-text-gray-700 dark:tw-text-gray-300">Hello world</section>,
};

export const WithContentCentered = Template.bind({});

WithContentCentered.args = {
    ...Layout.defaultProps,
    className: 'tw-flex tw-flex-col tw-justify-center',
    children: <section className="tw-pt-20 tw-px-4 tw-container tw-mx-auto lg:tw-max-w-screen-lg tw-text-center tw-text-gray-700 dark:tw-text-gray-300">Centered Message</section>,
};
