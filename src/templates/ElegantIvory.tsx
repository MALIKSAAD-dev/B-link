import { PortfolioData } from '@/context/PortfolioContext';
import './ElegantIvory.css';

export default function ElegantIvoryTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-ei">
            <nav className="tpl-ei__nav">
                <span className="tpl-ei__nav-name">{data.name || 'Portfolio'}</span>
                <div className="tpl-ei__nav-links">
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                    {data.email && <a href={`mailto:${data.email}`}>Contact</a>}
                </div>
            </nav>

            <header className="tpl-ei__hero">
                <div className="tpl-ei__hero-row">
                    {data.avatarUrl && (
                        <div className="tpl-ei__avatar-wrap">
                            <img src={data.avatarUrl} alt={data.name} className="tpl-ei__avatar" />
                            <div className="tpl-ei__avatar-dots" />
                        </div>
                    )}
                    <div className="tpl-ei__hero-text">
                        <h1>{data.name || 'Your Name'}</h1>
                        {data.title && <p className="tpl-ei__title">{data.title}</p>}
                        {data.location && <p className="tpl-ei__loc">📍 {data.location}</p>}
                    </div>
                </div>
                {data.bio && <p className="tpl-ei__bio">{data.bio}</p>}
                <div className="tpl-ei__cta">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-ei__btn">Get In Touch</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-ei__btn tpl-ei__btn--ghost">Website</a>}
                </div>
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-ei__section"><h2>Skills</h2>
                    <div className="tpl-ei__skills">{data.skills.map((s, i) => <span key={i}>{s}</span>)}</div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-ei__section"><h2>Work</h2>
                    <div className="tpl-ei__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className="tpl-ei__project">
                                {p.imageUrl && (
                                    <div className="tpl-ei__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-ei__proj-overlay">{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">View ↗</a>}</div>
                                    </div>
                                )}
                                <div className="tpl-ei__proj-body">
                                    <h3>{p.title}</h3>
                                    {p.description && <p>{p.description}</p>}
                                    {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-ei__proj-link">View →</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-ei__footer">
                <h2>Let&apos;s Connect</h2>
                <div className="tpl-ei__footer-links">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-ei__btn">✉️ Email</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-ei__pill">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-ei__pill">LinkedIn</a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-ei__pill">Twitter</a>}
                    {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-ei__pill">Instagram</a>}
                    {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-ei__pill">TikTok</a>}
                    {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-ei__pill">Facebook</a>}
                    {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-ei__pill">YouTube</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-ei__pill">Web</a>}
                    {data.phone && <a href={`tel:${data.phone}`} className="tpl-ei__pill">Phone</a>}
                </div>
            </footer>
        </div>
    );
}
