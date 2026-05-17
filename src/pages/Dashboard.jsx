import React from "react";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

import {
  Crown,
  Globe,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  MonitorCog,
} from "lucide-react";

const activeServices = [
  {
    title: "Premium Business Website",
    progress: 70,
    status: "In Development",
  },
  {
    title: "IT Support Setup",
    progress: 35,
    status: "Active Support",
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
        <section className="relative min-h-screen overflow-hidden bg-black px-6 py-28 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_30%)]" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
                  Client Portal
                </p>

                <h1 className="text-4xl font-semibold md:text-6xl">
                  Welcome back,{" "}
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
                    {user?.firstName || "Client"}
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-zinc-400">
                  Manage your active services, monitor project progress,
                  and access your premium Cavaro business solutions.
                </p>
              </div>

              <UserButton afterSignOutUrl="/" />
            </div>

            <div className="mb-10 grid gap-6 md:grid-cols-4">
              {[
                { title: "Active Services", value: "2", icon: Briefcase },
                { title: "Project Progress", value: "70%", icon: TrendingUp },
                { title: "Support Status", value: "Active", icon: ShieldCheck },
                { title: "Client Access", value: "Premium", icon: Crown },
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
                      Active Projects
                    </p>

                    <h2 className="mt-2 text-3xl font-semibold">
                      Current Services
                    </h2>
                  </div>

                  <Globe className="h-7 w-7 text-yellow-400" />
                </div>

                <div className="space-y-5">
                  {activeServices.map((service) => (
                    <div
                      key={service.title}
                      className="rounded-2xl border border-white/10 bg-black/40 p-5"
                    >
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-white">
                            {service.title}
                          </h3>

                          <p className="text-sm text-zinc-400">
                            {service.status}
                          </p>
                        </div>

                        <span className="text-sm font-semibold text-yellow-400">
                          {service.progress}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-700"
                          style={{ width: `${service.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
                  <MonitorCog className="h-7 w-7 text-yellow-400" />
                </div>

                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                  Support & Services
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Business Solutions
                </h2>

                <p className="mt-4 text-zinc-400">
                  Access premium web design, IT support, maintenance,
                  and business growth solutions through your Cavaro portal.
                </p>

                <button className="mt-8 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-yellow-400/60 hover:bg-white/5">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </section>
      </SignedIn>
    </>
  );
}