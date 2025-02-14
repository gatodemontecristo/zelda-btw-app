import { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from '../../components';

const meta = {
  title: 'atoms/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    options: [
      {
        label: 'Creatures',
        value: 'creatures',
        imgUrl: '../icons/creatures.png',
      },
      {
        label: 'Equiptment',
        value: 'equipment',
        imgUrl: '../icons/equipment.png',
      },
      {
        label: 'Materials',
        value: 'materials',
        imgUrl: '../icons/materials.png',
      },
      {
        label: 'Monsters',
        value: 'monsters',
        imgUrl: '../icons/monsters.png',
      },
      {
        label: 'Treasure',
        value: 'treasure',
        imgUrl: '../icons/treasure.png',
      },
    ],
    selectedValue: 'treasure',
    onChange: () => {},
    color: 'blue-900',
    size: '2xl',
  },
};
