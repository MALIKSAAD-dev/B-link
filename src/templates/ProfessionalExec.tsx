import { PortfolioData } from '@/context/PortfolioContext';
import './ProfessionalExec.css';

export default function ProfessionalExecTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-pe">
            <div className="tpl-pe__accent-line" />
            <nav className="tpl-pe__nav">
                <span className="tpl-pe__nav-logo">{(data.name || 'E').charAt(0)}</span>
                <div className="tpl-pe__nav-links">
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                    {data.email && <a href={`mailto:${data.email}`}>Email</a>}
                </div>
            </nav>

            <header className="tpl-pe__hero">
                {data.avatarUrl && (
                    <div className="tpl-pe__avatar-wrap">
                        <img src={data.avatarUrl} alt={data.name} className="tpl-pe__avatar" />
                    </div>
                )}
                <h1>{data.name || 'Your Name'}</h1>
                {data.title && <p className="tpl-pe__title">{data.title}</p>}
                <div className="tpl-pe__divider"><span /><span /><span /></div>
                {data.location && <p className="tpl-pe__loc">📍 {data.location}</p>}
                {data.bio && <p className="tpl-pe__bio">{data.bio}</p>}
                <div className="tpl-pe__cta">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-pe__btn">Contact Me</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-pe__btn tpl-pe__btn--ghost">Portfolio</a>}
                </div>
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-pe__section">
                    <div className="tpl-pe__section-head"><span className="tpl-pe__line" /><h2>Expertise</h2><span className="tpl-pe__line" /></div>
                    <div className="tpl-pe__skills">{data.skills.map((s, i) => <span key={i} className="tpl-pe__skill">{s}</span>)}</div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-pe__section">
                    <div className="tpl-pe__section-head"><span className="tpl-pe__line" /><h2>Portfolio</h2><span className="tpl-pe__line" /></div>
                    <div className="tpl-pe__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className="tpl-pe__project">
                                {p.imageUrl && (
                                    <div className="tpl-pe__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-pe__proj-overlay">{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">View ↗</a>}</div>
                                    </div>
                                )}
                                <div className="tpl-pe__proj-body">
                                    <h3>{p.title}</h3>
                                    {p.description && <p>{p.description}</p>}
                                    {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-pe__proj-link">View →</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-pe__footer">
                <h2>Let&apos;s Talk</h2>
                <div className="tpl-pe__footer-links">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-pe__btn">Email Me</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-pe__pill">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-pe__pill">LinkedIn</a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-pe__pill">Twitter</a>}
                    {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-pe__pill">Instagram</a>}
                    {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-pe__pill">TikTok</a>}
                    {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-pe__pill">Facebook</a>}
                    {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-pe__pill">YouTube</a>}
                    {data.phone && <a href={`tel:${data.phone}`} className="tpl-pe__pill">Phone</a>}
                </div>
            </footer>
        </div>
    );
}
