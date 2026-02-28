import { PortfolioData } from '@/context/PortfolioContext';
import './Aesthetic.css';

export default function AestheticTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-aes">
            {/* Background Effects */}
            <div className="tpl-aes__bg">
                <div className="tpl-aes__orb tpl-aes__orb--1" />
                <div className="tpl-aes__orb tpl-aes__orb--2" />
                <div className="tpl-aes__orb tpl-aes__orb--3" />
                <div className="tpl-aes__grid" />
            </div>

            {/* Hero */}
            <header className="tpl-aes__hero">
                {data.avatarUrl && (
                    <div className="tpl-aes__avatar-wrap">
                        <img src={data.avatarUrl} alt={data.name} className="tpl-aes__avatar" />
                        <div className="tpl-aes__avatar-glow" />
                        <div className="tpl-aes__avatar-ring" />
                    </div>
                )}
                <h1 className="tpl-aes__name">{data.name || 'Your Name'}</h1>
                {data.title && <p className="tpl-aes__title">{data.title}</p>}
                {data.location && <p className="tpl-aes__loc">📍 {data.location}</p>}
                <div className="tpl-aes__hero-links">
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-aes__social">
                        <span>GitHub</span>
                    </a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-aes__social">
                        <span>LinkedIn</span>
                    </a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-aes__social">
                        <span>Twitter</span>
                    </a>}
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-aes__social tpl-aes__social--primary">
                        <span>✉️ Contact Me</span>
                    </a>}
                </div>
            </header>

            {/* About */}
            {data.bio && (
                <section className="tpl-aes__section">
                    <div className="tpl-aes__glass">
                        <div className="tpl-aes__glass-border" />
                        <div className="tpl-aes__section-head">
                            <span className="tpl-aes__icon">✨</span>
                            <h2>About Me</h2>
                        </div>
                        <p className="tpl-aes__bio">{data.bio}</p>
                    </div>
                </section>
            )}

            {/* Skills */}
            {data.skills.length > 0 && (
                <section className="tpl-aes__section">
                    <div className="tpl-aes__glass">
                        <div className="tpl-aes__glass-border" />
                        <div className="tpl-aes__section-head">
                            <span className="tpl-aes__icon">🎯</span>
                            <h2>Skills & Tech</h2>
                        </div>
                        <div className="tpl-aes__skills">
                            {data.skills.map((skill, i) => (
                                <div key={i} className="tpl-aes__skill">
                                    <span className="tpl-aes__skill-glow" />
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Projects */}
            {data.projects.length > 0 && (
                <section className="tpl-aes__section">
                    <div className="tpl-aes__section-head tpl-aes__section-head--center">
                        <span className="tpl-aes__icon">🚀</span>
                        <h2>Projects</h2>
                    </div>
                    <div className="tpl-aes__projects">
                        {data.projects.map((project, i) => (
                            <div key={i} className="tpl-aes__project">
                                <div className="tpl-aes__project-glow" />
                                {project.imageUrl && (
                                    <div className="tpl-aes__project-img">
                                        <img src={project.imageUrl} alt={project.title} />
                                    </div>
                                )}
                                <div className="tpl-aes__project-body">
                                    <h3>{project.title}</h3>
                                    {project.description && <p>{project.description}</p>}
                                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Explore ↗</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className="tpl-aes__footer">
                <div className="tpl-aes__glass">
                    <div className="tpl-aes__glass-border" />
                    <div className="tpl-aes__section-head">
                        <span className="tpl-aes__icon">💬</span>
                        <h2>Let&apos;s Connect</h2>
                    </div>
                    <div className="tpl-aes__contact">
                        {data.email && <a href={`mailto:${data.email}`} className="tpl-aes__contact-item">✉️ {data.email}</a>}
                        {data.phone && <a href={`tel:${data.phone}`} className="tpl-aes__contact-item">📞 {data.phone}</a>}
                        {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-aes__contact-item">🌐 Website</a>}
                    </div>
                </div>
            </footer>
        </div>
    );
}
