import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";

import Sidebar from "~/app/components/sidebar";

import "./global.css";

const kaisei = localFont({
  src: "../../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "James' Journey",
    template: "%s | James' Journey",
  },
  description: "Lorem ipsum.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html
    lang="en"
    className={clsx(
      "bg-white text-black dark:bg-[#111010] dark:text-white",
      kaisei.variable,
    )}
  >
    <body className="mx-4 mb-40 mt-8 flex max-w-4xl flex-col antialiased md:mt-20 md:flex-row lg:mx-auto lg:mt-32">
      <Sidebar />
      <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:mt-0 md:px-0">
        {children}
        <Analytics />
      </main>
    </body>
  </html>
);

export default RootLayout;
