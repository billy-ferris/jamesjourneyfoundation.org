import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = () => (
  <section>
    <h1 className="font-serif text-3xl font-bold">Blog</h1>
    <p className="my-5 text-neutral-800 dark:text-neutral-200">
      This is our blog page.
    </p>
  </section>
);

export default BlogPage;
