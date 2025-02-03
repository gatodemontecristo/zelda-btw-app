import { Meta, StoryObj } from '@storybook/react';
import { MainBackground } from '../../components';

const meta = {
  title: 'atoms/MainBackground',
  component: MainBackground,
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: {
        type: 'select',
        options: ['version1', 'version2', 'version3'],
      },
    },
    shadowSize: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    color: {
      control: 'color',
    },
  },
} satisfies Meta<typeof MainBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="text-white text-center">
        <h1 className="text-6xl text-white font-bold">The legend of Zelda</h1>
        <p className="text-white text-4xl">Breath of the Wild</p>
      </div>
    ),
  },
};

export const Magic: Story = {
  args: {
    image: 'version2',
    color: 'zelda-purple',
    children: (
      <div className="text-white text-center">
        <h1 className="text-6xl text-white font-bold">The legend of Zelda</h1>
        <p className="text-white text-4xl">Tears of the Kingdom</p>
      </div>
    ),
  },
};
