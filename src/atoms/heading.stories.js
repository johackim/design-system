import Heading from '@atoms/heading';

export default {
    title: 'Atoms/Heading',
    component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Heading.defaultProps,
    children: 'Heading',
};
