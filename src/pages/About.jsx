import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Mission</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight">Advancing global cybersecurity through exceptional education.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              We combine academic rigor with practical application, ensuring our graduates possess both theoretical knowledge and hands-on expertise required for today’s complex security landscape.
            </p>
            <ul className="mt-8 grid gap-3 text-sm leading-7 text-foreground sm:grid-cols-2">
              <li>Quality and Variety</li>
              <li>Sustainable Practices</li>
              <li>Expert Guidance</li>
              <li>Experienced Team</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl bg-slate-950/5 shadow-xl shadow-slate-900/10">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              alt="Cavaro team collaborating on cybersecurity education"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold">Our Core Values that Drive Everything We Do</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {[
                { title: "Passionate About Work", description: "Passion for work is an enthusiasm and excitement for what you do." },
                { title: "Creative Team Members", description: "A creative team designs and executes campaigns while encouraging new ideas." },
                { title: "Innovation Solutions", description: "We find new ways to use existing concepts and solve problems creatively." },
                { title: "Qualifying Products", description: "Product quality refers to how well a product satisfies our customer." },
                { title: "Customer Satisfaction", description: "Happy customers are delighted because of the customer service." },
                { title: "Simplicity Interface", description: "We minimize complexity so interactions are intuitive and efficient." },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-border/50 bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border/50 bg-card p-8 shadow-sm">
            <h2 className="text-3xl font-semibold">Our Story</h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-muted-foreground">
              <p>
                Founded in 2020 by a team of cyber security and blockchain experts, Cavaro 2.0 Academy was born from a simple observation: there was a massive skills gap in two of the most important technology sectors of our time.
              </p>
              <p>
                Our founders, having worked at leading tech companies and witnessed first-hand the shortage of qualified professionals, decided to create a platform that would provide practical, industry-relevant education to anyone willing to learn.
              </p>
              <p>
                Today, we’re proud to have trained over 19,000 students worldwide, with many going on to secure positions at top companies or start their own successful ventures in cyber security and blockchain.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
