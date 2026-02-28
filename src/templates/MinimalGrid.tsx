import { PortfolioData } from '@/context/PortfolioContext';
import './MinimalGrid.css';

export default function MinimalGridTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-mg">
            <div className="tpl-mg__grid">
                {/* Hero Card */}
                <div className="tpl-mg__card tpl-mg__card--hero">
                    <div className="tpl-mg__hero-bg" />
                    {data.avatarUrl && (
                        <div className="tpl-mg__avatar-wrap">
                            <img src={data.avatarUrl} alt={data.name} className="tpl-mg__avatar" />
                            <div className="tpl-mg__avatar-ring" />
                        </div>
                    )}
                    <h1>{data.name || 'Your Name'}</h1>
                    {data.title && <p className="tpl-mg__title">{data.title}</p>}
                    {data.location && <p className="tpl-mg__loc">📍 {data.location}</p>}
                    <div className="tpl-mg__hero-cta">
                        {data.email && <a href={`mailto:${data.email}`} className="tpl-mg__btn">Contact</a>}
                        {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-mg__btn tpl-mg__btn--ghost">Website</a>}
                    </div>
                </div>

                {/* Bio Card */}
                {data.bio && (
                    <div className="tpl-mg__card tpl-mg__card--bio">
                        <span className="tpl-mg__card-label">About Me</span>
                        <p>{data.bio}</p>
                    </div>
                )}

                {/* Skills Card */}
                {data.skills.length > 0 && (
                    <div className="tpl-mg__card tpl-mg__card--skills">
                        <span className="tpl-mg__card-label">Skills & Tools</span>
                        <div className="tpl-mg__skills">{data.skills.map((s, i) => <span key={i} className="tpl-mg__skill">{s}</span>)}</div>
                    </div>
                )}

                {/* Contact Card */}
                <div className="tpl-mg__card tpl-mg__card--contact">
                    <span className="tpl-mg__card-label">Connect</span>
                    <div className="tpl-mg__contact-links">
                        {data.email && <a href={`mailto:${data.email}`}><span className="tpl-mg__contact-icon">✉️</span>Email</a>}
                        {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer"><span className="tpl-mg__contact-icon">🐙</span>GitHub</a>}
                        {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer"><span className="tpl-mg__contact-icon">💼</span>LinkedIn</a>}
                        {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer"><span className="tpl-mg__contact-icon">🐦</span>Twitter</a>}
                        {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer">📸 Instagram</a>}
                        {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer">🎵 TikTok</a>}
                        {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer">📘 Facebook</a>}
                        {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer">▶️ YouTube</a>}
                        {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer"><span className="tpl-mg__contact-icon">🌐</span>Website</a>}
                        {data.phone && <a href={`tel:${data.phone}`}><span className="tpl-mg__contact-icon">📞</span>Phone</a>}
                    </div>
                </div>

                {/* Project Cards */}
                {data.projects.map((p, i) => (
                    <div key={i} className="tpl-mg__card tpl-mg__card--project">
                        {p.imageUrl && (
                            <div className="tpl-mg__proj-img-wrap">
                                <img src={p.imageUrl} alt={p.title} />
                                <div className="tpl-mg__proj-overlay">
                                    {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">View ↗</a>}
                                </div>
                            </div>
                        )}
                        <div className="tpl-mg__proj-body">
                            <span className="tpl-mg__proj-num">Project {String(i + 1).padStart(2, '0')}</span>
                            <h3>{p.title}</h3>
                            {p.description && <p>{p.description}</p>}
                            {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-mg__proj-link">View Project →</a>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
