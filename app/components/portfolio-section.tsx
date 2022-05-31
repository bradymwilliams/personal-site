import { Link } from "@remix-run/react";

const posts = [
  {
    title: "CLWP - Clearlink WordPress",
    slug: "/portfolio/coolwhip",
    image: "https://picsum.photos/id/357/330/200",
  },
  {
    title: "Sandstone",
    slug: "/portfolio/sandstone",
    image: "https://picsum.photos/id/261/330/200",
  },
];

export default function PortfolioSection() {
  return (
    <div className="relative  px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3  sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Professional Work
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-100 sm:mt-4">
            WIP: Quick Summaries of some recent initiatives
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-64 lg:max-w-none lg:grid-cols-2">
          {posts.map((post: any, i: number) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <Link prefetch="intent" to={post.slug}>
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    loading="lazy"
                    src={post.image}
                    alt="Randomly Generated"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="mt-2 block text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
