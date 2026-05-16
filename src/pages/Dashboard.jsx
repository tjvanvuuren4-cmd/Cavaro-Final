import React from "react";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Crown, BookOpen, Award, User, TrendingUp } from "lucide-react";

const enrolledCourses = [
  {
    title: "Cybersecurity Fundamentals",
    progress: 35,
    status: "In Progress",
  },
  {
    title: "Blockchain Development",
    progress: 0,
    status: "Not Started",
  },
];

export default function Dashboard() {
  const { user } = useUser();

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <section className="min-h-screen bg-black px-6 py-28 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_30%)]" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
                  Member Dashboard
                </p>

                <h1 className="text-4xl font-semibold md:text-6xl">
                  Welcome back,{" "}
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
                    {user?.firstName || "Member"}
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-zinc-400">
                  Continue your premium learning journey and track your progress
                  through Cavaro.
                </p>
              </div>

              <UserButton afterSignOutUrl="/" />
            </div>

            <div className="mb-10 grid gap-6 md:grid-cols-4">
              {[
                { title: "My Courses", value: "2", icon: BookOpen },
                { title: "Progress", value: "35%", icon: TrendingUp },
                { title: "Certificates", value: "0", icon: Award },
                { title: "Membership", value: "Active", icon: Crown },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
                      <Icon className="h-6 w-6 text-yellow-400" />
                    </div>

                    <p className="text-3xl font-semibold text-yellow-400">
                      {item.value}
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                      Learning Path
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold">
                      My Courses
                    </h2>
                  </div>

                  <BookOpen className="h-7 w-7 text-yellow-400" />
                </div>

                <div className="space-y-5">
                  {enrolledCourses.map((course) => (
                    <div
                      key={course.title}
                      className="rounded-2xl border border-white/10 bg-black/40 p-5"
                    >
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-white">
                            {course.title}
                          </h3>
                          <p className="text-sm text-zinc-400">
                            {course.status}
                          </p>
                        </div>

                        <span className="text-sm font-semibold text-yellow-400">
                          {course.progress}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-700"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
                  <Award className="h-7 w-7 text-yellow-400" />
                </div>

                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                  Certificates
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Your Achievements
                </h2>

                <p className="mt-4 text-zinc-400">
                  Certificates will appear here once you complete eligible
                  premium programs.
                </p>

                <button className="mt-8 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-yellow-400/60 hover:bg-white/5">
                  View Certificates
                </button>
              </div>
            </div>
          </div>
        </section>
      </SignedIn>
    </>
  );
}