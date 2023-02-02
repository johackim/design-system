import DefaultLayout from '@templates/defaultLayout';

export default {
    title: 'Templates/DefaultLayout',
    component: DefaultLayout,
    decorators: [(Story) => <div id="storybook">{Story()}</div>],
};

const Template = (args) => <DefaultLayout {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...DefaultLayout.defaultProps,
    children: <section className="pt-20 px-4 container mx-auto lg:max-w-screen-lg text-gray-700 dark:text-gray-300">Hello world</section>,
};

export const Centered = Template.bind({});

Centered.args = {
    ...DefaultLayout.defaultProps,
    className: 'flex flex-col justify-center',
    children: <section className="pt-20 px-4 container mx-auto lg:max-w-screen-lg text-center text-gray-700 dark:text-gray-300">Centered Message</section>,
};
