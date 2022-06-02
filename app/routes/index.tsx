import { json, LoaderFunction } from "remix";
import { useLoaderData } from "@remix-run/react";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import {
  BookOpenIcon,
  BeakerIcon,
  StatusOnlineIcon,
} from "@heroicons/react/outline";
import { MetaFunction } from "remix";

const perks = [
  {
    name: "Status",
    description: "Employed, exploring employment options",
    colorClass: "text-green-400",
    icon: StatusOnlineIcon,
  },
  {
    name: "Currently Learning",
    colorClass: "text-purple-400",
    description: "AWS Serverless Architecture, Typescript, NoSQL",
    icon: BeakerIcon,
  },
  {
    name: "Currently Reading",
    colorClass: "text-rose-500",
    description: "Almanack Of Naval Ravikant: A Guide To Wealth And Happiness",
    icon: BookOpenIcon,
  },
];

export function headers() {
  return {
    "Cache-Control": "max-age=5400",
  };
}

export const meta: MetaFunction = () => {
  return {
    description: "Just a little about me..",
  };
};

// type LoaderData = {
//   // this is a handy way to say: "posts is whatever type getPosts resolves to"
//   // posts: Awaited<ReturnType<typeof getPosts>>;
// };

export const loader: LoaderFunction = async () => {
  const res = await fetch(
    "https://gitconnected.com/v1/portfolio/bradymwilliams"
  );

  const { projects } = await res.json();

  return json({ projects });
};

export default function Index() {
  const { projects } = useLoaderData();
  return (
    <div className="relative bg-slate-900">
      <div className="container mx-auto max-w-5xl px-4 pt-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="aspect-w-3 aspect-h-2 md:space-y-4">
            <img
              className="mx-auto max-w-md rounded-lg object-cover shadow-lg"
              height="245"
              width="368"
              src="/images/wedge.jpeg"
              alt=""
            />
          </div>
          <div className="lg:col-span-1">
            <p className="text-md font-semibold uppercase tracking-wide text-white">
              Hi, my name is
            </p>
            <h2 className="bg-gradient-to-br from-purple-400 to-red-900 bg-clip-text text-4xl font-extrabold text-transparent">
              Brady Williams
            </h2>
            <p className="mt-6 text-gray-100 md:text-lg">
              I’m a full-stack engineer, terrible sim-racer, and fence-sitter in
              the dog-person vs cat-person debate. I work at{" "}
              <a
                className="whitespace-nowrap font-extrabold text-sky-600 underline"
                href="https://clearlink.com"
              >
                Clearlink <ExternalLinkIcon className="inline h-4 w-4" />
              </a>{" "}
              as the Director of Software Engineering, after serving as both a
              manager and team lead for our Consumer Brands engineering team.
              I'm a mission focused generalist who drives team focus towards
              business needs. Reach out on LinkedIn for my resume!
            </p>
            <div className="mt-3 text-xl">
              <a
                href="https://www.linkedin.com/in/brady-williams-89250777"
                className="inline-flex items-center rounded-md  border-transparent px-3 py-2 font-medium leading-4 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                LinkedIn
                <ExternalLinkIcon
                  className="ml-2 -mr-0.5 h-4 w-4 text-sky-600"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://github.com/bradymwilliams/"
                className="inline-flex items-center rounded-md  border-transparent px-3 py-2 font-medium leading-4 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Github
                <ExternalLinkIcon
                  className="ml-2 -mr-0.5 h-4 w-4 text-sky-600"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <h2 className="sr-only">Current Status</h2>
        <div className="mx-auto max-w-7xl divide-y divide-gray-200 md:flex md:justify-center md:divide-y-0 md:divide-x md:py-8">
          {perks.map((perk, i) => {
            return (
              <div key={i} className="py-8 md:w-1/3 md:flex-none md:py-0">
                <div className="mx-auto flex max-w-sm items-center px-4 md:max-w-none md:px-8">
                  <perk.icon
                    className={`h-8 w-8 flex-shrink-0 ${perk.colorClass}`}
                  />
                  <div className="ml-4 flex flex-auto flex-col-reverse">
                    <h3 className="font-medium text-gray-900 ">
                      {perk.description}
                    </h3>
                    <p className="text-sm text-gray-500">{perk.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Featured Projects
        </h2>
        <div className="mx-auto max-w-2xl px-8">
          {projects.map((project: any, i: number) => {
            return <ProjectCard project={project} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({
  project,
}: {
  project: {
    displayName: string;
    languages: string[];
    libraries: string[];
    summary: string;
    description: string;
  };
}) => {
  const technology = [...project.languages, ...project.libraries];
  return (
    <div className={`mb-8 rounded-sm bg-white p-8`}>
      <h3 className="mb-1 text-lg font-bold leading-5">
        {project.displayName}
      </h3>
      <p className="mt-2 pb-4 text-sm text-gray-600">{project.summary}</p>
      <hr />
      <div className="pt-4">
        {technology.map((name: any, i: number) => (
          <ProjectCardTile name={name} key={i} />
        ))}
      </div>
      {project.description ? (
        <p className="mt-2 whitespace-pre-wrap text-sm text-gray-600">
          {project.description}
        </p>
      ) : null}
    </div>
  );
};

const ProjectCardTile = ({ name }: { name: String }) => (
  <div className="mr-3 mb-2 inline-block rounded bg-sky-100 px-3 py-2 text-xs text-sky-700">
    {name}
  </div>
);
