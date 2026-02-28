import { PortfolioData } from '@/context/PortfolioContext';
import './Professional.css';

export default function ProfessionalTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-pro">
            <aside className="tpl-pro__sidebar">
                <div className="tpl-pro__sidebar-top">
                    {data.avatarUrl && <img src={data.avatarUrl} alt={data.name} className="tpl-pro__avatar" />}
                    <h1 className="tpl-pro__name">{data.name || 'Your Name'}</h1>
                    {data.title && <p className="tpl-pro__jobtitle">{data.title}</p>}
                    {data.location && <p className="tpl-pro__loc">📍 {data.location}</p>}
                </div>

                {data.skills.length > 0 && (
                    <div className="tpl-pro__sb-section">
                        <h3>Expertise</h3>
                        <div className="tpl-pro__skill-grid">
                            {data.skills.map((skill, i) => (
                                <div key={i} className="tpl-pro__skill">
                                    <div className="tpl-pro__skill-ring">
                                        <svg width="44" height="44" viewBox="0 0 44 44">
                                            <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                                            <circle cx="22" cy="22" r="18" fill="none" stroke="url(#grad)" strokeWidth="3" strokeDasharray={`${70 + Math.random() * 43} 113`} strokeLinecap="round" transform="rotate(-90 22 22)" />
                                            <defs><linearGradient id="grad"><stop offset="0%" stopColor="#60a5fa" /><stop offset="100%" stopColor="#a78bfa" /></linearGradient></defs>
                                        </svg>
                                    </div>
                                    <span className="tpl-pro__skill-name">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="tpl-pro__sb-section">
                    <h3>Contact</h3>
                    <div className="tpl-pro__contact-list">
                        {data.email && <a href={`mailto:${data.email}`} className="tpl-pro__contact-row">✉️ <span>{data.email}</span></a>}
                        {data.phone && <a href={`tel:${data.phone}`} className="tpl-pro__contact-row">📞 <span>{data.phone}</span></a>}
                        {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-pro__contact-row">🌐 <span>Website</span></a>}
                    </div>
                </div>

                <div className="tpl-pro__sb-section">
                    <h3>Profiles</h3>
                    <div className="tpl-pro__profiles">
                        {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                        {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                        {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
                        {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
                        {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>}
                        {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>}
                        {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>}
                    </div>
                </div>
            </aside>

            <main className="tpl-pro__main">
                {data.bio && (
                    <section className="tpl-pro__section">
                        <div className="tpl-pro__section-head">
                            <div className="tpl-pro__accent-bar" />
                            <h2>Profile Summary</h2>
                        </div>
                        <p className="tpl-pro__bio">{data.bio}</p>
                    </section>
                )}

                {data.projects.length > 0 && (
                    <section className="tpl-pro__section">
                        <div className="tpl-pro__section-head">
                            <div className="tpl-pro__accent-bar" />
                            <h2>Key Projects</h2>
                        </div>
                        <div className="tpl-pro__timeline">
                            {data.projects.map((project, i) => (
                                <div key={i} className="tpl-pro__tl-item">
                                    <div className="tpl-pro__tl-marker">
                                        <div className="tpl-pro__tl-dot" />
                                        {i < data.projects.length - 1 && <div className="tpl-pro__tl-line" />}
                                    </div>
                                    <div className="tpl-pro__tl-card">
                                        {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="tpl-pro__tl-img" />}
                                        <div className="tpl-pro__tl-body">
                                            <h3>{project.title}</h3>
                                            {project.description && <p>{project.description}</p>}
                                            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Project →</a>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
