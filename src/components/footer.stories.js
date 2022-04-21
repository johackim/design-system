import Footer from '@components/footer';
import Link from '@components/link';

export default {
    title: 'Components/Footer',
    component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
    ...Footer.defaultProps,
    children: [
        <Link href="/1">Link 1</Link>,
        <Link href="/2">Link 2</Link>,
        <Link href="/3">Link 3</Link>,
    ],
};

export const WithStartYear = Template.bind({});

WithStartYear.args = {
    ...Default.args,
    startYear: '2020',
};
