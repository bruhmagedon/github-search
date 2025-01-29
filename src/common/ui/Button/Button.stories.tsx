import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
  title: 'common/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: Object.values(ButtonTheme)
    },
    size: {
      control: 'select',
      options: Object.values(ButtonSize)
    },
    square: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    className: {
      control: false
    },
    children: {
      control: 'text'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.M,
    children: 'Clear Button'
  }
};

export const Red: Story = {
  args: {
    theme: ButtonTheme.RED,
    size: ButtonSize.M,
    children: 'Red Button'
  }
};

export const Large: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.L,
    children: 'Large Button'
  }
};

export const SmallSquare: Story = {
  args: {
    theme: ButtonTheme.RED,
    size: ButtonSize.M,
    square: true,
    children: 'S'
  }
};

export const Disabled: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.M,
    disabled: true,
    children: 'Disabled Button'
  }
};
