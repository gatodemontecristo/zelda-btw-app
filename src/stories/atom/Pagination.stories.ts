import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '../../components';

const meta = {
  title: 'atoms/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    currentPage: 1,
    maxPage: 10,
    onNext: () => {},
    onPrev: () => {},
    onJump: (page: number) => {},
  },
};
