import { PropsWithChildren } from "react";
import CmdPaletteProvider from "~/providers/command-palette-provider";
import CommandPalette from "~/components/command-palette";
import Header from "./header";
// import Footer from "./footer";

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return (
    <>
      <CmdPaletteProvider>
        <div className="">
          <Header />

          {children}
          {/* <Footer /> */}
          <CommandPalette />
        </div>
      </CmdPaletteProvider>
    </>
  );
};

export default Layout;
