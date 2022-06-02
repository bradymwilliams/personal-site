import { LocationMarkerIcon } from "@heroicons/react/solid";
import { useLoaderData } from "@remix-run/react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { json, MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "Resume | Brady Williams",
    description: "API Generated Resume",
  };
};

export async function loader() {
  const res = await fetch(
    "https://gitconnected.com/v1/portfolio/bradymwilliams"
  );
  const data = await res.json();
  return json(data);
}

export default function Resume() {
  const { basics, skills } = useLoaderData();
  // console.log(Object.keys(useLoaderData()));
  console.log(skills);
  return (
    <div className="bg-slate-900 p-4 pb-20">
      <div className="mx-auto min-h-[11in] max-w-[8.5in] rounded-sm bg-white p-10 shadow-xl">
        {/* Basics */}
        <div className="mb-5 flex">
          <img
            className="mr-4 hidden h-full w-40 rounded lg:block"
            src="https://avatars.githubusercontent.com/u/7980606?v=4"
            alt="Brady Github"
          />
          <div className="w-full text-sm lg:flex">
            <div className="flex-grow-1 mr-4">
              <h1 className="text-3xl font-bold">{basics.name}</h1>
              <p>{basics.label}</p>
              <div className="mt-1 flex text-gray-500">
                <LocationMarkerIcon className="inline h-4" />
                {basics.locationAsString}
              </div>
              <p>
                <a href={`mailto:${basics.email}`}>{basics.email}</a>
              </p>
              <p>
                Site: <a href={basics.website}>{basics.website}</a>
              </p>
            </div>
            <div className="flex-shrink-0 lg:text-right">
              <a href="#">
                <p>
                  bradymwilliams <IoLogoGithub className="inline w-4" />
                </p>
              </a>
              <a href="#">
                <p>
                  bradymwilliams <IoLogoLinkedin className="inline w-4" />
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="mb-6 whitespace-pre-wrap rounded bg-gray-200 p-8 text-sm">
          {basics.summary}
        </div>
        {/* Skills */}
        <div className="mb-6 flex">
          <h2 className="mr-2 text-xl text-gray-400">Skills:</h2>
          <div className="flex flex-wrap">
            {skills.map(({ name }: { name: string }, i: number) => (
              <span
                className="mb-2 mr-2 whitespace-nowrap rounded-full border border-black p-1 text-xs font-bold"
                key={i}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
        {/* Experience */}
        <div className="mb-6">
          <h2 className="mr-2 mb-4 flex text-xl text-gray-400">
            <span className="flex-shrink-0">Experience</span>
            <span className="mt-4 ml-8 h-[1px] w-full bg-gray-300"></span>
          </h2>
          <div className="">
            <div className="relative ml-2 flex border-l border-dashed border-gray-300 pl-5">
              <span className="absolute -left-2 h-4 w-4 rounded-full bg-gray-300"></span>
              <div className="">
                <div className="flex">
                  <h3 className="text-lg font-semibold leading-none">
                    Clearlink, Consumer Brands
                    <a
                      href="https://www.clearlink.com/"
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                    >
                      <span className="text-xs font-normal text-gray-400">
                        &nbsp;clearlink.com
                      </span>
                    </a>
                  </h3>
                  <div className="flex-grow text-right text-xs text-gray-400">
                    <div>
                      <span>
                        <span>Aug&nbsp;</span>
                        <span>2021</span>
                      </span>
                      <span> to </span>
                      <span>Present</span>
                    </div>
                  </div>
                </div>
                <p className="">
                  <span className="user-resume__work-position">
                    Director, Software Engineering
                  </span>
                  <span className="user-resume__work-location">
                    Salt Lake City
                  </span>
                </p>
                <p className="whitespace-pre-wrap">
                  Restructured technology teams to provide better service to the
                  Consumer Brands department, trained new managers, and refined
                  team processes to improve the quality of work being delivered
                  by the team. Recruited, hired, and trained managers, leads,
                  and other developers, doubling the size of the team. Oversaw
                  internal development of a new CMS, internal build tools,
                  supporting API services, and CI/CD processes which reduced
                  site design &amp; development times by 10x and provided a 60%
                  improvement in page speed performance hitting our Core Web
                  Vital targets.
                </p>
                <ul className="user-resume__highlights">
                  <li>
                    Lead training program for Content Strategists and Publishers
                    on their new CMS
                  </li>
                  <li>Mentored and promoted Junior Developers</li>
                  <li>
                    Performed technical due diligence for high-value
                    acquisitions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        {/* Awards */}
        {/* Interests */}
        {/* References */}
      </div>
    </div>
  );
}
