import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Windows",
  description:
    "Commercial window installation, replacement, and maintenance — energy-efficient systems for offices, retail, warehouses, and more. Wyndo.",
};

const offerings = [
  "Storefront and curtain wall window installations",
  "High-performance glazing for energy efficiency and noise reduction",
  "Window replacement or retrofitting to meet updated codes",
  "Maintenance plans to extend lifespan and minimize downtime",
  "Aluminum and vinyl frame systems built for performance and curb appeal",
] as const;

export default function CommercialPage() {
  return (
    <main id="top">
      <section className="page-hero">
        <div className="page-hero-img">
          <Image
            src="/commercial/hero.jpg"
            alt="Contemporary office building facade glazed with large windows in dark frames"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="wrap page-hero-inner">
          <p className="eyebrow page-hero-eyebrow">{site.areas}</p>
          <h1 className="display page-hero-title">Commercial Work</h1>
        </div>
      </section>

      <section className="commercial-content">
        <div className="wrap commercial-grid">
          <Reveal className="commercial-lead">
            <h2>
              Our commercial window services deliver the performance, durability,
              and code compliance your business needs — from small offices to
              large warehouses.
            </h2>
            <p>
              With teams across Idaho, Utah, Texas, and Michigan, Wyndo handles
              every kind of commercial window need for businesses and property
              managers — with the same straightforward pricing and fast, tidy
              installs we bring to every home.
            </p>
          </Reveal>

          <Reveal className="commercial-block">
            <h3>What we offer</h3>
            <ul className="commercial-list">
              {offerings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="commercial-block">
            <h3>Why businesses trust us</h3>
            <p>
              Precision, safety, and minimal disruption to your operations. We
              understand commercial requirements — and we deliver on time and on
              budget, with no high-pressure sales process to sit through.
            </p>
          </Reveal>

          <Reveal className="commercial-cta-wrap">
            <Link className="btn commercial-cta" href="/#contact">
              Get my free commercial quote
              <span className="commercial-cta-icon" aria-hidden>
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <path
                    d="M8 5l8 7-8 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
            <p className="commercial-cta-note">
              Or call us directly at{" "}
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
