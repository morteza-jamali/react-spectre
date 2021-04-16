import React from 'react';
import { Meta, Story } from '@storybook/react';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import { DefaultButton, IButtonProps } from '../src/.';

const meta: Meta = {
  title: 'Components/Button',
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

const renderer = createRenderer();

export default meta;

const Template: Story<IButtonProps> = args => (
  <RendererProvider renderer={renderer}>
    <DefaultButton {...args} />
  </RendererProvider>
);

export const Default = Template.bind({});

Default.args = {
  text: 'Default Button',
};
