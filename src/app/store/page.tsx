import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store",
};

const StorePage = () => (
  <section>
    <h1 className="font-serif text-3xl font-bold">Store</h1>
    <p className="my-5 text-neutral-800 dark:text-neutral-200">
      This is our store page.
    </p>
  </section>
);

export default StorePage;
