import { Skeleton } from '../../components';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circle: Story = {
  args: {
    type: 'circle',
    extraClass: 'size-40',
  },
};
export const Rectangle: Story = {
  args: {
    type: 'rect',
    extraClass: 'w-[40%] h-10',
  },
};
