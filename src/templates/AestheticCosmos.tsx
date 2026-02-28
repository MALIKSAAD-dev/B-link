import { PortfolioData } from '@/context/PortfolioContext';
import './AestheticCosmos.css';

export default function AestheticCosmosTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-ac">
            <div className="tpl-ac__stars" />
            <div className="tpl-ac__nebula tpl-ac__nebula--1" />
            <div className="tpl-ac__nebula tpl-ac__nebula--2" />

            <nav className="tpl-ac__nav">
                <span className="tpl-ac__nav-logo">◈</span>
                <div className="tpl-ac__nav-links">
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                    {data.email && <a href={`mailto:${data.email}`}>Email</a>}
                </div>
            </nav>

            <header className="tpl-ac__hero">
                {data.avatarUrl && (
                    <div className="tpl-ac__avatar-wrap">
                        <img src={data.avatarUrl} alt={data.name} className="tpl-ac__avatar" />
                        <div className="tpl-ac__avatar-glow" />
                    </div>
                )}
                <h1>{data.name || 'Your Name'}</h1>
                {data.title && <p className="tpl-ac__title">{data.title}</p>}
                {data.location && <p className="tpl-ac__loc">{data.location}</p>}
                {data.bio && <p className="tpl-ac__bio">{data.bio}</p>}
                <div className="tpl-ac__cta">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-ac__btn">Contact Me</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-ac__btn tpl-ac__btn--ghost">Explore</a>}
                </div>
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-ac__section"><h2>Stack</h2>
                    <div className="tpl-ac__skills">{data.skills.map((s, i) => <span key={i} className="tpl-ac__skill">{s}</span>)}</div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-ac__section"><h2>Projects</h2>
                    <div className="tpl-ac__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className="tpl-ac__project">
                                {p.imageUrl && (
                                    <div className="tpl-ac__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-ac__proj-overlay">{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">Explore ↗</a>}</div>
                                    </div>
                                )}
                                <div className="tpl-ac__proj-body">
                                    <h3>{p.title}</h3>
                                    {p.description && <p>{p.description}</p>}
                                    {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-ac__proj-link">Explore →</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-ac__footer">
                <h2>Reach Out</h2>
                <div className="tpl-ac__footer-links">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-ac__btn">✉️ Email</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-ac__pill">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-ac__pill">LinkedIn</a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-ac__pill">Twitter</a>}
                    {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-ac__pill">Instagram</a>}
                    {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-ac__pill">TikTok</a>}
                    {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-ac__pill">Facebook</a>}
                    {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-ac__pill">YouTube</a>}
                    {data.phone && <a href={`tel:${data.phone}`} className="tpl-ac__pill">Phone</a>}
                </div>
            </footer>
        </div>
    );
}
