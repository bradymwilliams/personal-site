import { useContext } from "react";
import { Link } from "remix";
import { CmdPaletteContext } from "~/providers/command-palette-provider";

const Header = () => {
  const { setOpen } = useContext(CmdPaletteContext);

  return (
    <nav className="bg-slate-900">
      <div className="align-center mx-auto flex max-w-5xl justify-between px-4 py-6 text-zinc-50">
        <Link to="/" className="align-center group flex items-baseline">
          <span className="sr-only">Brady</span>
          <img
            className="h-10 w-auto"
            src="/images/name-logo.png"
            alt="Brady name logo"
          />
          <span className="relative -top-2 ml-2 scale-y-100 -scale-x-100 text-3xl ease-[cubic-bezier(.36,.07,.19,.97)] hover:animate-[shake_.82s_both] group-hover:animate-[shake_.82s_both]">
            🏎️
          </span>
        </Link>
        <div className="self-center">
          <button
            type="button"
            className="rounded-md border border-zinc-50 p-1"
            aria-label="command palette"
            onClick={() => setOpen(true)}
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              // focusable="false"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
