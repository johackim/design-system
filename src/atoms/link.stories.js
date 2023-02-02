import Link from '@atoms/link';

export default {
    title: 'Atoms/Link',
    component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = Link.defaultProps;
