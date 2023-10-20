import ButtonBar from './ButtonBar';
import {ThemeProvider} from "../Provider/ArtisanUXProvider.stories";

const meta = {
  component: ButtonBar,
  title: "ArtisanUX/ButtonBar",
  argTypes: { }
};

export default meta;

export const Basic = (args) => (
    <ThemeProvider>
      <ButtonBar {...args} />
    </ThemeProvider>
);

Basic.args = {
  buttons: [
    { label: "Cancel", onClick: () => alert("canceled")},
    { label: "Accept", onClick: () => alert("accepted!") }
  ]
}

export const LeftAlignedBasic = (args) => (
    <ThemeProvider>
      <ButtonBar {...args} />
    </ThemeProvider>
);

LeftAlignedBasic.args = {
  buttons: [
    { label: "Accept", onClick: () => alert("accepted!") },
    { label: "Cancel", onClick: () => alert("canceled")},
  ],
  leftAlign: true
}
