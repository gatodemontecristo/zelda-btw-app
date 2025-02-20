import { CardSkeleton } from '../../components';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'molecules/CardSkeleton',
  component: CardSkeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    className: 'w-full border border-zelda-history rounded-lg',
  },
};
