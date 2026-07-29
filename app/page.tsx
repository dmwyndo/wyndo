import Image from "next/image";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { TrustSection } from "@/components/TrustSection";
import { site } from "@/lib/site";

const whyItems = [
  {
    title: "No high-pressure pitch",
    body: "Skip the three-hour sales presentation. We answer your questions in under an hour and leave you with a clear, honest quote.",
  },
  {
    title: "We cut costs, not corners",
    body: "You aren’t paying for showroom overhead — just premium windows and the people who install them properly.",
  },
  {
    title: "Measured and made to fit",
    body: "Every window is carefully measured and custom built for your opening, so it seals tight and looks right the first time.",
  },
  {
    title: "Backed for the long run",
    body: "Manufacturer-backed warranties on our standard window options, plus warranty-backed workmanship from our own crews.",
  },
] as const;

const services = [
  {
    key: "res",
    tag: "Residential",
    title: "Residential projects",
    body: "Custom-made replacement windows for your home — better insulation, quieter rooms, and instant curb appeal. Most jobs are finished in a single day.",
    image: "/photos/residential.jpg",
    alt: "Craftsman-style home with new black-framed replacement windows",
  },
  {
    key: "com",
    tag: "Commercial",
    title: "Commercial work",
    body: "Storefronts, offices, and multi-unit properties. Energy-efficient glazing and frame systems, installed with minimal disruption to your operations.",
    image: "/photos/commercial.jpg",
    alt: "Commercial storefront with floor-to-ceiling glazing in slim dark frames",
  },
  {
    key: "repairs",
    tag: "Repairs & maintenance",
    title: "Repairs & maintenance",
    body: "Failed seals, foggy glass, broken panes, or windows that stick. We diagnose the problem fast and fix it right — saving you stress, time, and money.",
    image: "/photos/repairs.jpg",
    alt: "Technician applying a fresh weather seal along a window frame",
  },
] as const;

const steps = [
  {
    n: "01",
    title: "Consult",
    body: "Skip the three-hour, high-pressure pitch. We answer your questions and price the job in under an hour.",
  },
  {
    n: "02",
    title: "Measure & make",
    body: "Premium windows, carefully measured and custom made to fit your openings perfectly.",
  },
  {
    n: "03",
    title: "Install",
    body: "Our expert installers do the job quickly and correctly — typically in a single day.",
  },
  {
    n: "04",
    title: "Enjoy",
    body: "Say goodbye to drafty rooms and swinging temperatures, and hello to year-round comfort.",
  },
] as const;

export default function HomePage() {
  return (
    <main id="top">
      <section className="hero">
        <div
          className="hero-img"
          role="img"
          aria-label="Wyndo installer fitting a new replacement window on a home"
        />
        <p className="hero-brandline">
          Trusted windows · 60+ years strong
        </p>
        <div className="wrap hero-inner">
          <div className="hero-top">
            <p className="eyebrow">{site.areas}</p>
            <h1 className="display">
              <span className="hero-title-line">Windows</span>{" "}
              <br className="hero-title-break" aria-hidden />
              <span className="hero-title-line">Reimagined,</span>
              <br aria-hidden />
              <span className="hero-title-phrase">
                Comfort Restored<span className="dot">.</span>
              </span>
            </h1>
          </div>
          <div className="hero-bottom">
            <p>
              We fixed the window buying process. We cut costs, not corners — so
              you get premium, energy-efficient windows, measured to fit and
              installed fast, without the hassle.
            </p>
            <aside className="hero-trust" aria-label="Our promise">
              <p>{site.trustCopy}</p>
            </aside>
            <div className="hero-ctas">
              <Link className="btn on-dark solid" href="#contact">
                Get my free quote
              </Link>
              <a className="btn on-dark ghost" href={site.phoneHref}>
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="wrap intro-grid">
          <Reveal className="stat">
            <div className="num">
              60<span>+</span>
            </div>
            <div className="label">Years of local trust</div>
          </Reveal>
          <Reveal className="intro-copy">
            <h2>Need new windows without the hassle?</h2>
            <p>
              Replacing your windows should be easy, affordable, and convenient.
              That&apos;s why we exist. Not only will we cut costs, we&apos;ll
              reduce your energy bill, keep the process stress-free, and make
              drafty rooms and inconsistent temperatures a thing of the past.
            </p>
            <p>
              We install, replace, and repair residential and commercial windows
              across Idaho, Utah, Texas, and Michigan — with integrity, quality,
              and comfort that lasts.
            </p>
          </Reveal>
        </div>
      </section>

      <TrustSection />

      <section className="why">
        <div className="wrap">
          <Reveal className="sect-head">
            <p className="eyebrow">Why Wyndo</p>
            <h2 className="display">
              Reliable solutions,
              <br />
              without the runaround.
            </h2>
          </Reveal>
          <div className="why-list">
            {whyItems.map((item) => (
              <Reveal key={item.title} className="why-item">
                <LogoMark />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="wrap">
          <Reveal className="sect-head">
            <p className="eyebrow">Our window services</p>
            <h2 className="display">
              High performance.
              <br />
              High style.
            </h2>
          </Reveal>
          <div className="svc-grid">
            {services.map((svc) => (
              <Reveal key={svc.key} as="article" className={`svc ${svc.key}`}>
                <div className="ph">
                  <Image
                    src={svc.image}
                    alt={svc.alt}
                    fill
                    sizes={
                      svc.key === "repairs"
                        ? "100vw"
                        : "(max-width: 820px) 100vw, 50vw"
                    }
                  />
                </div>
                <div className="svc-body">
                  <p className="tag">{svc.tag}</p>
                  <h3>{svc.title}</h3>
                  <p>{svc.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="svc-ctas">
            <Link className="btn on-dark solid" href="#contact">
              Get my free quote
            </Link>
            <Link className="btn on-dark ghost" href="/commercial">
              See commercial services
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="process" id="process">
        <div className="wrap">
          <Reveal className="sect-head">
            <p className="eyebrow">Process</p>
            <h2 className="display">A simple, stress-free experience</h2>
          </Reveal>
          <Reveal className="steps">
            {steps.map((step) => (
              <div className="step" key={step.n}>
                <span className="n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <GoogleReviewsSection />

      <section className="closing" id="contact">
        <div className="bg">
          <Image
            src="/photos/closing.jpg"
            alt=""
            fill
            sizes="100vw"
            aria-hidden
          />
        </div>
        <Reveal className="wrap">
          <LogoMark />
          <h2 className="display">Ready for a total window makeover?</h2>
          <p>
            Let&apos;s talk through your project — we&apos;d be happy to help. No
            pressure, no obligation.
          </p>
          <div className="hero-ctas">
            <a className="btn on-dark solid" href={site.phoneHref}>
              Get my free quote
            </a>
            <a className="btn on-dark ghost" href={site.phoneHref}>
              {site.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
