import { marked } from "marked";
import type { LoaderFunction } from "remix";
import { json } from "remix";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import type { Post } from "~/models/post.server";
import { getPost } from "~/models/post.server";

type LoaderData = { post: Post; html: string };

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);
  return json<LoaderData>({ post, html });
};

export default function PostSlug() {
  const { post, html } = useLoaderData<LoaderData>();
  return (
    <main className="text-whitecontainer mx-auto mt-16 max-w-4xl p-4 text-white">
      <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
      <div
        className="prose prose-lg prose-invert prose-headings:font-bold"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
