import { PortfolioData } from '@/context/PortfolioContext';
import './ElegantRose.css';

export default function ElegantRoseTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-er">
            <div className="tpl-er__petal tpl-er__petal--1" />
            <div className="tpl-er__petal tpl-er__petal--2" />

            <header className="tpl-er__hero">
                {data.avatarUrl && (
                    <div className="tpl-er__avatar-wrap">
                        <img src={data.avatarUrl} alt={data.name} className="tpl-er__avatar" />
                        <div className="tpl-er__avatar-ring" />
                    </div>
                )}
                <h1>{data.name || 'Your Name'}</h1>
                {data.title && <p className="tpl-er__title">{data.title}</p>}
                <div className="tpl-er__orn">✿</div>
                {data.location && <p className="tpl-er__loc">{data.location}</p>}
                {data.bio && <p className="tpl-er__bio">{data.bio}</p>}
                <div className="tpl-er__cta">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-er__btn">Get In Touch</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-er__btn tpl-er__btn--ghost">Portfolio</a>}
                </div>
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-er__section">
                    <div className="tpl-er__orn">✿</div>
                    <h2>Expertise</h2>
                    <div className="tpl-er__skills">{data.skills.map((s, i) => <span key={i}>{s}</span>)}</div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-er__section">
                    <div className="tpl-er__orn">✿</div>
                    <h2>Selected Work</h2>
                    <div className="tpl-er__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className="tpl-er__project">
                                {p.imageUrl && (
                                    <div className="tpl-er__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-er__proj-overlay">{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">View ↗</a>}</div>
                                    </div>
                                )}
                                <div className="tpl-er__proj-body">
                                    <h3>{p.title}</h3>
                                    {p.description && <p>{p.description}</p>}
                                    {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-er__proj-link">View →</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-er__footer">
                <div className="tpl-er__orn">✿</div>
                <h2>Connect</h2>
                <div className="tpl-er__contact">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-er__btn">✉️ Email Me</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-er__pill">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-er__pill">LinkedIn</a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-er__pill">Twitter</a>}
                    {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-er__pill">Instagram</a>}
                    {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-er__pill">TikTok</a>}
                    {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-er__pill">Facebook</a>}
                    {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-er__pill">YouTube</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-er__pill">Website</a>}
                    {data.phone && <a href={`tel:${data.phone}`} className="tpl-er__pill">Phone</a>}
                </div>
            </footer>
        </div>
    );
}
