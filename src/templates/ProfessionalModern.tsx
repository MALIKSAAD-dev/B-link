import { PortfolioData } from '@/context/PortfolioContext';
import './ProfessionalModern.css';

export default function ProfessionalModernTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-pm">
            <nav className="tpl-pm__nav">
                <span className="tpl-pm__nav-name">{data.name || 'Portfolio'}</span>
                <div className="tpl-pm__nav-links">
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                    {data.email && <a href={`mailto:${data.email}`}>Contact</a>}
                </div>
            </nav>

            <header className="tpl-pm__hero">
                <div className="tpl-pm__hero-bg"><div className="tpl-pm__hero-mesh" /></div>
                <div className="tpl-pm__hero-content">
                    <div className="tpl-pm__hero-text">
                        <span className="tpl-pm__tag">Full-Stack Professional</span>
                        <h1>{data.name || 'Your Name'}</h1>
                        {data.title && <p className="tpl-pm__title">{data.title}</p>}
                        {data.bio && <p className="tpl-pm__bio">{data.bio}</p>}
                        <div className="tpl-pm__cta">
                            {data.email && <a href={`mailto:${data.email}`} className="tpl-pm__btn">Get in Touch</a>}
                            {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-pm__btn tpl-pm__btn--ghost">View Resume</a>}
                        </div>
                    </div>
                    {data.avatarUrl && (
                        <div className="tpl-pm__avatar-wrap">
                            <img src={data.avatarUrl} alt={data.name} className="tpl-pm__avatar" />
                            <div className="tpl-pm__avatar-ring" />
                        </div>
                    )}
                </div>
                {data.location && <p className="tpl-pm__loc">📍 {data.location}</p>}
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-pm__section">
                    <h2>Core Skills</h2>
                    <div className="tpl-pm__skills">
                        {data.skills.map((s, i) => (
                            <div key={i} className="tpl-pm__skill-card">
                                <span className="tpl-pm__skill-icon">{s.charAt(0).toUpperCase()}</span>
                                <span>{s}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-pm__section">
                    <h2>Featured Projects</h2>
                    <div className="tpl-pm__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className="tpl-pm__project">
                                {p.imageUrl && (
                                    <div className="tpl-pm__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-pm__proj-overlay">{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">View Project ↗</a>}</div>
                                    </div>
                                )}
                                <div className="tpl-pm__proj-body">
                                    <span className="tpl-pm__proj-num">#{String(i + 1).padStart(2, '0')}</span>
                                    <h3>{p.title}</h3>
                                    {p.description && <p>{p.description}</p>}
                                    {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-pm__proj-link">View →</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-pm__footer">
                <div className="tpl-pm__footer-inner">
                    <h2>Ready to Collaborate?</h2>
                    <p>Let&apos;s build something extraordinary together.</p>
                    <div className="tpl-pm__footer-links">
                        {data.email && <a href={`mailto:${data.email}`} className="tpl-pm__btn">✉️ Send Email</a>}
                        {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-pm__pill">GitHub</a>}
                        {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-pm__pill">LinkedIn</a>}
                        {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-pm__pill">Twitter</a>}
                        {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-pm__pill">Instagram</a>}
                        {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-pm__pill">TikTok</a>}
                        {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-pm__pill">Facebook</a>}
                        {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-pm__pill">YouTube</a>}
                        {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-pm__pill">Web</a>}
                    </div>
                    {data.phone && <p className="tpl-pm__phone">{data.phone}</p>}
                </div>
            </footer>
        </div>
    );
}
