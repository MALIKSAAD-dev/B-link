import Link from 'next/link';
import './page.css';

export default function Home() {
  return (
    <div className="landing">
      {/* Hero */}
      <section className="hero">
        <div className="hero__glow" />
        <div className="hero__glow hero__glow--2" />
        <div className="container hero__inner">
          <div className="hero__content">
            <div className="badge animate-fade-in-up">
              <span className="badge__dot" />
              Free forever · No coding required
            </div>
            <h1 className="hero__title animate-fade-in-up animate-delay-1">
              Your Portfolio,<br />
              <span className="gradient-text-warm">Made Beautiful.</span>
            </h1>
            <p className="hero__subtitle animate-fade-in-up animate-delay-2">
              Pick from 24 stunning templates, fill in your info, and go live
              in seconds. Responsive. Professional. Effortless.
            </p>
            <div className="hero__actions animate-fade-in-up animate-delay-3">
              <Link href="/create" className="btn btn-hero">
                Start Creating
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
              <Link href="/create" className="btn btn-hero-ghost">
                Browse Templates
              </Link>
            </div>
          </div>
          <div className="hero__visual animate-fade-in-up animate-delay-4">
            <div className="hero__showcase">
              <div className="hero__card hero__card--1">
                <div className="hc__avatar" />
                <div className="hc__lines"><span /><span /><span /></div>
              </div>
              <div className="hero__card hero__card--2">
                <div className="hc__avatar" />
                <div className="hc__lines"><span /><span /></div>
              </div>
              <div className="hero__card hero__card--3">
                <div className="hc__avatar" />
                <div className="hc__lines"><span /><span /><span /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features section">
        <div className="container">
          <p className="section-label">Why B-link</p>
          <h2 className="section-heading">Everything you need,<br /><span className="gradient-text-warm">nothing you don&apos;t.</span></h2>
          <div className="features__grid">
            {[
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>, title: '24 Premium Templates', desc: 'Six categories, four in each. Minimal to funky, elegant to developer — find your vibe.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12" y2="18" /></svg>, title: 'Fully Responsive', desc: 'Looks incredible on phones, tablets, and desktops. No effort needed — it just works.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" /></svg>, title: 'One-Click Publish', desc: 'Your portfolio goes live instantly with a custom URL. Share it anywhere in seconds.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.855z" /></svg>, title: 'Smart Forms', desc: 'Only the fields that matter. Upload photos, add projects, list skills — no clutter.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>, title: 'Live Preview', desc: 'See exactly what your portfolio looks like before going live. Switch templates freely.' },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>, title: 'Free. Always.', desc: 'No hidden fees, no premium tiers, no nonsense. Build and publish completely free.' },
            ].map((feature, i) => (
              <div key={i} className={`feature-card animate-fade-in-up animate-delay-${i % 5 + 1}`}>
                <div className="feature-card__icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="steps section">
        <div className="container">
          <p className="section-label">How it works</p>
          <h2 className="section-heading">Four steps. <span className="gradient-text-warm">That&apos;s it.</span></h2>
          <div className="steps__grid">
            {[
              { num: '01', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>, title: 'Pick a Template', desc: 'Browse 24 premium designs across 6 categories.' },
              { num: '02', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.855z" /></svg>, title: 'Fill Your Info', desc: 'Name, bio, skills, projects — the smart form handles it.' },
              { num: '03', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>, title: 'Preview & Switch', desc: 'See your portfolio live. Try other templates freely.' },
              { num: '04', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" /></svg>, title: 'Publish & Share', desc: 'Go live with a custom link. Share it everywhere.' },
            ].map((step, i) => (
              <div key={i} className={`step-card animate-fade-in-up animate-delay-${i + 1}`}>
                <span className="step-card__num">{step.num}</span>
                <div className="step-card__icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta section">
        <div className="container">
          <div className="cta__card">
            <div className="cta__glow" />
            <p className="section-label">Ready?</p>
            <h2>Build something <span className="gradient-text-warm">you&apos;re proud of.</span></h2>
            <p className="cta__sub">Join thousands who&apos;ve already created their portfolio with B-link.</p>
            <Link href="/create" className="btn btn-hero">
              Create Your Portfolio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
