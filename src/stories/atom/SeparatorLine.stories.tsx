import { Meta, StoryObj } from '@storybook/react';
import { SeparatorLine } from '../../components';

const meta = {
  title: 'atoms/SeparatorLine',
  component: SeparatorLine,
  tags: ['autodocs'],
  argTypes: {
    version: {
      control: {
        type: 'select',
        options: ['version1', 'version2', 'version3'],
      },
    },
  },
} satisfies Meta<typeof SeparatorLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Golden: Story = {
  args: {
    version: 'version02',
    width: 50,
  },
};
