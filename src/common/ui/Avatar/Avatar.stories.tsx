import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta = {
  title: 'common/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: false },
    src: { control: 'text' },
    size: { control: { type: 'number', min: 50, max: 200 } },
    alt: { control: 'text' }
  }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/13958706?v=4',
    alt: 'Default Avatar',
    size: 125
  }
};

export const Small: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/13958706?v=4',
    alt: 'Small Avatar',
    size: 50
  }
};

export const Large: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/13958706?v=4',
    alt: 'Large Avatar',
    size: 200
  }
};

export const CustomClass: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/13958706?v=4',
    alt: 'Custom Avatar',
    size: 125,
    className: 'custom-avatar-class'
  }
};
