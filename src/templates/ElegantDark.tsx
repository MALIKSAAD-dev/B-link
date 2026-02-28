import { PortfolioData } from '@/context/PortfolioContext';
import './ElegantDark.css';

export default function ElegantDarkTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-ed">
            <div className="tpl-ed__glow tpl-ed__glow--1" />
            <div className="tpl-ed__glow tpl-ed__glow--2" />

            <nav className="tpl-ed__nav">
                <span className="tpl-ed__nav-logo">◆</span>
                <div className="tpl-ed__nav-links">
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                    {data.email && <a href={`mailto:${data.email}`}>Email</a>}
                </div>
            </nav>

            <header className="tpl-ed__hero">
                {data.avatarUrl && (
                    <div className="tpl-ed__avatar-wrap">
                        <img src={data.avatarUrl} alt={data.name} className="tpl-ed__avatar" />
                        <div className="tpl-ed__avatar-ring" />
                    </div>
                )}
                <h1>{data.name || 'Your Name'}</h1>
                {data.title && <p className="tpl-ed__title">{data.title}</p>}
                <div className="tpl-ed__divider"><span>◆</span></div>
                {data.location && <p className="tpl-ed__loc">{data.location}</p>}
                {data.bio && <p className="tpl-ed__bio">{data.bio}</p>}
                <div className="tpl-ed__cta">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-ed__btn">Get In Touch</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-ed__btn tpl-ed__btn--ghost">Explore</a>}
                </div>
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-ed__section">
                    <div className="tpl-ed__section-head"><span className="tpl-ed__line" /><h2>Mastery</h2><span className="tpl-ed__line" /></div>
                    <div className="tpl-ed__skills">{data.skills.map((s, i) => <span key={i}>{s}</span>)}</div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-ed__section">
                    <div className="tpl-ed__section-head"><span className="tpl-ed__line" /><h2>Showcase</h2><span className="tpl-ed__line" /></div>
                    <div className="tpl-ed__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className="tpl-ed__project">
                                {p.imageUrl && (
                                    <div className="tpl-ed__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-ed__proj-overlay">{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">View ↗</a>}</div>
                                    </div>
                                )}
                                <div className="tpl-ed__proj-body">
                                    <h3>{p.title}</h3>
                                    {p.description && <p>{p.description}</p>}
                                    {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-ed__proj-link">View →</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-ed__footer">
                <h2>Connect</h2>
                <div className="tpl-ed__footer-links">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-ed__btn">✉️ Email</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-ed__pill">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-ed__pill">LinkedIn</a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-ed__pill">Twitter</a>}
                    {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-ed__pill">Instagram</a>}
                    {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-ed__pill">TikTok</a>}
                    {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-ed__pill">Facebook</a>}
                    {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-ed__pill">YouTube</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-ed__pill">Web</a>}
                    {data.phone && <a href={`tel:${data.phone}`} className="tpl-ed__pill">Phone</a>}
                </div>
            </footer>
        </div>
    );
}
