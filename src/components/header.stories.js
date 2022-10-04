import Header from '@components/header';
import Link from '@components/link';
import Button from '@components/button';

export default {
    title: 'Components/Header',
    component: Header,
    argTypes: {
        size: {
            options: ['md', 'lg', 'xl'],
            control: { type: 'radio' },
        },
    },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Header.defaultProps,
    children: [
        <Link href="/1">Link 1</Link>,
        <Link href="/2">Link 2</Link>,
        <Link href="/3">Link 3</Link>,
    ],
};

export const WithButton = Template.bind({});

WithButton.args = {
    ...Default.args,
    children: [
        <Link href="/1">Link 1</Link>,
        <Link href="/2">Link 2</Link>,
        <Link href="/3">Link 3</Link>,
        <Button>Button</Button>,
    ],
};
