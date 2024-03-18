import type { Meta, StoryObj } from '@storybook/react';
import { UiLibrary } from './ui-library';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UiLibrary> = {
  component: UiLibrary,
  title: 'UiLibrary',
};
export default meta;
type Story = StoryObj<typeof UiLibrary>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UiLibrary!/gi)).toBeTruthy();
  },
};
