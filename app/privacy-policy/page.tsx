import type { Metadata } from "next";
import styles from "./privacy-policy.module.css";

export const metadata: Metadata = {
  title: "Messaging Privacy Policy",
  description:
    "How Wyndo collects, uses, and protects information when you opt in to receive SMS messages.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <div className={styles.hero}>
        <div className="wrap">
          <h1 className="display">Messaging Privacy Policy</h1>
          <p>Effective Date: <time dateTime="2026-11-19">11/19/2026</time></p>
          <a href="/wyndo-privacy-policy.pdf" download>
            Download privacy policy (PDF)
          </a>
        </div>
      </div>

      <article className={styles.policy} aria-label="Messaging Privacy Policy">
        <p>
          FJ Wright LLC DBA Wyndo (“we,” “us,” “our”) respects your privacy and is
          committed to protecting your personal information. This Privacy Policy
          explains how Wyndo collects and uses information about you when you
          opt-in to receive SMS messages from us.
        </p>

        <section aria-labelledby="information-we-collect">
          <h2 id="information-we-collect">Information We Collect</h2>
          <p>When you opt-in to receive SMS messages, we collect:</p>
          <ul>
            <li>Your phone number</li>
            <li>Consent to send SMS messages</li>
            <li>Your email address</li>
            <li>Your basic contact information</li>
            <li>Your messaging history</li>
          </ul>
        </section>

        <section aria-labelledby="how-we-collect">
          <h2 id="how-we-collect">How We Collect Your Information</h2>
          <p>
            We may collect your information directly from you, such as when you
            complete a form or contact us or automatically, such as when you
            interact with our website.
          </p>
        </section>

        <section aria-labelledby="how-we-use">
          <h2 id="how-we-use">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Send you the SMS messages you’ve opted in to receive</li>
            <li>
              Provide updates, promotions, or other relevant content based on
              your preferences
            </li>
            <li>Choices and Controls</li>
            <li>To operate our business</li>
          </ul>
          <p>
            You can opt out of receiving SMS messages at any time by replying STOP
            to any message we send you. You can review our Terms for additional
            information about the opt-out process.
          </p>
        </section>

        <section aria-labelledby="disclosure">
          <h2 id="disclosure">To Whom We Disclose Your Information</h2>
          <p>
            We may disclose your information to our affiliated companies; to third
            party service providers, business advisors, or consultants who provide
            services to us; in connection with a merger, acquisition,
            reorganization, restructuring, financing transaction or sale of
            assets; as required by law or administrative order; to assert claims
            or rights or to defend against claims.
          </p>
          <p>
            We do not share your personal information, phone number, or SMS
            consent opt-in data with third parties or affiliates for marketing or
            promotional purposes.
          </p>
        </section>

        <section aria-labelledby="protection">
          <h2 id="protection">Protection of Information</h2>
          <p>
            We take steps to protect your information against unauthorized use or
            disclosure.
          </p>
        </section>

        <section aria-labelledby="updates">
          <h2 id="updates">Updates</h2>
          <p>
            We may periodically update this privacy policy. If we make material
            changes that have a substantive and adverse impact on your privacy,
            we will provide notice on this website prior to the change becoming
            effective. We encourage you to periodically review this page for the
            latest information about our privacy practices.
          </p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact">How to Contact Us</h2>
          <p>
            You can reach us by texting the word HELP for support to{" "}
            <a href="sms:2086765898">208-676-5898</a>. You may also contact us
            directly at <a href="tel:2086765898">208-676-5898</a>. Consumers may
            contact the message sender using the contact method provided on the
            website.
          </p>
        </section>

        <section aria-labelledby="data-disclosure">
          <h2 id="data-disclosure">Data Disclosure Commitment</h2>
          <ul>
            <li>
              We do not sell, share, transfer, or otherwise disclose consumer
              personal data to external organizations.
            </li>
            <li>
              Your data will not be transferred to external organizations, except
              as strictly necessary to provide the service, comply with law, or
              protect rights.
            </li>
            <li>
              Phone numbers and SMS opt-in data are included in this protection.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
