import { Meta, StoryObj } from '@storybook/react';
import ButtonBar from './ButtonBar';

const meta = {
  component: ButtonBar,
  title: "ArtisanUX/ButtonBar",
  argTypes: { }
};

export default meta;

export const Basic = (args) => (
  <ButtonBar {...args} />
);

Basic.args = {
  buttons: [
    { label: "Cancel", onClick: () => alert("canceled")},
    { label: "Accept", onClick: () => alert("accepted!") }
  ]
}
