"use client";

import { useRef } from "react";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      style={{ opacity: false ? 1 : 0.7 }}
      className="relative max-w-[500px] text-sm"
      ref={formRef}
      action={(_formData) => {
        formRef.current?.reset();
      }}
    >
      <input
        aria-label="Your message"
        placeholder="Your message..."
        disabled={false}
        name="entry"
        type="text"
        required
        className="mt-1 block w-full rounded-md border-neutral-300 bg-gray-100 py-2 pl-4 pr-32 text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-100"
      />
      <button
        className="absolute right-1 top-1 flex h-7 items-center justify-center rounded bg-neutral-200 px-2 py-2 font-medium text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
        disabled={false}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
