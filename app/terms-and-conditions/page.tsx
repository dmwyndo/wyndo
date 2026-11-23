import type { Metadata } from "next";
import Link from "next/link";
import styles from "../privacy-policy/privacy-policy.module.css";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for Wyndo SMS messages, including message frequency, rates, opt-out instructions, and support.",
};

export default function TermsAndConditionsPage() {
  return (
    <main>
      <div className={styles.hero}>
        <div className="wrap">
          <h1 className="display">
            Recurring Message Terms and Conditions Sample
          </h1>
          <p>Effective Date: <time dateTime="2026-11-19">11/19/2026</time></p>
          <a href="/wyndo-terms-and-conditions.pdf" download>
            Download terms and conditions (PDF)
          </a>
        </div>
      </div>

      <article className={styles.policy} aria-label="Terms and Conditions">
        <p>
          Consumers opt in by initiating a text message conversation with Wyndo at{" "}
          <a href="sms:2086765898">208-676-5898</a> regarding customer support or
          service inquiries.
        </p>
        <p>
          By opting in to receive SMS messages from Wyndo, FJ Wright LLC DBA Wyndo
          (“we,” “us,” “our”), you agree to these Terms and Conditions (Terms).
        </p>

        <section aria-labelledby="sms-messaging-service">
          <h2 id="sms-messaging-service">SMS Messaging Service</h2>
          <p>
            By providing my phone number, I consent to receive SMS text messages
            from Wyndo for conversational messages about windows, siding, and
            roofing. Message and Data Rates may apply.
          </p>
        </section>

        <section aria-labelledby="message-frequency">
          <h2 id="message-frequency">Message Frequency</h2>
          <p>
            Message frequency may vary. On average, 1-2 messages per month.
          </p>
          <p>
            Wyndo reserves the right to alter the frequency of messages at any
            time to increase or decrease the total number of messages.
          </p>
          <p>
            Wyndo and carriers are not liable for delays or undelivered messages.
          </p>
        </section>

        <section aria-labelledby="message-and-data-rates">
          <h2 id="message-and-data-rates">Message and Data Rates</h2>
          <p>Message and data rates may apply.</p>
        </section>

        <section aria-labelledby="privacy-policy">
          <h2 id="privacy-policy">Privacy Policy</h2>
          <p>
            Your information will be handled in accordance with our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        </section>

        <section aria-labelledby="cancellation">
          <h2 id="cancellation">Cancellation/Opt-Out Instructions</h2>
          <p>
            You can opt out of receiving SMS messages at any time by replying STOP
            to any message we send you. After you opt out of text messaging, you
            will receive one additional message confirming your request has been
            processed.
          </p>
        </section>

        <section aria-labelledby="support">
          <h2 id="support">Help/Customer Support</h2>
          <p>
            Text the word HELP for support. You may also contact us directly at{" "}
            <a href="tel:2086765898">208-676-5898</a>.
          </p>
        </section>

        <section aria-labelledby="liability">
          <h2 id="liability">Liability</h2>
          <p>
            We are not responsible for any charges, errors, or delays in SMS
            delivery or undelivered messages caused by your carrier or third-party
            service providers.
          </p>
          <p>
            Consent to receive SMS text messages is not a condition of purchase.
          </p>
        </section>
      </article>
    </main>
  );
}
