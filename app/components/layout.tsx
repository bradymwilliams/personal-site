import { PropsWithChildren } from "react";
import CmdPaletteProvider from "~/providers/command-palette-provider";
import CommandPalette from "~/components/command-palette";
import Header from "./header";
import Footer from "./footer";

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return (
    <>
      <CmdPaletteProvider>
        <div className="relative bg-slate-900">
          <Header />

          {children}
          <CommandPalette />
          <Footer />
        </div>
      </CmdPaletteProvider>
    </>
  );
};

export default Layout;
