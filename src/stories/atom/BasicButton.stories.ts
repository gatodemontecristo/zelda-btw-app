import { Meta, StoryObj } from '@storybook/react';
import { BasicButton } from '../../components';

const meta = {
  title: 'atoms/BasicButton',
  component: BasicButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fontButton: { control: 'color' },
  },
} satisfies Meta<typeof BasicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic labels',
    fnClickButton: () => alert('Button clicked'),
  },
};

export const ColorButton: Story = {
  args: {
    label: 'Color button',
    fontButton: 'bg-zelda-hill',
    fnClickButton: () => alert('Button clicked'),
  },
};
