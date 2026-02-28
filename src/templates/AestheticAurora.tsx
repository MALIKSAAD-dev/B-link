import { PortfolioData } from '@/context/PortfolioContext';
import './AestheticAurora.css';

export default function AestheticAuroraTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-aa">
            <div className="tpl-aa__glow tpl-aa__glow--1" />
            <div className="tpl-aa__glow tpl-aa__glow--2" />
            <div className="tpl-aa__glow tpl-aa__glow--3" />

            <nav className="tpl-aa__nav">
                <span className="tpl-aa__nav-logo">✦</span>
                <div className="tpl-aa__nav-links">
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                    {data.email && <a href={`mailto:${data.email}`}>Email</a>}
                </div>
            </nav>

            <header className="tpl-aa__hero">
                {data.avatarUrl && (
                    <div className="tpl-aa__avatar-wrap">
                        <img src={data.avatarUrl} alt={data.name} className="tpl-aa__avatar" />
                        <div className="tpl-aa__avatar-ring" />
                    </div>
                )}
                <h1>{data.name || 'Your Name'}</h1>
                {data.title && <p className="tpl-aa__title">{data.title}</p>}
                {data.location && <p className="tpl-aa__loc">📍 {data.location}</p>}
                {data.bio && <p className="tpl-aa__bio">{data.bio}</p>}
                <div className="tpl-aa__cta">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-aa__btn">Contact Me</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-aa__btn tpl-aa__btn--ghost">My Website</a>}
                </div>
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-aa__section"><h2>Skills</h2>
                    <div className="tpl-aa__skills">{data.skills.map((s, i) => <span key={i} className="tpl-aa__skill">{s}</span>)}</div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-aa__section"><h2>Projects</h2>
                    <div className="tpl-aa__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className="tpl-aa__project">
                                {p.imageUrl && (
                                    <div className="tpl-aa__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-aa__proj-overlay">{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">View ↗</a>}</div>
                                    </div>
                                )}
                                <div className="tpl-aa__proj-body">
                                    <h3>{p.title}</h3>
                                    {p.description && <p>{p.description}</p>}
                                    {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-aa__proj-link">View →</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-aa__footer">
                <h2>Let&apos;s Connect</h2>
                <div className="tpl-aa__footer-links">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-aa__btn">✉️ Email</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-aa__pill">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-aa__pill">LinkedIn</a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-aa__pill">Twitter</a>}
                    {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-aa__pill">Instagram</a>}
                    {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-aa__pill">TikTok</a>}
                    {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-aa__pill">Facebook</a>}
                    {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-aa__pill">YouTube</a>}
                    {data.phone && <a href={`tel:${data.phone}`} className="tpl-aa__pill">Phone</a>}
                </div>
            </footer>
        </div>
    );
}
