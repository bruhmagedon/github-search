import type { Meta, StoryObj } from '@storybook/react';

import IconStar from '@assets/icon/Star.svg?react';

import { Badge } from './Badge';

const meta = {
  title: 'common/Badge',
  component: Badge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: false },
    icon: { control: false },
    title: { control: 'text' }
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Badge Title'
  }
};

export const WithIcon: Story = {
  args: {
    title: 'Starred',
    icon: <IconStar />
  }
};

export const CustomClass: Story = {
  args: {
    title: 'Custom Badge',
    className: 'custom-badge-class'
  }
};
