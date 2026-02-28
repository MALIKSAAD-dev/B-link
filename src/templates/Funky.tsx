import { PortfolioData } from '@/context/PortfolioContext';
import './Funky.css';

export default function FunkyTemplate({ data }: { data: PortfolioData }) {
    const colors = ['#fbbf24', '#f472b6', '#60a5fa', '#34d399', '#a78bfa', '#fb923c'];
    const bgColors = ['#fef3c7', '#fce7f3', '#dbeafe', '#d1fae5', '#ede9fe', '#ffedd5'];
    const textColors = ['#92400e', '#9d174d', '#1e40af', '#065f46', '#5b21b6', '#c2410c'];

    return (
        <div className="tpl-fun">
            {/* Floating Shapes */}
            <div className="tpl-fun__shapes">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className={`tpl-fun__shape tpl-fun__shape--${i + 1}`} />
                ))}
            </div>

            {/* Hero - Bento Style */}
            <header className="tpl-fun__hero">
                <div className="tpl-fun__bento">
                    <div className="tpl-fun__bento-main">
                        <p className="tpl-fun__wave">👋 Hey there!</p>
                        <h1>I&apos;m <span style={{ color: colors[0] }}>{data.name || 'Your Name'}</span></h1>
                        {data.title && <p className="tpl-fun__subtitle">{data.title}</p>}
                        {data.bio && <p className="tpl-fun__bio">{data.bio}</p>}
                    </div>
                    {data.avatarUrl && (
                        <div className="tpl-fun__bento-avatar">
                            <img src={data.avatarUrl} alt={data.name} />
                            <div className="tpl-fun__sticker tpl-fun__sticker--1">✨</div>
                            <div className="tpl-fun__sticker tpl-fun__sticker--2">🚀</div>
                        </div>
                    )}
                    {data.location && (
                        <div className="tpl-fun__bento-loc">
                            <span>📍</span> {data.location}
                        </div>
                    )}
                    <div className="tpl-fun__bento-links">
                        {data.email && <a href={`mailto:${data.email}`} className="tpl-fun__link-btn" style={{ background: colors[0] }}>✉️ Email</a>}
                        {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-fun__link-btn" style={{ background: colors[1] }}>🐙 GitHub</a>}
                        {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-fun__link-btn" style={{ background: colors[2] }}>💼 LinkedIn</a>}
                    </div>
                </div>
            </header>

            {/* Skills */}
            {data.skills.length > 0 && (
                <section className="tpl-fun__section">
                    <h2 className="tpl-fun__heading">🎨 What I Do</h2>
                    <div className="tpl-fun__skill-cloud">
                        {data.skills.map((skill, i) => (
                            <span key={i} className="tpl-fun__skill" style={{
                                background: bgColors[i % 6],
                                color: textColors[i % 6],
                                borderColor: colors[i % 6],
                                fontSize: `${0.8 + (i % 3) * 0.1}rem`,
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {data.projects.length > 0 && (
                <section className="tpl-fun__section">
                    <h2 className="tpl-fun__heading">🚀 My Projects</h2>
                    <div className="tpl-fun__projects">
                        {data.projects.map((project, i) => (
                            <div key={i} className="tpl-fun__project" style={{ borderBottom: `4px solid ${colors[i % 6]}` }}>
                                {project.imageUrl && (
                                    <div className="tpl-fun__project-img">
                                        <img src={project.imageUrl} alt={project.title} />
                                        <div className="tpl-fun__project-badge" style={{ background: colors[i % 6] }}>
                                            {String(i + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                )}
                                <div className="tpl-fun__project-body">
                                    <h3>{project.title}</h3>
                                    {project.description && <p>{project.description}</p>}
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-fun__proj-btn" style={{ background: colors[i % 6] }}>
                                            Check it out! 🔗
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className="tpl-fun__footer">
                <div className="tpl-fun__footer-card">
                    <h2>💌 Let&apos;s Chat!</h2>
                    <p>I&apos;m always open to new ideas and collaborations.</p>
                    <div className="tpl-fun__footer-links">
                        {data.email && <a href={`mailto:${data.email}`}>✉️ Email</a>}
                        {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">🐙 GitHub</a>}
                        {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>}
                        {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer">🐦 Twitter</a>}
                        {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer">📸 Instagram</a>}
                        {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer">🎵 TikTok</a>}
                        {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer">📘 Facebook</a>}
                        {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer">▶️ YouTube</a>}
                        {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer">🌐 Website</a>}
                        {data.phone && <a href={`tel:${data.phone}`}>📞 Phone</a>}
                    </div>
                </div>
            </footer>
        </div>
    );
}
