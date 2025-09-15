import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - metaintuit",
  description:
    "MetaIntuit Corp privacy policy explaining how we collect, use, and safeguard your personal information. We do not sell, share, or rent consumer personal information to third parties.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Privacy Policy - metaintuit",
    description: "MetaIntuit Corp privacy policy - we do not sell or share personal information with third parties.",
    url: "https://metaintuit.com/privacypolicy",
    siteName: "metaintuit",
    type: "website",
  },
}

const privacyPolicySchema = {
  "@context": "https://schema.org",
  "@type": "PrivacyPolicy",
  name: "MetaIntuit Corp Privacy Policy",
  url: "https://metaintuit.com/privacypolicy",
  datePublished: "2025-09-03",
  dateModified: "2025-09-03",
  publisher: {
    "@type": "Organization",
    name: "MetaIntuit Corp",
    url: "https://metaintuit.com",
  },
  description:
    "Privacy policy for MetaIntuit Corp explaining data collection, usage, and protection practices. We do not sell, share, or rent consumer personal information to third parties.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "metaintuit",
    url: "https://metaintuit.com",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacyPolicySchema),
        }}
      />
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                <strong>Effective Date:</strong> September 3, 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">1. Introduction</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  MetaIntuit Corp ("MetaIntuit," "we," "our," or "us") values your privacy and is committed to
                  protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard
                  information obtained through our website (
                  <a href="https://metaintuit.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                    https://metaintuit.com
                  </a>
                  ) and services, including SMS communications.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  By using our services, you agree to the practices described in this Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We may collect the following categories of information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Contact Information</strong> – Name, email address, and phone number
                  </li>
                  <li>
                    <strong>Submitted Information</strong> – Details provided through contact forms, job applications,
                    or service requests
                  </li>
                  <li>
                    <strong>Communication Data</strong> – SMS messages and related interactions with our team
                  </li>
                  <li>
                    <strong>Technical Data</strong> – Browser type, IP address, device type, and related metadata
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you regarding inquiries, applications, or services</li>
                  <li>Send important updates, scheduling information, and reminders via SMS</li>
                  <li>Fulfill legal and regulatory requirements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                  4. SMS Communications
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  If you provide your phone number, you may receive SMS messages from MetaIntuit related to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Job opportunities and applications</li>
                  <li>Interview scheduling and confirmations</li>
                  <li>Appointment reminders and service updates</li>
                  <li>Customer support and service-related notifications</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Message and data rates may apply. You may opt out of SMS communications at any time by replying
                  "STOP."
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                  5. Sharing of Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We do not sell, rent, or share your personal information—including phone numbers—with third parties or
                  affiliates for marketing or lead generation purposes.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Your information may only be shared with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    Trusted Service Providers who assist us in delivering services and are bound by confidentiality
                    obligations
                  </li>
                  <li>
                    Legal or Regulatory Authorities when required by applicable law or to enforce our legal rights
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">6. Data Security</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We implement reasonable technical, administrative, and organizational measures to protect your
                  information from unauthorized access, loss, misuse, or disclosure.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  While we strive to protect your data, no system is completely secure. We cannot guarantee absolute
                  protection of your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">7. Your Rights</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Request access to the personal data we hold about you</li>
                  <li>Request correction or deletion of your personal data</li>
                  <li>Withdraw consent or opt out of communications at any time</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  To exercise your rights, please contact us at:{" "}
                  <a href="mailto:hr@metaintuit.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                    hr@metaintuit.com
                  </a>
                  .
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
                  8. Changes to This Policy
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  MetaIntuit may update this Privacy Policy from time to time. Updates will be posted on this page with
                  an updated "Effective Date."
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">9. Contact Us</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">MetaIntuit Corp</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Email:{" "}
                    <a href="mailto:hr@metaintuit.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      hr@metaintuit.com
                    </a>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Website:{" "}
                    <a href="https://metaintuit.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      https://metaintuit.com
                    </a>
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold font-heading text-green-800 dark:text-green-200 mb-3 flex items-center">
                    <span className="mr-2">✅</span>
                    Compliance Statement
                  </h3>
                  <p className="text-green-700 dark:text-green-300 leading-relaxed">
                      MetaIntuit does not sell, share, or rent consumer personal information
                      (including phone numbers) to third parties or affiliates for marketing or
                      lead-generation purposes.
                      <strong className="text-green-700 dark:text-green-300 leading-relaxed">No mobile information, text message originator
                      opt-in data, or consent will be shared with any third parties or affiliates
                      for marketing or promotional purposes.
                      </strong>
                    </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
