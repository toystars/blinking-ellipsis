import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DotDotDot, DotDotDotProps } from '../src';

const meta: Meta = {
  title: 'DotDotDot',
  component: DotDotDot,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DotDotDotProps> = args => <DotDotDot {...args} />;

// default component
export const Default = Template.bind({});
Default.args = {} as DotDotDotProps;

// with children
export const WithChildren = Template.bind({});
WithChildren.args = {
  children: 'Please wait',
} as DotDotDotProps;

// with custom dot component
export const WithCustomDot = Template.bind({});
WithCustomDot.args = {
  dotComponent: <span>💩</span>,
} as DotDotDotProps;
