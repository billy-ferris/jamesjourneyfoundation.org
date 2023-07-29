"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/blog": {
    name: "blog",
  },
  "/guestbook": {
    name: "guestbook",
  },
  "/store": {
    name: "store",
  },
};

function Logo() {
  return (
    <Link aria-label="James' Journey" href="/">
      <motion.svg
        className="h-12"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="rgb(153 27 27)"
        viewBox="0 0 256 256"
      >
        <motion.path
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          d="M128,16a88.1,88.1,0,0,0-88,88c0,23.43,9.4,49.42,25.13,69.5,12.08,15.41,26.5,26,41.91,31.09L96.65,228.85A8,8,0,0,0,104,240h48a8,8,0,0,0,7.35-11.15L149,204.59c15.4-5.07,29.83-15.68,41.91-31.09C206.6,153.42,216,127.43,216,104A88.1,88.1,0,0,0,128,16Zm11.87,208H116.13l6.94-16.19c1.64.12,3.28.19,4.93.19s3.29-.07,4.93-.19Zm38.4-60.37C163.94,181.93,146.09,192,128,192s-35.94-10.07-50.27-28.37C64.12,146.27,56,124,56,104a72,72,0,0,1,144,0C200,124,191.88,146.27,178.27,163.63Zm-1-59.74A8.52,8.52,0,0,1,176,104a8,8,0,0,1-7.88-6.68,41.29,41.29,0,0,0-33.43-33.43,8,8,0,1,1,2.64-15.78,57.5,57.5,0,0,1,46.57,46.57A8,8,0,0,1,177.32,103.89Z"
        ></motion.path>
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside className="-mx-4 font-serif md:mx-0 md:w-[150px] md:flex-shrink-0 md:px-0">
      <div className="lg:sticky lg:top-20">
        <div className="mb-2 ml-2 flex flex-col items-start space-y-10 px-4 md:mb-4 md:ml-2 md:flex-row md:px-0 ">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="fade relative flex scroll-pr-6 flex-row items-start px-4 pb-0 md:relative md:flex-col md:overflow-auto md:px-0"
            id="nav"
          >
            <div className="mb-2 mt-2 flex flex-row space-x-0 pr-10 md:mt-0 md:flex-col">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      "flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200",
                      {
                        "text-neutral-500": !isActive,
                        "font-bold": isActive,
                      },
                    )}
                  >
                    <span className="relative px-[10px] py-[5px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 z-[-1] rounded-md bg-neutral-100 dark:bg-neutral-800"
                          layoutId="sidebar"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
