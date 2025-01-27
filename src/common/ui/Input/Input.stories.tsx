import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'common/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number']
    },
    value: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    },
    className: {
      control: false
    }
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    value: 'Default Input',
    placeholder: 'Enter text...'
  }
};

export const Password: Story = {
  args: {
    type: 'password',
    value: '',
    placeholder: 'Enter password...'
  }
};

export const Email: Story = {
  args: {
    type: 'email',
    value: '',
    placeholder: 'Enter email...'
  }
};

export const Number: Story = {
  args: {
    type: 'number',
    value: '42',
    placeholder: 'Enter number...'
  }
};

export const Disabled: Story = {
  args: {
    type: 'text',
    value: 'Disabled Input',
    placeholder: 'Input is disabled',
    disabled: true
  }
};
