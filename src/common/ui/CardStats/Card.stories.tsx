import type { Meta, StoryObj } from '@storybook/react';

import IconFork from '@assets/Fork.svg?react';
import IconStar from '@assets/Star.svg?react';

import { CardStats } from './CardStats';

const meta = {
  title: 'common/CardStats',
  component: CardStats,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: false },
    icon: { control: false },
    label: { control: 'text' },
    value: { control: 'text' }
  }
} satisfies Meta<typeof CardStats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <IconStar />,
    label: 'Stars',
    value: '234'
  }
};

export const Forks: Story = {
  args: {
    icon: <IconFork />,
    label: 'Forks',
    value: '1,329'
  }
};

export const CustomStyle: Story = {
  args: {
    icon: <IconStar />,
    label: 'Custom Label',
    value: '999',
    className: 'custom-stat-class'
  }
};
