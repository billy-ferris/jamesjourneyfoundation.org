import type { Metadata } from "next";
import { SignIn, SignOut } from "./buttons";
import Form from "./form";
import { getAuthSession } from "~/lib/auth";

export const metadata: Metadata = {
  title: "Guestbook",
};

export const dynamic = "force-dynamic";

const GuestbookPage = async () => {
  const session = await getAuthSession();

  return (
    <section>
      <h1 className="mb-5 font-serif text-3xl font-bold">Guestbook</h1>
      {session?.user ? (
        <>
          <Form />
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
      <div>No entries</div>
    </section>
  );
};

export default GuestbookPage;
