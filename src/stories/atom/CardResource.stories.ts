import { CardResource } from '../../components';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'atoms/CardResource',
  component: CardResource,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardResource>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WhiteCard: Story = {
  args: {
    resource: {
      category: 'creatures',
      common_locations: ['Hebra Mountains', 'Tabantha Frontier'],
      description:
        'This particular breed of grassland fox makes its home in cold climates such as the Tabantha region. Its fur turned white as a means of adapting to snowy weather, serving as natural camouflage. Because of this, spotting one in the snow takes a keen eye.',
      dlc: true,
      drops: ['raw prime meat', 'raw gourmet meat'],
      id: 20,
      image:
        'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/snowcoat_fox/image',
      name: 'snowcoat fox',
    },
    className: 'w-1/3 gap-2 ',
  },
};

export const BlackCard: Story = {
  args: {
    resource: {
      category: 'creatures',
      common_locations: ['Hyrule Field', 'Lanayru Great Spring'],
      description:
        'This breed of fox is common to grasslands and forests and is hallmarked by its fluffy, white-tipped tail. Unlike other foxes, they tend to act independently rather than form packs. Being omnivores, they hunt animals smaller than themselves and often stick to eating fruit and insects.',
      dlc: false,
      drops: ['raw meat'],
      id: 19,
      image:
        'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/grassland_fox/image',
      name: 'grassland fox',
    },
    className: 'w-1/3 gap-2 ',
  },
};
