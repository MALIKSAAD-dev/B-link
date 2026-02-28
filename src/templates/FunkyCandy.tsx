import { PortfolioData } from '@/context/PortfolioContext';
import './FunkyCandy.css';

export default function FunkyCandyTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-fc">
            <div className="tpl-fc__orb tpl-fc__orb--1" />
            <div className="tpl-fc__orb tpl-fc__orb--2" />

            <header className="tpl-fc__hero">
                {data.avatarUrl && (
                    <div className="tpl-fc__avatar-wrap">
                        <img src={data.avatarUrl} alt={data.name} className="tpl-fc__avatar" />
                        <div className="tpl-fc__avatar-ring" />
                    </div>
                )}
                <h1>{data.name || 'Your Name'}</h1>
                {data.title && <p className="tpl-fc__title">{data.title}</p>}
                {data.location && <p className="tpl-fc__loc">📍 {data.location}</p>}
                {data.bio && <p className="tpl-fc__bio">{data.bio}</p>}
                <div className="tpl-fc__cta">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-fc__btn">Say Hi 💜</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-fc__btn tpl-fc__btn--ghost">Website</a>}
                </div>
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-fc__section">
                    <h2>Skills ✨</h2>
                    <div className="tpl-fc__skills">{data.skills.map((s, i) => <span key={i} className="tpl-fc__skill">{s}</span>)}</div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-fc__section">
                    <h2>Projects 🌈</h2>
                    <div className="tpl-fc__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className="tpl-fc__project">
                                {p.imageUrl && (
                                    <div className="tpl-fc__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-fc__proj-overlay">{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">View ↗</a>}</div>
                                    </div>
                                )}
                                <div className="tpl-fc__proj-body">
                                    <h3>{p.title}</h3>
                                    {p.description && <p>{p.description}</p>}
                                    {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-fc__proj-link">View →</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-fc__footer">
                <h2>Connect 💌</h2>
                <div className="tpl-fc__footer-links">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-fc__btn">Email Me</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-fc__pill">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-fc__pill">LinkedIn</a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-fc__pill">Twitter</a>}
                    {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-fc__pill">Instagram</a>}
                    {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-fc__pill">TikTok</a>}
                    {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-fc__pill">Facebook</a>}
                    {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-fc__pill">YouTube</a>}
                    {data.phone && <a href={`tel:${data.phone}`} className="tpl-fc__pill">Phone</a>}
                </div>
            </footer>
        </div>
    );
}
