import { json, LoaderFunction } from "remix";
import { Link, useLoaderData } from "@remix-run/react";

import { getPosts } from "~/models/post.server";

type LoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader: LoaderFunction = async () => {
  const posts = await getPosts();
  return json({ posts });
};

export default function Posts() {
  const { posts } = useLoaderData<LoaderData>();
  return (
    <main className="container mx-auto mt-16 max-w-2xl p-4">
      <h1 className="text-2xl font-bold text-white">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
