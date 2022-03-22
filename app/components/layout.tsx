import { PropsWithChildren } from "react";
import CmdPaletteProvider from "~/providers/command-palette-provider";
import CommandPalette from "~/components/command-palette";
// import Header from "./header";
// import Footer from "./footer";

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CmdPaletteProvider>
        <div className="flex min-h-screen flex-col dark:bg-slate-800">
          {/* <Header /> */}

          {children}
          {/* <Footer /> */}
          <CommandPalette />
        </div>
      </CmdPaletteProvider>
    </>
  );
};

export default Layout;
