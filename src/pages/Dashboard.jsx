import React from "react";
import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@clerk/clerk-react";
import { Crown, BookOpen, Award, User } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <section className="min-h-screen bg-black px-6 py-28 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
                  Member Dashboard
                </p>
                <h1 className="text-4xl font-semibold md:text-6xl">
                  Welcome To{" "}
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
                    Cavaro
                  </span>
                </h1>
              </div>

              <UserButton afterSignOutUrl="/" />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "My Courses", text: "View enrolled programs.", icon: BookOpen },
                { title: "Certificates", text: "Access your achievements.", icon: Award },
                { title: "Profile", text: "Manage account details.", icon: User },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
                      <Icon className="h-7 w-7 text-yellow-400" />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                    <p className="text-zinc-400">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SignedIn>
    </>
  );
}