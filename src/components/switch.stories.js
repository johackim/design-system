import Switch from '@components/switch';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default {
    title: 'Components/Switch',
    component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});

Default.args = Switch.defaultProps;

export const WithIcons = Template.bind({});

WithIcons.args = {
    ...Switch.defaultProps,
    icons: [
        <SunIcon className="tw-bg-white tw-h-3 tw-w-3 tw-text-gray-900" />,
        <MoonIcon className="tw-bg-white tw-h-3 tw-w-3 tw-text-gray-900" />,
    ],
};
