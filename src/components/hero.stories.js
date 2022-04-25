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
        <Button href="/" className="tw-bg-gray-700 hover:tw-bg-gray-600 tw-inline-flex tw-rounded-md tw-items-center tw-justify-center tw-px-5 tw-py-2 border tw-border-transparent tw-text-white focus:tw-outline-none">Call To Action</Button>,
        <Button href="/more" className="tw-text-gray-300 hover:tw-text-white hover:tw-border-white tw-inline-flex tw-rounded-md tw-items-center tw-justify-center tw-px-5 tw-py-2 tw-border focus:tw-outline-none" secondary>Secondary Action</Button>,
    ],
};
