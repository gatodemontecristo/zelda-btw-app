import { Meta, StoryObj } from '@storybook/react';
import { BasicButton } from '../components';

const meta = {
  title: 'atoms/BasicButton',
  component: BasicButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BasicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
