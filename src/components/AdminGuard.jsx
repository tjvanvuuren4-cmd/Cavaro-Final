import React from "react";
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/clerk-react";

const ADMIN_EMAIL = "tjvanvuuren4@gmail.com";

export default function AdminGuard({ children }) {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  const email = user?.primaryEmailAddress?.emailAddress?.toLowerCase();

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        {email === ADMIN_EMAIL ? (
          children
        ) : (
          <div className="min-h-screen bg-black flex items-center justify-center px-6 text-center text-white">
            <div>
              <h1 className="text-4xl font-semibold text-yellow-400">
                Access Denied
              </h1>
              <p className="mt-4 text-zinc-400">
                You do not have permission to access this admin area.
              </p>
            </div>
          </div>
        )}
      </SignedIn>
    </>
  );
}