import type { Meta, StoryObj } from '@storybook/react';
import { ProductDetail } from './product-detail';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ProductDetail> = {
  component: ProductDetail,
  title: 'ProductDetail',
};
export default meta;
type Story = StoryObj<typeof ProductDetail>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ProductDetail!/gi)).toBeTruthy();
  },
};
