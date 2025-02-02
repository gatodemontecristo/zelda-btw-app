import { Meta, StoryObj } from '@storybook/react';
import { SubTitle } from '../../components';

const meta = {
  title: 'atoms/SubTitle',
  component: SubTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          'text-xs',
          'text-sm',
          'text-base',
          'text-lg',
          'text-xl',
          'text-2xl',
          'text-3xl',
          'text-4xl',
          'text-5xl',
          'text-6xl',
          'text-7xl',
          'text-8xl',
          'text-9xl',
        ],
      },
    },
  },
} satisfies Meta<typeof SubTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic label',
    size: 'text-base',
  },
};

export const Zelda: Story = {
  args: {
    label: 'Zelda',
    size: 'text-8xl',
  },
};
