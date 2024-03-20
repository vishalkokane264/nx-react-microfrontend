import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'POC/Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    name: 'Start Monitoring for free',
    type: 'submit',
    disabled: false,
    style: {
      textTransform: 'uppercase',
      border: 'none',
      background: '#764abc',
      height: '42px',
      width: '300px',
      color: '#f8f9fb',
      borderRadius: '4px',
    },
    onClick: () => {},
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
  },
};
