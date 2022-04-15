import Hero from '@components/hero';
import Button from '@components/button';

export default {
    title: 'Components/Hero',
    component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});

Default.args = Hero.defaultProps;

export const withBackgroundImage = Template.bind({});

withBackgroundImage.args = {
    ...Hero.defaultProps,
    backgroundImage: true,
    children: [
        <Button href="/" className="bg-gray-700 hover:bg-gray-600 inline-flex rounded-md items-center justify-center px-5 py-2 border border-transparent text-white focus:outline-none">Call To Action</Button>,
        <Button href="/more" className="text-gray-300 hover:text-white hover:border-white inline-flex rounded-md items-center justify-center px-5 py-2 border focus:outline-none" secondary>Secondary Action</Button>,
    ],
};
