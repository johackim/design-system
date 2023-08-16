import Button from '@atoms/button';
import Tooltip from '@atoms/tooltip';

export default {
    title: 'Atoms/Tooltip',
    component: Tooltip,
};

const Template = (args) => (
    <div className="p-4">
        <Tooltip {...args}>
            <Button>Button</Button>
        </Tooltip>
    </div>
);

export const Default = Template.bind({});

Default.args = Tooltip.defaultProps;
