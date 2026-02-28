import { PortfolioData } from '@/context/PortfolioContext';
import './MinimalZen.css';

export default function MinimalZenTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-mz">
            <div className="tpl-mz__ink tpl-mz__ink--1" />
            <div className="tpl-mz__ink tpl-mz__ink--2" />

            <header className="tpl-mz__hero">
                {data.avatarUrl && (
                    <div className="tpl-mz__avatar-wrap">
                        <img src={data.avatarUrl} alt={data.name} className="tpl-mz__avatar" />
                    </div>
                )}
                <h1>{data.name || 'Your Name'}</h1>
                {data.title && <p className="tpl-mz__title">{data.title}</p>}
                {data.location && <p className="tpl-mz__loc">{data.location}</p>}
                <div className="tpl-mz__orn">✦</div>
                {data.bio && <p className="tpl-mz__bio">{data.bio}</p>}
                <div className="tpl-mz__hero-cta">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-mz__btn">Get In Touch</a>}
                </div>
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-mz__section">
                    <div className="tpl-mz__orn">✦</div>
                    <div className="tpl-mz__skills">{data.skills.map((s, i) => <span key={i}>{s}</span>)}</div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-mz__section">
                    <div className="tpl-mz__orn">✦</div>
                    <div className="tpl-mz__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className="tpl-mz__project">
                                {p.imageUrl && (
                                    <div className="tpl-mz__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-mz__proj-overlay">
                                            {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">View ↗</a>}
                                        </div>
                                    </div>
                                )}
                                <h3>{p.title}</h3>
                                {p.description && <p>{p.description}</p>}
                                {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-mz__proj-link">View →</a>}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-mz__footer">
                <div className="tpl-mz__orn">✦</div>
                <h2>Let&apos;s Create Together</h2>
                <div className="tpl-mz__contact">
                    {data.email && <a href={`mailto:${data.email}`}>Email</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
                    {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
                    {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>}
                    {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>}
                    {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer">Website</a>}
                </div>
                {data.phone && <p className="tpl-mz__phone">{data.phone}</p>}
            </footer>
        </div>
    );
}
