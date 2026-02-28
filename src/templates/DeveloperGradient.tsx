import { PortfolioData } from '@/context/PortfolioContext';
import './DeveloperGradient.css';

export default function DeveloperGradientTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-dg">
            <div className="tpl-dg__mesh" />
            <nav className="tpl-dg__nav">
                <span className="tpl-dg__nav-logo">⬡</span>
                <div className="tpl-dg__nav-links">
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                    {data.email && <a href={`mailto:${data.email}`}>Email</a>}
                </div>
            </nav>

            <header className="tpl-dg__hero">
                {data.avatarUrl && (
                    <div className="tpl-dg__avatar-wrap">
                        <img src={data.avatarUrl} alt={data.name} className="tpl-dg__avatar" />
                        <div className="tpl-dg__avatar-ring" />
                    </div>
                )}
                <h1>{data.name || 'Your Name'}</h1>
                {data.title && <p className="tpl-dg__title">{data.title}</p>}
                {data.location && <p className="tpl-dg__loc">📍 {data.location}</p>}
                {data.bio && <p className="tpl-dg__bio">{data.bio}</p>}
                <div className="tpl-dg__cta">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-dg__btn">Let&apos;s Talk</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-dg__btn tpl-dg__btn--ghost">Website</a>}
                </div>
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-dg__section"><h2>Stack</h2>
                    <div className="tpl-dg__skills">{data.skills.map((s, i) => <span key={i} className="tpl-dg__skill">{s}</span>)}</div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-dg__section"><h2>Projects</h2>
                    <div className="tpl-dg__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className="tpl-dg__project">
                                {p.imageUrl && (
                                    <div className="tpl-dg__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-dg__proj-overlay">{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">View ↗</a>}</div>
                                    </div>
                                )}
                                <div className="tpl-dg__proj-body">
                                    <h3>{p.title}</h3>
                                    {p.description && <p>{p.description}</p>}
                                    {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-dg__proj-link">View →</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-dg__footer">
                <h2>Connect</h2>
                <div className="tpl-dg__footer-links">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-dg__btn">Email</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-dg__pill">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-dg__pill">LinkedIn</a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-dg__pill">Twitter</a>}
                    {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-dg__pill">Instagram</a>}
                    {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-dg__pill">TikTok</a>}
                    {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-dg__pill">Facebook</a>}
                    {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-dg__pill">YouTube</a>}
                    {data.phone && <a href={`tel:${data.phone}`} className="tpl-dg__pill">Phone</a>}
                </div>
            </footer>
        </div>
    );
}
