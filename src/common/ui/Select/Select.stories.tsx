import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
  title: 'common/Select',
  component: Select,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: 'changed'
    },
    className: {
      control: false
    }
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: ['Option 1', 'Option 2', 'Option 3']
  }
};

export const CustomOptions: Story = {
  args: {
    data: ['Apple', 'Banana', 'Cherry', 'Date']
  }
};

export const Empty: Story = {
  args: {
    data: []
  }
};

export const PreselectedOption: Story = {
  args: {
    data: ['First', 'Second', 'Third']
  },
  play: ({ args, canvasElement }) => {
    const select = canvasElement.querySelector('[role="select"]');
    if (select) {
      args.onChange?.(args.data[0]);
    }
  }
};
