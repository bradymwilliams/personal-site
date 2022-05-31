import { LoaderFunction, MetaFunction, useLoaderData } from "remix";

type Tool = {
  title: string;
  description: string;
  url: string;
  image: string;
  category: string;
};

export default function Uses() {
  const { tools, categories } = useLoaderData();

  return (
    <div className="bg-slate-900">
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <div className="text-white">
          <h1 className="text-2xl font-bold">Software Tools</h1>
          <p className="mt-6 text-lg">
            This is my list of software tools that I use frequently to get
            things done.
          </p>
        </div>
        {categories.map((category: any) => (
          <div key={category} className="mt-12 mb-8 ">
            <h3 className="mb-4 text-xl font-bold text-white">{category}</h3>
            <ul className="">
              {tools[category].map((item: any) => (
                <li
                  key={item.title}
                  className="space-between rounded-md border-2 border-transparent px-2 py-4 hover:border-2 hover:border-gray-700 md:px-1"
                >
                  <a
                    href={item.url}
                    className="md:flex "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="mx-auto block h-20 w-20 md:mr-4 md:ml-0 md:self-center"
                    />
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-200">
                        {item.description}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return {
    title: "Brady Uses",
    description: "Software that powers my productivity",
  };
};

export const loader: LoaderFunction = async () => {
  const toolsData = [
    {
      title: "Visual Studio Code",
      description:
        "My day to day Code Editor. Took years to get me to pivot from Sublime Text 2.",
      url: "https://code.visualstudio.com/",
      image: "/images/uses/code.svg",
      category: "development",
    },
    {
      title: "Brave",
      description:
        "Brave is a chromium web browser built with privacy top of mind. Blocks ads and trackers.",
      url: "https://brave.com/",
      image: "/images/uses/brave.svg",
      category: "development",
    },
    {
      title: "iTerm2 w/ Oh My Zsh",
      description: "Feature rich terminal with loads of available plugins.",
      url: "https://ohmyz.sh/",
      image: "/images/uses/iterm2.svg",
      category: "development",
    },

    {
      title: "Raycast",
      description:
        "A Spotlight alternative. Recently switched from Alfred, loving the experience!",
      url: "https://www.raycast.com/",
      image: "/images/uses/raycast.svg",
      category: "productivity",
    },
    {
      title: "Todoist",
      description: "Task Management and Idea Bank",
      url: "https://todoist.com/",
      image: "/images/uses/todoist.svg",
      category: "productivity",
    },
    {
      title: "Obsidian",
      description:
        "Obsidian is your Notion alternative, but with more privacy and no backend.",
      url: "https://obsidian.md/",
      image: "/images/uses/obsidian.svg",
      category: "productivity",
    },
    {
      title: "Remix",
      description:
        "Remix is a full stack web framework that lets you focus on the user interface and work back through web fundamentals to deliver a fast, slick, and resilient user experience.",
      url: "https://www.remix.run/",
      image: "/images/uses/remix.svg",
      category: "portfolio tech stack",
    },
    {
      title: "Tailwind CSS",
      description:
        "A utility-first, utility-only CSS framework that can be composed to build any design, directly in your markup.",
      url: "https://tailwindcss.com/",
      image: "/images/uses/tailwind.svg",
      category: "portfolio tech stack",
    },
    {
      title: "Prisma",
      description:
        "TypeScript ORM -- overkill for this project but valuable enough to always use as a guard-rail against future changes.",
      url: "https://www.prisma.io/",
      image: "/images/uses/prisma.png",
      category: "portfolio tech stack",
    },
    // {
    //   "title": "Three.js",
    //   "description": "Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL",
    //   "url": "https://threejs.org/",
    //   "image": "/images/uses/threejs.svg",
    //   "category": "portfolio tech stack"
    // }
  ];

  const tools: { [key: string]: Tool[] } = {};

  toolsData.forEach((tool: any) => {
    if (!tools[tool.category]) {
      tools[tool.category] = [];
    }
    tools[tool.category] = [...tools[tool.category], tool];
  });

  const categories = Object.keys(tools).reverse();

  const data = { tools, categories };

  return data;
};
