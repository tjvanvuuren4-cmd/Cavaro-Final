import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        <header className="space-y-4 rounded-[2rem] border border-border/40 bg-card/90 p-8 shadow-xl shadow-slate-900/5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">Privacy Policy</p>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Your privacy matters at Cavaro 2.0</h1>
            <p className="text-sm text-muted-foreground">Effective Date: May 2026</p>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            We are committed to collecting and processing your personal information responsibly, in accordance with the Protection of Personal Information Act, 2013 (POPIA) and other applicable privacy laws.
          </p>
        </header>

        <section className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            We may collect and process the following personal information from users of our website and related services.
          </p>
          <ul className="mt-5 space-y-3 pl-6 text-sm leading-7 text-muted-foreground list-disc">
            <li>Full names</li>
            <li>Email addresses</li>
            <li>Phone numbers</li>
            <li>Billing and payment information</li>
            <li>Account registration details</li>
            <li>Website usage and analytics data</li>
            <li>Communications submitted through contact forms or support channels</li>
          </ul>
        </section>

        <section className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Why We Process Personal Information</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            We process your data to provide a secure, responsive, and personalized service experience.
          </p>
          <ul className="mt-5 space-y-3 pl-6 text-sm leading-7 text-muted-foreground list-disc">
            <li>Providing and managing our services</li>
            <li>Responding to inquiries and support requests</li>
            <li>Improving website functionality and user experience</li>
            <li>Processing payments and account administration</li>
            <li>Sending important service-related communications</li>
            <li>Marketing and promotional communication (where consent is provided)</li>
            <li>Complying with legal and regulatory obligations</li>
          </ul>
        </section>

        <section className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Legal Basis for Processing</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            We process your personal information only where we have a valid legal reason to do so.
          </p>
          <ul className="mt-5 space-y-3 pl-6 text-sm leading-7 text-muted-foreground list-disc">
            <li>Your consent</li>
            <li>Contractual necessity</li>
            <li>Compliance with legal obligations</li>
            <li>Legitimate business interests</li>
          </ul>
        </section>

        <section className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Data Storage and Security</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            We store data securely and take appropriate measures to protect your personal information.
          </p>
          <ul className="mt-5 space-y-3 pl-6 text-sm leading-7 text-muted-foreground list-disc">
            <li>Secure server infrastructure</li>
            <li>Access controls and authentication procedures</li>
            <li>Regular security monitoring and audits</li>
            <li>Encryption where appropriate</li>
            <li>Confidentiality agreements with service providers</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            While we take reasonable precautions, no method of electronic transmission or storage is completely secure.
          </p>
        </section>

        <section className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">How We Share Information</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            We do not sell your personal information. We may share it only when required to deliver services or comply with the law.
          </p>
          <ul className="mt-5 space-y-3 pl-6 text-sm leading-7 text-muted-foreground list-disc">
            <li>Trusted third-party service providers</li>
            <li>Payment processors</li>
            <li>Hosting providers</li>
            <li>Legal or regulatory authorities where required by law</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Third parties are expected to maintain appropriate confidentiality and security measures.
          </p>
        </section>

        <section className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">International Transfers</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            When personal information is transferred outside South Africa, we take steps to ensure adequate protection in line with POPIA.
          </p>
        </section>

        <section className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Your Rights Under POPIA</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            You have rights over the personal information we process about you.
          </p>
          <ul className="mt-5 space-y-3 pl-6 text-sm leading-7 text-muted-foreground list-disc">
            <li>Request access to your personal information</li>
            <li>Request correction or deletion of personal information</li>
            <li>Object to processing of personal information</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Lodge a complaint with the Information Regulator of South Africa</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            To exercise any of these rights, contact us using the details below.
          </p>
        </section>

        <section className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Cookies and Tracking Technologies</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            We use cookies and similar technologies to improve your experience and understand website usage.
          </p>
          <ul className="mt-5 space-y-3 pl-6 text-sm leading-7 text-muted-foreground list-disc">
            <li>Improve website functionality</li>
            <li>Analyze website traffic and usage</li>
            <li>Remember user preferences</li>
            <li>Support marketing and advertising activities</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            You may disable cookies in your browser, but some site features may not work correctly.
          </p>
        </section>

        <section className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Data Retention</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            We retain personal information only as long as needed for the purposes described in this policy or as required by law.
          </p>
        </section>

        <section className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Data Breach Procedures</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            In the event of a security incident, we will act quickly to protect affected individuals and comply with legal requirements.
          </p>
          <ul className="mt-5 space-y-3 pl-6 text-sm leading-7 text-muted-foreground list-disc">
            <li>Investigate and contain the breach promptly</li>
            <li>Notify affected individuals when required</li>
            <li>Notify the South African Information Regulator where legally required</li>
            <li>Take reasonable steps to prevent future incidents</li>
          </ul>
        </section>

        <section className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Third-Party Links</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Our website may contain links to external websites. We are not responsible for the privacy practices or content of third-party sites.
          </p>
        </section>

        <section className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            We may update this Privacy Policy from time to time. New versions will be published on our website with the revised effective date.
          </p>
        </section>

        <section className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
            <p>If you have questions about this Privacy Policy or your personal information, please contact us:</p>
            <p>
              Cavaro<br />
              Website: cavaro2.0.co.za<br />
              Email: admin@cavaro2.0.co.za<br />
              Phone: +27 [Your Number]
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Information Regulator (South Africa)</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            If you believe your personal information has been processed unlawfully, you may lodge a complaint with the Information Regulator South Africa.
          </p>
        </section>
      </div>
    </main>
  );
}
