import { SignedIn, SignedOut, SignUpButton } from "@clerk/clerk-react";
import { ShieldCheck, Bitcoin, Cloud } from "lucide-react";

const courses = [
  {
    title: "Cybersecurity Fundamentals & Threat Defense",
    description:
      "Master modern cybersecurity principles including threat analysis, vulnerability assessment, incident response, and enterprise defense strategies.",
    duration: "14 Weeks",
    category: "Cybersecurity",
    price: "R 51,800",
    icon: ShieldCheck,
  },
  {
    title: "Blockchain Development & Architecture",
    description:
      "Deep dive into blockchain ecosystems, decentralized applications, smart contracts, and distributed ledger technologies.",
    duration: "20 Weeks",
    category: "Blockchain",
    price: "R 61,050",
    icon: Bitcoin,
  },
  {
    title: "Ethical Hacking & Penetration Testing",
    description:
      "Learn professional penetration testing methodologies, exploit analysis, social engineering, and advanced security auditing.",
    duration: "18 Weeks",
    category: "Cybersecurity",
    price: "R 88,800",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Security & Infrastructure Protection",
    description:
      "Secure cloud environments including AWS, Azure, and GCP using encryption, identity management, and zero-trust architecture.",
    duration: "12 Weeks",
    category: "Cloud Security",
    price: "R 40,700",
    icon: Cloud,
  },
];

export default function PremiumCourseCards() {
  return (
    <section id="courses" className="relative bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
            Curated Premium Programs
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Premium Courses Built For{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
              Modern Excellence
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Cavaro is a luxury education marketplace connecting ambitious
            learners with premium professional growth opportunities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <div
                key={course.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-yellow-500/40 min-h-[620px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
                    <Icon className="h-7 w-7 text-yellow-400" />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {course.title}
                  </h3>

                  <p className="leading-7 text-zinc-400 flex-grow">
                    {course.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">
                      {course.duration}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                      {course.category}
                    </span>
                  </div>

                  <p className="mt-6 text-2xl font-semibold text-yellow-400">
                    {course.price}
                  </p>

                  <button className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400 transition hover:text-yellow-300">
                  <SignedOut>
                   <SignUpButton mode="modal">
                    <button className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400 transition hover:text-yellow-300">
                     Explore Course →
                    </button>
                   </SignUpButton>
                  </SignedOut>

                  <SignedIn>
                    <a
                      href="/dashboard"
                      className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400 transition hover:text-yellow-300"
                    >
                      Go To Dashboard →
                    </a>
                   </SignedIn>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}