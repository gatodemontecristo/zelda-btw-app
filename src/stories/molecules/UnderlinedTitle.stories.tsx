import { Meta, StoryObj } from '@storybook/react';
import UnderlinedTitle from '../../components/molecules/UnderlinedTitle';

const meta = {
  title: 'molecules/UnderlinedTitle',
  component: UnderlinedTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UnderlinedTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'mt-8',
    children: (
      <>
        <UnderlinedTitle.Title
          label="Features"
          size="text-5xl"
          className="mt-4"
        ></UnderlinedTitle.Title>
        <UnderlinedTitle.Separator
          width={40}
          version="version02"
        ></UnderlinedTitle.Separator>
      </>
    ),
  },
};
