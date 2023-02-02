import Hero from '@organisms/hero';
import Button from '@atoms/button';

export default {
    title: 'Organisms/Hero',
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
        <Button href="/">Call To Action</Button>,
        <Button href="/more" className="!text-gray-300 hover:!text-white hover:!border-white" secondary>Secondary Action</Button>,
    ],
};
