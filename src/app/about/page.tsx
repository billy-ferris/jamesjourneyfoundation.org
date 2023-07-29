import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = () => (
  <section>
    <h1 className="font-serif text-3xl font-bold">About Me</h1>
    <p className="my-5 text-neutral-800 dark:text-neutral-200">
      This is our about page.
    </p>
  </section>
);

export default AboutPage;
