import { PortfolioData } from '@/context/PortfolioContext';
import './Elegant.css';

export default function ElegantTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-elg">
            {/* Hero */}
            <header className="tpl-elg__hero">
                <div className="tpl-elg__hero-bg" />
                <div className="tpl-elg__hero-inner">
                    {data.avatarUrl && (
                        <div className="tpl-elg__avatar-frame">
                            <img src={data.avatarUrl} alt={data.name} />
                            <div className="tpl-elg__avatar-border" />
                        </div>
                    )}
                    <h1 className="tpl-elg__name">{data.name || 'Your Name'}</h1>
                    {data.title && <p className="tpl-elg__title">{data.title}</p>}
                    <div className="tpl-elg__ornament">
                        <span className="tpl-elg__orn-line" />
                        <span className="tpl-elg__orn-diamond">◆</span>
                        <span className="tpl-elg__orn-line" />
                    </div>
                    {data.location && <p className="tpl-elg__loc">{data.location}</p>}
                </div>
            </header>

            {/* About */}
            {data.bio && (
                <section className="tpl-elg__section">
                    <div className="tpl-elg__section-label">About</div>
                    <blockquote className="tpl-elg__quote">
                        <span className="tpl-elg__quote-mark">&ldquo;</span>
                        {data.bio}
                        <span className="tpl-elg__quote-mark">&rdquo;</span>
                    </blockquote>
                </section>
            )}

            {/* Skills */}
            {data.skills.length > 0 && (
                <section className="tpl-elg__section">
                    <div className="tpl-elg__section-label">Expertise</div>
                    <div className="tpl-elg__skills">
                        {data.skills.map((skill, i) => (
                            <span key={i} className="tpl-elg__skill">{skill}</span>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {data.projects.length > 0 && (
                <section className="tpl-elg__section">
                    <div className="tpl-elg__section-label">Selected Work</div>
                    <div className="tpl-elg__works">
                        {data.projects.map((project, i) => (
                            <div key={i} className="tpl-elg__work">
                                {project.imageUrl && (
                                    <div className="tpl-elg__work-img-wrap">
                                        <img src={project.imageUrl} alt={project.title} />
                                        <div className="tpl-elg__work-img-overlay" />
                                    </div>
                                )}
                                <div className="tpl-elg__work-info">
                                    <span className="tpl-elg__work-num">{String(i + 1).padStart(2, '0')}</span>
                                    <h3>{project.title}</h3>
                                    {project.description && <p>{project.description}</p>}
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-elg__work-link">
                                            View Project
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className="tpl-elg__footer">
                <div className="tpl-elg__ornament">
                    <span className="tpl-elg__orn-line" />
                    <span className="tpl-elg__orn-diamond">◆</span>
                    <span className="tpl-elg__orn-line" />
                </div>
                <h2>Get in Touch</h2>
                <p className="tpl-elg__footer-sub">I&apos;d love to hear from you.</p>
                <div className="tpl-elg__footer-links">
                    {data.email && <a href={`mailto:${data.email}`}>Email</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
                    {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
                    {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>}
                    {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>}
                    {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>}
                    {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer">Website</a>}
                    {data.phone && <a href={`tel:${data.phone}`}>Phone</a>}
                </div>
            </footer>
        </div>
    );
}
