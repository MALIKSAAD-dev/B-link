import { PortfolioData } from '@/context/PortfolioContext';
import './DeveloperBlue.css';

export default function DeveloperBlueTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-db">
            <div className="tpl-db__glow" />
            <nav className="tpl-db__nav">
                <span className="tpl-db__nav-logo">~/dev</span>
                <div className="tpl-db__nav-links">
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                    {data.email && <a href={`mailto:${data.email}`}>Email</a>}
                </div>
            </nav>

            <header className="tpl-db__hero">
                {data.avatarUrl && <img src={data.avatarUrl} alt={data.name} className="tpl-db__avatar" />}
                <h1>{data.name || 'Your Name'}</h1>
                {data.title && <p className="tpl-db__title">{data.title}</p>}
                {data.location && <p className="tpl-db__loc">📍 {data.location}</p>}
                {data.bio && <p className="tpl-db__bio">{data.bio}</p>}
                <div className="tpl-db__cta">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-db__btn">Contact</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-db__btn tpl-db__btn--ghost">Website</a>}
                </div>
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-db__section"><h2>// skills</h2>
                    <div className="tpl-db__skills">{data.skills.map((s, i) => <span key={i} className="tpl-db__skill">{s}</span>)}</div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-db__section"><h2>// projects</h2>
                    <div className="tpl-db__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className="tpl-db__project">
                                {p.imageUrl && (
                                    <div className="tpl-db__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-db__proj-overlay">{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">View ↗</a>}</div>
                                    </div>
                                )}
                                <div className="tpl-db__proj-body">
                                    <h3>{p.title}</h3>
                                    {p.description && <p>{p.description}</p>}
                                    {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-db__proj-link">view →</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-db__footer">
                <h2>// contact</h2>
                <div className="tpl-db__footer-links">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-db__btn">Email</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-db__pill">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-db__pill">LinkedIn</a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-db__pill">Twitter</a>}
                    {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-db__pill">Instagram</a>}
                    {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-db__pill">TikTok</a>}
                    {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-db__pill">Facebook</a>}
                    {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-db__pill">YouTube</a>}
                    {data.phone && <a href={`tel:${data.phone}`} className="tpl-db__pill">Phone</a>}
                </div>
            </footer>
        </div>
    );
}
