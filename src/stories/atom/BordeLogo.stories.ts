import { Meta, StoryObj } from '@storybook/react';
import { BordeLogo } from '../../components';

const meta = {
  title: 'atoms/BordeLogo',
  component: BordeLogo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BordeLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    imgUrl: '../logo_botw.png',
  },
};

export const LogoSize: Story = {
  args: {
    imgUrl: '../logo_mario.png',
    size: 55,
  },
};
