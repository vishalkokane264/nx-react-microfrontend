import type { Meta, StoryObj } from '@storybook/react';
import { ComponentLib } from './component-lib';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ComponentLib> = {
  component: ComponentLib,
  title: 'ComponentLib',
};
export default meta;
type Story = StoryObj<typeof ComponentLib>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ComponentLib!/gi)).toBeTruthy();
  },
};
