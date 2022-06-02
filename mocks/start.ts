import { rest } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  rest.get(
    "https://gitconnected.com/v1/portfolio/bradymwilliams",
    (req, res, ctx) => {
      return res(
        ctx.json({
          basics: {
            name: "Brady Williams",
            label: "Software Engineer | Engineering Leader",
            image: "https://avatars.githubusercontent.com/u/7980606?v=4",
            email: "brady.williams@hey.com",
            phone: "",
            url: "https://bradymwilliams.dev/",
            summary:
              "Software and Marketing Technology solutions architect focused on leading by example to form high-performing teams that deliver business results while maintaining a rewarding team culture leaning on relationships and engagement.\n\nPersonally responsible for the technology strategy for a portfolio of content and comparison websites in the home services and B2B services verticals. We help consumers and small business owners make complex buying decisions faster, easier, and with more confidence. Proven track record of increasing conversion rates, revenue, and team productivity.  \n\nHands-on experience designing and implementing several new web properties, design systems, and supporting services -- improving easy of use and data compliance resulting in a significant increase in revenues and value to Consumers.",
            profiles: [
              {
                network: "gitconnected",
                username: "bradymwilliams",
                url: "https://gitconnected.com/bradymwilliams",
              },
              {
                network: "GitHub",
                username: "bradymwilliams",
                url: "https://github.com/bradymwilliams",
              },
              {
                network: "LinkedIn",
                url: "https://www.linkedin.com/in/bradymwilliams",
                username: "bradymwilliams",
              },
            ],
            headline: "",
            blog: null,
            yearsOfExperience: 10,
            username: "bradymwilliams",
            locationAsString: "Salt Lake City, Utah",
            region: "Salt Lake City, Utah",
            karma: 12,
            id: "4e4c380b-5452-4636-b068-e2dd28a8c554",
            followers: 11,
            following: 5,
            picture: "https://avatars.githubusercontent.com/u/7980606?v=4",
            website: "https://bradymwilliams.dev/",
          },
          skills: [
            {
              name: "Software Development",
              level: "",
              keywords: ["Technical"],
              rating: 0,
              yearsOfExperience: 8,
            },
            {
              name: "Servant Leadership",
              level: "",
              keywords: ["Management"],
              rating: 0,
              yearsOfExperience: 5,
            },
            {
              name: "Javascript/Typscript/Node",
              level: "",
              keywords: ["Technical"],
              rating: 0,
              yearsOfExperience: null,
            },
            {
              name: "Marketing Data, Attribution, and Analytics",
              level: "",
              keywords: ["Technical"],
              rating: 0,
              yearsOfExperience: null,
            },
          ],
          projects: [
            {
              name: "clearlink attribution",
              description:
                "Designed, implemented, and documented the UTM to Tune tracking parameter system.\n\nBuilt a performant Javascript library to manage current and historical attribution parameters for outbound links\n\nDeveloped and executed a JSON parsing find and replace script to dynamically replace old partner URLs with their new TUNE counterparts. \n",
              url: "",
              highlights: [],
              keywords: [],
              roles: "Engineering Lead",
              startDate: "2022-01-01",
              endDate: "",
              entity: "",
              type: "",
              displayName: "Clearlink Attribution",
              website: "",
              summary:
                "Implement Partner Marketing Platform (TUNE) for Clearlink Web Properties. Empower Partner Strategy, Finance, and Paid Media teams with access real time revenue reporting. ",
              primaryLanguage: "",
              languages: ["PHP", "MySQL", "Typescript"],
              libraries: ["@supercharge/promise-pool", "JSONPath", "Node"],
              githubUrl: "",
              repositoryUrl: "",
              start: { year: 2022, month: null, day: null },
              end: { year: null, month: null, day: null },
              images: [],
              videos: [],
            },
            {
              name: "coolwhip",
              description: "",
              url: "",
              highlights: [],
              keywords: [],
              roles: "Project Sponsor",
              startDate: "2018-01-01",
              endDate: "",
              entity: "",
              type: "",
              displayName: "Coolwhip",
              website: "",
              summary:
                "Oversaw internal development of a new CMS, internal build tools, supporting API services, and CI/CD processes which reduced site design & development times by 10x and provided a 60% improvement in page speed performance hitting our Core Web Vital targets.",
              primaryLanguage: "",
              languages: ["PHP", "YAML", "Javascript", "SCSS"],
              libraries: [
                "Node",
                "Webpack",
                "WordPress",
                "BackboneJS",
                "Elementor",
                "Babel",
              ],
              githubUrl: "",
              repositoryUrl: "",
              start: { year: 2018, month: null, day: null },
              end: { year: null, month: null, day: null },
              images: [],
              videos: [],
            },
            {
              name: "sandstone",
              description: "",
              url: "",
              highlights: [],
              keywords: [],
              roles: [],
              startDate: "",
              endDate: "",
              entity: "",
              type: "",
              displayName: "Sandstone",
              website: "",
              summary:
                "Sandstone refers to the encapsulation of the entire concept of data retention and data manipulation of Consumer Brands enterprise facts accessible via API to populate content anywhere across the portfolio.  ",
              primaryLanguage: "",
              languages: ["PostgreSQL", "Typscript"],
              libraries: [
                "React",
                "Redis",
                "GraphQL",
                "Express",
                "Heroku",
                "Material UI",
              ],
              githubUrl: "",
              repositoryUrl: "",
              start: { year: null, month: null, day: null },
              end: { year: null, month: null, day: null },
              images: [],
              videos: [],
            },
          ],
          work: [
            {
              name: "Clearlink, Consumer Brands",
              location: "Salt Lake City",
              description: "",
              position: "Director, Software Engineering",
              url: "https://www.clearlink.com/",
              startDate: "2021-08-01",
              endDate: "",
              summary:
                "Restructured technology teams to provide better service to the Consumer Brands department, trained new managers, and refined team processes to improve the quality of work being delivered by the team. Recruited, hired, and trained managers, leads, and other developers, doubling the size of the team.\n\nOversaw internal development of a new CMS, internal build tools, supporting API services, and CI/CD processes which reduced site design & development times by 10x and provided a 60% improvement in page speed performance hitting our Core Web Vital targets.",
              highlights: [
                "Lead training program for Content Strategists and Publishers on their new CMS",
                "Mentored and promoted Junior Developers",
                "Performed technical due diligence for high-value acquisitions",
              ],
              isCurrentRole: true,
              start: { year: 2021, month: 8 },
              end: {},
              company: "Clearlink, Consumer Brands",
              website: "https://www.clearlink.com/",
            },
            {
              name: "Clearlink, Consumer Brands",
              location: "Salt Lake City, Utah",
              description: "",
              position: "Software Engineering Manager",
              url: "https://www.clearlink.com/",
              startDate: "2015-07-01",
              endDate: "2021-08-01",
              summary:
                "Analyzed outstanding backlog and instituted process improvements that completely eliminated backlog within 18 months.\n\nCoordinated product delivery efforts across multiple teams including Product Management, Development, Documentation, QA, and Marketing.\n\nFostered collaborative, trusting relationships with product, marketing, and business teams",
              highlights: [
                "Clearlink Employee Impact Award for contributions to the business and culture",
                "Fostered a trial remote work program for developers",
              ],
              isCurrentRole: false,
              start: { year: 2015, month: 7 },
              end: { year: 2021, month: 8 },
              company: "Clearlink, Consumer Brands",
              website: "https://www.clearlink.com/",
            },
          ],
          publications: [],
          education: [],
          volunteer: [],
          awards: [
            {
              title: "Clearlink Employee Impact Award",
              date: "2015-01-01",
              awarder: "Consumer Brands",
              summary: "",
              fullDate: { year: 2015, month: null },
            },
          ],
          languages: [],
          interests: [
            { name: "Sim Racing", keywords: [] },
            { name: "Fly Fishing", keywords: [] },
            { name: "Mountain Biking", keywords: [] },
            { name: "Snowboarding", keywords: [] },
            { name: "Dog Training", keywords: [] },
          ],
          references: [
            {
              name: "Adrian Barber, VP of Technology | Clearlink, Consumer Brands",
              reference: " ",
            },
          ],
          certificates: [],
          meta: {
            note: "This is a combined version of the old and new JSON Resume API to provide maximum compatibility. You will notice duplicated values in different fields.",
            canonical:
              "https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json",
            version: "v1.0.0",
            lastModified: "2020-12-29T15:53:00",
          },
        })
      );
    }
  ),
];

const server = setupServer(...handlers);

server.listen({ onUnhandledRequest: "warn" });
console.info("🔶 Mock server running");

process.once("SIGINT", () => server.close());
process.once("SIGTERM", () => server.close());
