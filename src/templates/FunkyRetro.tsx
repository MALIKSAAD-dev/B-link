import { PortfolioData } from '@/context/PortfolioContext';
import './FunkyRetro.css';

export default function FunkyRetroTemplate({ data }: { data: PortfolioData }) {
    return (
        <div className="tpl-fr">
            <div className="tpl-fr__scanline" />
            <nav className="tpl-fr__nav">
                <span className="tpl-fr__nav-logo">{'>'}_</span>
                <div className="tpl-fr__nav-links">
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer">[GitHub]</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">[LinkedIn]</a>}
                    {data.email && <a href={`mailto:${data.email}`}>[Email]</a>}
                </div>
            </nav>

            <header className="tpl-fr__hero">
                <div className="tpl-fr__hero-inner">
                    {data.avatarUrl && (
                        <div className="tpl-fr__avatar-wrap">
                            <img src={data.avatarUrl} alt={data.name} className="tpl-fr__avatar" />
                            <div className="tpl-fr__avatar-frame" />
                        </div>
                    )}
                    <div className="tpl-fr__hero-text">
                        <span className="tpl-fr__tag">★ HELLO WORLD ★</span>
                        <h1>{data.name || 'Your Name'}</h1>
                        {data.title && <p className="tpl-fr__title">{data.title}</p>}
                        {data.bio && <p className="tpl-fr__bio">{data.bio}</p>}
                        <div className="tpl-fr__cta">
                            {data.email && <a href={`mailto:${data.email}`} className="tpl-fr__btn">CONTACT ME</a>}
                            {data.website && <a href={data.website} target="_blank" rel="noopener noreferrer" className="tpl-fr__btn tpl-fr__btn--alt">WEBSITE</a>}
                        </div>
                    </div>
                </div>
                {data.location && <p className="tpl-fr__loc">[ 📍 {data.location} ]</p>}
            </header>

            {data.skills.length > 0 && (
                <section className="tpl-fr__section">
                    <h2>{'<<'} SKILLS {'>>'}</h2>
                    <div className="tpl-fr__skills">{data.skills.map((s, i) => <span key={i} className="tpl-fr__skill">{s}</span>)}</div>
                </section>
            )}

            {data.projects.length > 0 && (
                <section className="tpl-fr__section">
                    <h2>{'<<'} PROJECTS {'>>'}</h2>
                    <div className="tpl-fr__projects">
                        {data.projects.map((p, i) => (
                            <div key={i} className="tpl-fr__project">
                                {p.imageUrl && (
                                    <div className="tpl-fr__proj-img-wrap">
                                        <img src={p.imageUrl} alt={p.title} />
                                        <div className="tpl-fr__proj-overlay">{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">[VIEW]</a>}</div>
                                    </div>
                                )}
                                <div className="tpl-fr__proj-body">
                                    <h3>{p.title}</h3>
                                    {p.description && <p>{p.description}</p>}
                                    {!p.imageUrl && p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="tpl-fr__proj-link">[VIEW →]</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <footer className="tpl-fr__footer">
                <h2>★ GET IN TOUCH ★</h2>
                <div className="tpl-fr__footer-links">
                    {data.email && <a href={`mailto:${data.email}`} className="tpl-fr__btn">EMAIL</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="tpl-fr__pill">[GitHub]</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="tpl-fr__pill">[LinkedIn]</a>}
                    {data.twitter && <a href={data.twitter} target="_blank" rel="noopener noreferrer" className="tpl-fr__pill">[Twitter]</a>}
                    {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="tpl-fr__pill">[Instagram]</a>}
                    {data.tiktok && <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="tpl-fr__pill">[TikTok]</a>}
                    {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="tpl-fr__pill">[Facebook]</a>}
                    {data.youtube && <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="tpl-fr__pill">[YouTube]</a>}
                    {data.phone && <a href={`tel:${data.phone}`} className="tpl-fr__pill">[Phone]</a>}
                </div>
            </footer>
        </div>
    );
}
