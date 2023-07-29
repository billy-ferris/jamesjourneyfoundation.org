"use client";

import { signIn, signOut } from "next-auth/react";
import { GoogleIcon } from "~/app/components/icons";

export const SignOut = () => (
  <button
    className="mb-6 mt-2 text-xs text-neutral-700 dark:text-neutral-300"
    onClick={() => void signOut()}
  >
    → Sign out
  </button>
);

export const SignIn = () => (
  <button
    className="mb-4 flex items-center rounded-md border border-gray-800 bg-black px-4 py-3 text-sm font-semibold text-neutral-200 transition-all hover:text-white"
    onClick={() => void signIn("google")}
  >
    <GoogleIcon />
    <div className="ml-3">Sign in with Google</div>
  </button>
);
