import Dropdown from '@components/dropdown';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
};

const Template = (args) => (
    <div className="tw-absolute tw-right-5">
        <Dropdown {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    ...Dropdown.defaultProps,
    children: (
        <>
            <div className="tw-px-4 tw-py-3">
                <p className="tw-text-sm">
                    Signed in as
                </p>
                <p className="tw-text-sm tw-font-medium tw-truncate">
                    tom@example.com
                </p>
            </div>
            <div className="tw-py-1">
                <a href="#!" className="tw-block tw-px-4 tw-py-2 tw-text-sm dark:hover:tw-bg-gray-800 hover:tw-bg-gray-100 dark:hover:tw-text-gray-300">
                    Account settings
                </a>
                <a href="#!" className="tw-block tw-px-4 tw-py-2 tw-text-sm dark:hover:tw-bg-gray-800 hover:tw-bg-gray-100 dark:hover:tw-text-gray-300">
                    Support
                </a>
                <a href="#!" className="tw-block tw-px-4 tw-py-2 tw-text-sm dark:hover:tw-bg-gray-800 hover:tw-bg-gray-100 dark:hover:tw-text-gray-300">
                    License
                </a>
            </div>
            <div className="tw-py-1">
                <button type="button" className="tw-w-full tw-text-left tw-block tw-px-4 tw-py-2 tw-text-sm dark:hover:tw-bg-gray-800 hover:tw-bg-gray-100 dark:hover:tw-text-gray-300">
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
