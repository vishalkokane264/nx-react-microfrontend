import type { Meta, StoryObj } from '@storybook/react';
import { CardComponent } from './card-component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CardComponent> = {
  component: CardComponent,
  title: 'CardComponent',
};
export default meta;
type Story = StoryObj<typeof CardComponent>;

export const Primary = {
  args: {
    icon: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ftoppng.com%2Fuploads%2Fpreview%2Ffaqs-for-students-college-student-students-ico-11562888859e8uyeltp9w.png&tbnid=0Sb5xreN8tVsuM&vet=12ahUKEwi0-4P84f2EAxX2-zgGHcoECoIQMygJegQIARBp..i&imgrefurl=https%3A%2F%2Ftoppng.com%2Ffree-image%2Ffaqs-for-students-college-student-students-ico-PNG-free-PNG-Images_168865&docid=sxWWTHE49BahdM&w=840&h=859&q=students%20logo&hl=en-GB&ved=2ahUKEwi0-4P84f2EAxX2-zgGHcoECoIQMygJegQIARBp',
    title: 'Total Students',
    subtitle: '560',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CardComponent!/gi)).toBeTruthy();
  },
};
