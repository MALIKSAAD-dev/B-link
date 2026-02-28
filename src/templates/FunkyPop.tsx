import { PortfolioData } from '@/context/PortfolioContext';
import './FunkyPop.css';

export default function FunkyPopTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-fp">
            <div className="tpl-fp__blob tpl-fp__blob--1" />
            <div className="tpl-fp__blob tpl-fp__blob--2" />
            <div className="tpl-fp__blob tpl-fp__blob--3" />

            <header className="tpl-fp__hero">
                {data.avatarUrl && (
                    <div className="tpl-fp__avatar-wrap">
                        <img src={data.avatarUrl} alt={data.name} className="tpl-fp__avatar" />
                    </div>
                )}
                <h1>{data.name || 'Your Name'}</h1>
                {data.title && <p className="tpl-fp__title">{data.title}</p>}
                {data.location && <p className="tpl-fp__loc">📍 {data.location}</p>}
                {data.bio && <p className="tpl-fp__bio">{data.bio}</p>}
                <div className="tpl-fp__cta">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-fp__btn tpl-fp__btn--red">Say Hello!</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-fp__btn tpl-fp__btn--blue">Website</a>}
                </div>
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-fp__section">
                    <h2>What I Do 🎯</h2>
                    <div className="tpl-fp__skills">{data.skills.map((s, i) => <span key={i} className={`tpl-fp__skill tpl-fp__skill--${(i % 4) + 1}`}>{s}</span>)}</div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-fp__section">
                    <h2>My Work 🚀</h2>
                    <div className="tpl-fp__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className={`tpl-fp__project tpl-fp__project--${(i % 4) + 1}`}>
                                {p.imageUrl && (
                                    <div className="tpl-fp__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-fp__proj-overlay">{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">VIEW ↗</a>}</div>
                                    </div>
                                )}
                                <div className="tpl-fp__proj-body">
                                    <h3>{p.title}</h3>
                                    {p.description && <p>{p.description}</p>}
                                    {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-fp__proj-link">View →</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-fp__footer">
                <h2>Let&apos;s Connect! ✌️</h2>
                <div className="tpl-fp__footer-links">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-fp__btn tpl-fp__btn--red">Email</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-fp__pill tpl-fp__pill--1">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-fp__pill tpl-fp__pill--2">LinkedIn</a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-fp__pill tpl-fp__pill--3">Twitter</a>}
                    {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-fp__pill tpl-fp__pill--3">Instagram</a>}
                    {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-fp__pill tpl-fp__pill--3">TikTok</a>}
                    {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-fp__pill tpl-fp__pill--3">Facebook</a>}
                    {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-fp__pill tpl-fp__pill--3">YouTube</a>}
                    {data.phone && <a href={`tel:${data.phone}`} className="tpl-fp__pill tpl-fp__pill--4">Phone</a>}
                </div>
            </footer>
        </div>
    );
}
