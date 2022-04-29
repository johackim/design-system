import '@styles/roboto.css';
import 'twind/shim';
import { setup } from 'twind';

setup({
    hash: true,
    mode: 'silent',
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: 'Roboto, sans-serif',
            },
        },
    },
});

export { default as Button } from '@components/button';
export { default as Link } from '@components/link';
export { default as Header } from '@components/header';
export { default as Footer } from '@components/footer';
export { default as Hero } from '@components/hero';
export { default as Input } from '@components/input';
export { default as Empty } from '@components/empty';
export { default as Loading } from '@components/loading';
export { default as Layout } from '@components/layout';
export { default as Select } from '@components/select';
export { default as Switch } from '@components/switch';
export { default as Panel } from '@components/panel';
export { default as Article } from '@components/article';
export { default as Gallery } from '@components/gallery';
export { default as Dropdown } from '@components/dropdown';
export { default as Progress } from '@components/progress';
export { default as Pricing } from '@components/pricing';
export { default as Modal } from '@components/modal';
export { default as Appointment } from '@components/appointment';
