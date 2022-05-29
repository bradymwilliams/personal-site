import { useContext } from "react";
import { Link } from "remix";
import { CmdPaletteContext } from "~/providers/command-palette-provider";

const Header = () => {
  const { setOpen } = useContext(CmdPaletteContext);

  return (
    <nav className="container px-4 py-2 font-sans sm:px-1">
      <div className="group flex justify-between text-zinc-50">
        <div className="flex">
          <Link to="/" className="group font-bold">
            Brady.{" "}
            <span className="inline-block scale-y-100 -scale-x-100 ease-[cubic-bezier(.36,.07,.19,.97)] hover:animate-[shake_.82s_both] group-hover:animate-[shake_.82s_both]">
              🏎️
            </span>
          </Link>
        </div>
        <div className="">
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
              focusable="false"
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
// <div class="chakra-container css-1w19xm6"><a aria-current="page" class="active" href="/"><h2 class="chakra-heading css-1lx9ouy" role=""><span data-peer="true">Brady.</span><span class="css-edpnf5">🏎️</span></h2></a><div class="chakra-stack css-1kh6kns"><button type="button" class="chakra-button css-maz4xt" aria-label="command palette"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg></button></div></div>
