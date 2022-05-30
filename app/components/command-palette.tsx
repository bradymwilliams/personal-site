import { Fragment, useContext } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { useKeyPressEvent } from "react-use";
import { SearchIcon } from "@heroicons/react/solid";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { FolderIcon, LinkIcon } from "@heroicons/react/outline";

import { GITHUB_PROFILE, LINKEDIN_PROFILE } from "~/constants";

import { CmdPaletteContext } from "~/providers/command-palette-provider";

const projects = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Uses", url: "/uses" },
  { id: 3, name: "Sim Racing", url: "/sim-racing" },
  // More projects...
];

const quickActions = [
  { name: "Github", icon: IoLogoGithub, shortcut: "H", url: GITHUB_PROFILE },
  {
    name: "LinkedIn",
    icon: IoLogoLinkedin,
    shortcut: "L",
    url: LINKEDIN_PROFILE,
  },
];

function classNames(...classes: Array<string | boolean>) {
  return classes.filter(Boolean).join(" ");
}

export default function CommandPalette() {
  const { query, setQuery, open, setOpen } = useContext(CmdPaletteContext);

  useKeyPressEvent((e) => {
    if (!open && e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.stopPropagation();
      e.preventDefault();
      setOpen(true);
    }
    return true;
  });

  const filteredProjects =
    query === ""
      ? []
      : projects.filter((project) => {
          return project.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery("")}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            value=""
            as="div"
            className="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all"
            onChange={(item: any) => (window.location = item.url)}
          >
            <div className="relative">
              <SearchIcon
                className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              <Combobox.Input
                className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Search..."
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>

            {(query === "" || filteredProjects.length > 0) && (
              <Combobox.Options
                static
                className="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-20 overflow-y-auto"
              >
                <li className="p-2">
                  {query === "" && (
                    <p className="mt-4 mb-2 px-3 text-xs font-semibold text-gray-200">
                      Pages
                    </p>
                  )}
                  <ul className="text-sm text-gray-400">
                    {(query === "" ? projects : filteredProjects).map(
                      (project) => (
                        <Combobox.Option
                          key={project.id}
                          value={project}
                          className={({ active }) =>
                            classNames(
                              "flex cursor-default select-none items-center rounded-md px-3 py-2",
                              active && "bg-gray-800 text-white"
                            )
                          }
                        >
                          {({ active }) => (
                            <>
                              <LinkIcon
                                className={classNames(
                                  "h-6 w-6 flex-none",
                                  active ? "text-white" : "text-gray-500"
                                )}
                                aria-hidden="true"
                              />
                              <span className="ml-3 flex-auto truncate">
                                {project.name}
                              </span>
                              {active && (
                                <span className="ml-3 flex-none text-gray-400">
                                  Jump to...
                                </span>
                              )}
                            </>
                          )}
                        </Combobox.Option>
                      )
                    )}
                  </ul>
                </li>
                {query === "" && (
                  <li className="p-2">
                    <h2 className="sr-only">Quick actions</h2>
                    <ul className="text-sm text-gray-400">
                      {quickActions.map((action) => (
                        <Combobox.Option
                          key={action.shortcut}
                          value={action}
                          className={({ active }) =>
                            classNames(
                              "flex cursor-default select-none items-center rounded-md px-3 py-2",
                              active && "bg-gray-800 text-white"
                            )
                          }
                        >
                          {({ active }) => (
                            <>
                              <action.icon
                                className={classNames(
                                  "h-6 w-6 flex-none",
                                  active ? "text-white" : "text-gray-500"
                                )}
                                aria-hidden="true"
                              />
                              <span className="ml-3 flex-auto truncate">
                                {action.name}
                              </span>
                              {/* <span className="ml-3 flex-none text-xs font-semibold text-gray-400">
                                <kbd className="font-sans">⌘</kbd>
                                <kbd className="font-sans">
                                  {action.shortcut}
                                </kbd>
                              </span> */}
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </ul>
                  </li>
                )}
              </Combobox.Options>
            )}

            {query !== "" && filteredProjects.length === 0 && (
              <div className="py-14 px-6 text-center sm:px-14">
                <FolderIcon
                  className="mx-auto h-6 w-6 text-gray-500"
                  aria-hidden="true"
                />
                <p className="mt-4 text-sm text-gray-200">
                  We couldn't find any pages with that term. Please try again.
                </p>
              </div>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
