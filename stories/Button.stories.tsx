import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DefaultButton, IButtonProps } from '../src/.';

const meta: Meta = {
  title: 'Welcome',
  component: DefaultButton,
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

const Template: Story<IButtonProps> = args => <DefaultButton {...args} />;

export const Default = Template.bind({});

Default.args = {};
