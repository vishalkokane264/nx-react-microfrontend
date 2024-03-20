import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'POC/Card',
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Primary = {
  args: {
    icon: 'data:image/png;base64,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',
    title: 'Human technology teamwork.mkv',
    status: '250.MB',
    subtitle: 'MM102LAS232',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Card!/gi)).toBeTruthy();
  },
};
