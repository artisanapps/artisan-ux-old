import {ArtisanUXProvider} from "./index";

const meta = {
  component: ArtisanUXProvider,
  title: "ArtisanUX/Theme",
  argTypes: { }
};

export default meta;

export const ThemeProvider = (props: { children?: any }) => {
  return (
      <ArtisanUXProvider primaryColor={{main: "#9e2d0b"}}>
        { props.children }
      </ArtisanUXProvider>
  )
}