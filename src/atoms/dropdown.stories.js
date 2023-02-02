import Dropdown from '@atoms/dropdown';

export default {
    title: 'Atoms/Dropdown',
    component: Dropdown,
};

const Template = (args) => (
    <div className="absolute right-5">
        <Dropdown {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    ...Dropdown.defaultProps,
    children: (
        <>
            <div className="px-4 py-3">
                <p className="text-sm">
                    Signed in as
                </p>
                <p className="text-sm font-medium truncate">
                    tom@example.com
                </p>
            </div>
            <div className="py-1">
                <a href="#!" className="block px-4 py-2 text-sm dark:hover:bg-gray-800 hover:bg-gray-100 dark:hover:text-gray-300">
                    Account settings
                </a>
                <a href="#!" className="block px-4 py-2 text-sm dark:hover:bg-gray-800 hover:bg-gray-100 dark:hover:text-gray-300">
                    Support
                </a>
                <a href="#!" className="block px-4 py-2 text-sm dark:hover:bg-gray-800 hover:bg-gray-100 dark:hover:text-gray-300">
                    License
                </a>
            </div>
            <div className="py-1">
                <button type="button" className="w-full text-left block px-4 py-2 text-sm dark:hover:bg-gray-800 hover:bg-gray-100 dark:hover:text-gray-300">
                    Sign out
                </button>
            </div>
        </>
    ),
};

export const Simple = Template.bind({});

Simple.args = {
    ...Default.args,
    simple: true,
};

export const Dots = Template.bind({});

Dots.args = {
    ...Default.args,
    dots: true,
};
