import { PortfolioData } from '@/context/PortfolioContext';
import './MinimalMono.css';

export default function MinimalMonoTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-mm">
            <nav className="tpl-mm__nav">
                <span className="tpl-mm__nav-logo">{(data.name || 'P').charAt(0)}</span>
                <div className="tpl-mm__nav-links">
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                    {data.email && <a href={`mailto:${data.email}`}>Email</a>}
                </div>
            </nav>

            <header className="tpl-mm__hero">
                <div className="tpl-mm__hero-inner">
                    {data.avatarUrl && (
                        <div className="tpl-mm__avatar-wrap">
                            <img src={data.avatarUrl} alt={data.name} className="tpl-mm__avatar" />
                            <div className="tpl-mm__avatar-shadow" />
                        </div>
                    )}
                    <p className="tpl-mm__pre">Portfolio</p>
                    <h1 className="tpl-mm__name">{data.name || 'Your Name'}</h1>
                    {data.title && <p className="tpl-mm__title">{data.title}</p>}
                    {data.location && <p className="tpl-mm__loc">— {data.location} —</p>}
                    <div className="tpl-mm__divider"><span /><span /><span /></div>
                    {data.bio && <p className="tpl-mm__bio">{data.bio}</p>}
                    <div className="tpl-mm__cta">
                        {data.email && <a href={`mailto:${data.email}`} className="tpl-mm__btn tpl-mm__btn--fill">Contact Me</a>}
                        {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-mm__btn tpl-mm__btn--border">My Website</a>}
                    </div>
                </div>
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-mm__section">
                    <div className="tpl-mm__section-head"><span className="tpl-mm__line" /><h2>Skills & Tools</h2><span className="tpl-mm__line" /></div>
                    <div className="tpl-mm__skills">{data.skills.map((s, i) => <span key={i} className="tpl-mm__skill">{s}</span>)}</div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-mm__section">
                    <div className="tpl-mm__section-head"><span className="tpl-mm__line" /><h2>Selected Work</h2><span className="tpl-mm__line" /></div>
                    <div className="tpl-mm__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className="tpl-mm__project">
                                {p.imageUrl && (
                                    <div className="tpl-mm__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-mm__proj-overlay">
                                            {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">View Project ↗</a>}
                                        </div>
                                    </div>
                                )}
                                <div className="tpl-mm__proj-info">
                                    <span className="tpl-mm__proj-num">{String(i + 1).padStart(2, '0')}</span>
                                    <h3>{p.title}</h3>
                                    {p.description && <p>{p.description}</p>}
                                    {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-mm__proj-link">View →</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-mm__footer">
                <div className="tpl-mm__footer-inner">
                    <h2>Let&apos;s Connect</h2>
                    <p>Open to collaborations and new opportunities.</p>
                    <div className="tpl-mm__footer-links">
                        {data.email && <a href={`mailto:${data.email}`} className="tpl-mm__btn tpl-mm__btn--fill">✉️ Email Me</a>}
                        {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-mm__pill">GitHub</a>}
                        {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-mm__pill">LinkedIn</a>}
                        {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-mm__pill">Twitter</a>}
                        {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-mm__pill">Instagram</a>}
                        {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-mm__pill">TikTok</a>}
                        {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-mm__pill">Facebook</a>}
                        {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-mm__pill">YouTube</a>}
                        {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-mm__pill">Website</a>}
                    </div>
                    {data.phone && <p className="tpl-mm__phone">{data.phone}</p>}
                </div>
            </footer>
        </div>
    );
}
