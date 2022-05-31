import { createContext, PropsWithChildren, useState } from "react";
import { GITHUB_PROFILE, LINKEDIN_PROFILE, TWITTER_PROFILE } from "~/constants";

import { IconType } from "react-icons/lib";
import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";
import { IoMoon } from "react-icons/io5";

type BaseItem = {
  title: string;
};

export type PageItem = BaseItem & {
  href: string;
};

export type SocialItem = BaseItem & {
  href: string;
  icon: IconType;
};

export type ThemeItem = BaseItem & {
  id: "theme";
  icon: IconType;
};

export type SearchItemsType = {
  pages: PageItem[];
  social: SocialItem[];
  theme: ThemeItem[];
};

export const searchItems: SearchItemsType = {
  pages: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    // {
    //   title: 'Analytics',
    //   href: PLAUSIBLE_LINK,
    // },
    {
      title: "Uses",
      href: "/uses",
    },
    {
      title: "Gear",
      href: "/gear",
    },
    {
      title: "Bookmarks",
      href: "/bookmarks",
    },
  ],
  social: [
    {
      title: "LinkedIn",
      icon: SiLinkedin,
      href: LINKEDIN_PROFILE,
    },
    {
      title: "GitHub",
      icon: SiGithub,
      href: GITHUB_PROFILE,
    },
    {
      title: "Twitter",
      icon: SiTwitter,
      href: TWITTER_PROFILE,
    },
  ],
  theme: [
    {
      id: "theme",
      title: "Change theme",
      icon: IoMoon,
    },
  ],
};

export const CmdPaletteContext = createContext<any>({
  query: "",
  setQuery: () => {},
  open: () => {},
  close: () => {},
});

const CmdPaletteProvider = ({ children }: PropsWithChildren<{}>) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <CmdPaletteContext.Provider
      value={{
        query,
        setQuery,
        open,
        setOpen,
      }}
    >
      {children}
    </CmdPaletteContext.Provider>
  );
};

export default CmdPaletteProvider;
