import { PortfolioData } from '@/context/PortfolioContext';
import './AestheticNoir.css';

export default function AestheticNoirTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-an">
            <div className="tpl-an__grain" />
            <nav className="tpl-an__nav">
                <span className="tpl-an__nav-logo">{(data.name || 'N').charAt(0)}</span>
                <div className="tpl-an__nav-links">
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GH</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LN</a>}
                    {data.email && <a href={`mailto:${data.email}`}>EM</a>}
                </div>
            </nav>

            <header className="tpl-an__hero">
                <div className="tpl-an__hero-inner">
                    <div className="tpl-an__hero-text">
                        <span className="tpl-an__tag">Portfolio</span>
                        <h1>{data.name || 'Your Name'}</h1>
                        {data.title && <p className="tpl-an__title">{data.title}</p>}
                        {data.bio && <p className="tpl-an__bio">{data.bio}</p>}
                        <div className="tpl-an__cta">
                            {data.email && <a href={`mailto:${data.email}`} className="tpl-an__btn">Contact</a>}
                            {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-an__btn tpl-an__btn--ghost">Website</a>}
                        </div>
                    </div>
                    {data.avatarUrl && (
                        <div className="tpl-an__avatar-wrap">
                            <img src={data.avatarUrl} alt={data.name} className="tpl-an__avatar" />
                            <div className="tpl-an__avatar-glow" />
                        </div>
                    )}
                </div>
                {data.location && <p className="tpl-an__loc">📍 {data.location}</p>}
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-an__section">
                    <div className="tpl-an__section-head"><span className="tpl-an__line" /><h2>Expertise</h2><span className="tpl-an__line" /></div>
                    <div className="tpl-an__skills">{data.skills.map((s, i) => <span key={i} className="tpl-an__skill">{s}</span>)}</div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-an__section">
                    <div className="tpl-an__section-head"><span className="tpl-an__line" /><h2>Work</h2><span className="tpl-an__line" /></div>
                    <div className="tpl-an__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className="tpl-an__project">
                                {p.imageUrl && (
                                    <div className="tpl-an__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-an__proj-overlay">{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">View ↗</a>}</div>
                                    </div>
                                )}
                                <div className="tpl-an__proj-body">
                                    <span className="tpl-an__proj-num">{String(i + 1).padStart(2, '0')}</span>
                                    <h3>{p.title}</h3>
                                    {p.description && <p>{p.description}</p>}
                                    {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-an__proj-link">View →</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-an__footer">
                <h2>Get In Touch</h2>
                <div className="tpl-an__footer-links">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-an__btn">✉️ Email</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-an__pill">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-an__pill">LinkedIn</a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-an__pill">Twitter</a>}
                    {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-an__pill">Instagram</a>}
                    {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-an__pill">TikTok</a>}
                    {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-an__pill">Facebook</a>}
                    {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-an__pill">YouTube</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-an__pill">Web</a>}
                    {data.phone && <a href={`tel:${data.phone}`} className="tpl-an__pill">Phone</a>}
                </div>
            </footer>
        </div>
    );
}
