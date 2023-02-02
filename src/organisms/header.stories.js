import Header from '@organisms/header';
import Link from '@atoms/link';
import Button from '@atoms/button';

export default {
    title: 'Organisms/Header',
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
