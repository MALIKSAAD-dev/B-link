import { PortfolioData } from '@/context/PortfolioContext';
import './Developer.css';

export default function DeveloperTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-dev">
            {/* Hero */}
            <header className="tpl-dev__hero">
                <div className="tpl-dev__hero-content">
                    <div className="tpl-dev__hero-text">
                        <span className="tpl-dev__badge">Developer Portfolio</span>
                        <h1 className="tpl-dev__name">{data.name || 'Your Name'}</h1>
                        {data.title && <p className="tpl-dev__title">{data.title}</p>}
                        {data.bio && <p className="tpl-dev__bio">{data.bio}</p>}
                        <div className="tpl-dev__hero-actions">
                            {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-dev__btn tpl-dev__btn--primary">GitHub Profile</a>}
                            {data.email && <a href={`mailto:${data.email}`} className="tpl-dev__btn tpl-dev__btn--secondary">Contact Me</a>}
                        </div>
                    </div>
                    {data.avatarUrl && (
                        <div className="tpl-dev__hero-img">
                            <img src={data.avatarUrl} alt={data.name} />
                            <div className="tpl-dev__hero-img-bg" />
                        </div>
                    )}
                </div>
                {data.location && <p className="tpl-dev__loc">📍 {data.location}</p>}
            </header>

            {/* Tech Stack */}
            {data.skills.length > 0 && (
                <section className="tpl-dev__section">
                    <h2 className="tpl-dev__heading">Tech Stack</h2>
                    <div className="tpl-dev__tech-grid">
                        {data.skills.map((skill, i) => (
                            <div key={i} className="tpl-dev__tech-card">
                                <div className="tpl-dev__tech-icon">{skill.charAt(0).toUpperCase()}</div>
                                <span className="tpl-dev__tech-name">{skill}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {data.projects.length > 0 && (
                <section className="tpl-dev__section">
                    <h2 className="tpl-dev__heading">Projects</h2>
                    <div className="tpl-dev__project-grid">
                        {data.projects.map((project, i) => (
                            <div key={i} className="tpl-dev__project">
                                {project.imageUrl && (
                                    <div className="tpl-dev__project-img">
                                        <img src={project.imageUrl} alt={project.title} />
                                    </div>
                                )}
                                <div className="tpl-dev__project-body">
                                    <h3>{project.title}</h3>
                                    {project.description && <p>{project.description}</p>}
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-dev__project-link">
                                            Live Demo →
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Contact/Footer */}
            <footer className="tpl-dev__footer">
                <div className="tpl-dev__footer-inner">
                    <h2>Let&apos;s Build Something</h2>
                    <p>Open for collaborations and freelance projects.</p>
                    <div className="tpl-dev__footer-links">
                        {data.email && <a href={`mailto:${data.email}`} className="tpl-dev__btn tpl-dev__btn--primary">✉️ Email</a>}
                        {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-dev__footer-pill">GitHub</a>}
                        {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-dev__footer-pill">LinkedIn</a>}
                        {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-dev__footer-pill">Twitter</a>}
                        {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-dev__footer-pill">Instagram</a>}
                        {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-dev__footer-pill">TikTok</a>}
                        {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-dev__footer-pill">Facebook</a>}
                        {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-dev__footer-pill">YouTube</a>}
                        {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-dev__footer-pill">Website</a>}
                        {data.phone && <a href={`tel:${data.phone}`} className="tpl-dev__footer-pill">📞 Phone</a>}
                    </div>
                </div>
            </footer>
        </div>
    );
}
