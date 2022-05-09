import CommandPalette from '@components/commandPalette';

export default {
    title: 'Components/CommandPalette',
    component: CommandPalette,
};

const Template = (args) => <CommandPalette {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...CommandPalette.defaultProps,
    isOpen: true,
    data: [
        { title: 'Matrix', href: '/1' },
        { title: 'Back to the futur', href: '/2' },
        { title: 'Lord of the ring', href: '/3' },
        { title: 'Limitless', href: '/4' },
        { title: 'Mr. Robot', href: '/5' },
    ],
};
