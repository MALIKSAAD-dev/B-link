import { PortfolioData } from '@/context/PortfolioContext';
import './Minimal.css';

export default function MinimalTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-min">
            {/* Nav */}
            <nav className="tpl-min__nav">
                <span className="tpl-min__nav-name">{data.name || 'Portfolio'}</span>
                <div className="tpl-min__nav-links">
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                    {data.email && <a href={`mailto:${data.email}`}>Email</a>}
                </div>
            </nav>

            {/* Hero */}
            <header className="tpl-min__hero">
                <div className="tpl-min__hero-content">
                    <div className="tpl-min__hero-text">
                        <p className="tpl-min__hello">Hello, I&apos;m</p>
                        <h1 className="tpl-min__name">{data.name || 'Your Name'}</h1>
                        {data.title && <p className="tpl-min__title">{data.title}</p>}
                        {data.bio && <p className="tpl-min__bio">{data.bio}</p>}
                        <div className="tpl-min__hero-cta">
                            {data.email && <a href={`mailto:${data.email}`} className="tpl-min__btn tpl-min__btn--primary">Get in Touch</a>}
                            {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-min__btn tpl-min__btn--outline">My Website</a>}
                        </div>
                    </div>
                    {data.avatarUrl && (
                        <div className="tpl-min__hero-avatar">
                            <img src={data.avatarUrl} alt={data.name} />
                            <div className="tpl-min__avatar-ring" />
                        </div>
                    )}
                </div>
                {data.location && <p className="tpl-min__location"><span>📍</span> {data.location}</p>}
            </header>

            {/* Skills */}
            {data.skills.length > 0 && (
                <section className="tpl-min__section">
                    <div className="tpl-min__section-label">
                        <span className="tpl-min__label-line" />
                        <span>Skills & Tools</span>
                        <span className="tpl-min__label-line" />
                    </div>
                    <div className="tpl-min__skills">
                        {data.skills.map((skill, i) => (
                            <div key={i} className="tpl-min__skill">
                                <span className="tpl-min__skill-dot" />
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {data.projects.length > 0 && (
                <section className="tpl-min__section">
                    <div className="tpl-min__section-label">
                        <span className="tpl-min__label-line" />
                        <span>Selected Projects</span>
                        <span className="tpl-min__label-line" />
                    </div>
                    <div className="tpl-min__projects">
                        {data.projects.map((project, i) => (
                            <div key={i} className="tpl-min__project">
                                {project.imageUrl && (
                                    <div className="tpl-min__project-img-wrap">
                                        <img src={project.imageUrl} alt={project.title} />
                                        <div className="tpl-min__project-overlay">
                                            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Project ↗</a>}
                                        </div>
                                    </div>
                                )}
                                <div className="tpl-min__project-info">
                                    <span className="tpl-min__project-num">{String(i + 1).padStart(2, '0')}</span>
                                    <h3>{project.title}</h3>
                                    {project.description && <p>{project.description}</p>}
                                    {!project.imageUrl && project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-min__project-link">View Project →</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Contact */}
            <footer className="tpl-min__footer">
                <div className="tpl-min__footer-inner">
                    <h2>Let&apos;s Work Together</h2>
                    <p>I&apos;m always open to new opportunities and collaborations.</p>
                    <div className="tpl-min__footer-links">
                        {data.email && <a href={`mailto:${data.email}`} className="tpl-min__btn tpl-min__btn--primary">✉️ Email Me</a>}
                        {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-min__contact-pill">GitHub</a>}
                        {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-min__contact-pill">LinkedIn</a>}
                        {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-min__contact-pill">Twitter</a>}
                        {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-min__contact-pill">Instagram</a>}
                        {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-min__contact-pill">TikTok</a>}
                        {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-min__contact-pill">Facebook</a>}
                        {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-min__contact-pill">YouTube</a>}
                        {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-min__contact-pill">Website</a>}
                    </div>
                    {data.phone && <p className="tpl-min__phone">{data.phone}</p>}
                </div>
            </footer>
        </div>
    );
}
