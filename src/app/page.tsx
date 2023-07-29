import Image from "next/image";
import { ArrowIcon, ViewsIcon } from "~/app/components/icons";
import { name, about, bio, avatar } from "~/lib/info";

const HomePage = () => {
  const views = "$0";

  return (
    <section>
      <h1 className="font-serif text-3xl font-bold">{name}</h1>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="my-8 flex flex-col items-start md:flex-row md:items-center">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="ml-0 mt-8 space-y-2 text-neutral-500 dark:text-neutral-400 md:ml-6 md:mt-0">
          <div className="flex items-center">
            <ViewsIcon />
            {`${views?.toLocaleString()} donated to the community`}
          </div>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-500 dark:text-neutral-400 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://jamesjourneyfoundation.org"
          >
            <ArrowIcon />
            <p className="h-7">donate to the cause</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/james_journey_"
          >
            <ArrowIcon />
            <p className="h-7">follow us on instagram</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default HomePage;
