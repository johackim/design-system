import { install } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import presetTailwindForms from '@twind/preset-tailwind-forms';

install({
    darkMode: 'class',
    presets: [
        presetAutoprefix(),
        presetTailwind(),
        presetTailwindForms(),
    ],
});

export { default as Link } from '@atoms/link';
export { default as Text } from '@atoms/text';
export { default as Input } from '@atoms/input';
export { default as Badge } from '@atoms/badge';
export { default as Banner } from '@atoms/banner';
export { default as Select } from '@atoms/select';
export { default as Switch } from '@atoms/switch';
export { default as Button } from '@atoms/button';
export { default as Divider } from '@atoms/divider';
export { default as Tooltip } from '@atoms/tooltip';
export { default as Loading } from '@atoms/loading';
export { default as Heading } from '@atoms/heading';
export { default as Dropdown } from '@atoms/dropdown';
export { default as Checkbox } from '@atoms/checkbox';
export { default as Progress } from '@atoms/progress';

export { default as Card } from '@molecules/card';
export { default as Empty } from '@molecules/empty';
export { default as Table } from '@molecules/table';
export { default as Panel } from '@molecules/panel';
export { default as Section } from '@molecules/section';
export { default as Message } from '@molecules/message';
export { default as Article } from '@molecules/article';
export { default as Gallery } from '@molecules/gallery';
export { default as Appointment } from '@molecules/appointment';
export { default as Notification } from '@molecules/notification';

export { default as Hero } from '@organisms/hero';
export { default as Modal } from '@organisms/modal';
export { default as Header } from '@organisms/header';
export { default as Footer } from '@organisms/footer';
export { default as Feature } from '@organisms/feature';
export { default as Pricing } from '@organisms/pricing';
export { default as CommandPalette } from '@organisms/commandPalette';

export { default as SidebarLayout } from '@templates/sidebarLayout';
export { default as DefaultLayout } from '@templates/defaultLayout';

export { AppProvider, NotificationProvider, ModalProvider, useModal, useNotification } from './hooks';
