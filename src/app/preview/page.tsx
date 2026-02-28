'use client';
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { usePortfolio } from '@/context/PortfolioContext';
import PortfolioRenderer from '@/components/PortfolioRenderer';
import './preview.css';

const categories = [
    {
        label: 'Minimal', items: [
            { id: 'minimal', name: 'Minimal' },
            { id: 'minimal-mono', name: 'Mono' },
            { id: 'minimal-grid', name: 'Grid' },
            { id: 'minimal-zen', name: 'Zen' },
        ]
    },
    {
        label: 'Aesthetic', items: [
            { id: 'aesthetic', name: 'Aesthetic' },
            { id: 'aesthetic-noir', name: 'Noir' },
            { id: 'aesthetic-aurora', name: 'Aurora' },
            { id: 'aesthetic-cosmos', name: 'Cosmos' },
        ]
    },
    {
        label: 'Professional', items: [
            { id: 'professional', name: 'Pro' },
            { id: 'professional-modern', name: 'Modern' },
            { id: 'professional-exec', name: 'Exec' },
            { id: 'professional-clean', name: 'Clean' },
        ]
    },
    {
        label: 'Fun & Playful', items: [
            { id: 'funky', name: 'Fun' },
            { id: 'funky-retro', name: 'Retro' },
            { id: 'funky-pop', name: 'Pop' },
            { id: 'funky-candy', name: 'Candy' },
        ]
    },
    {
        label: 'Developer', items: [
            { id: 'developer', name: 'Dev' },
            { id: 'developer-dark', name: 'Dark' },
            { id: 'developer-blue', name: 'Navy' },
            { id: 'developer-gradient', name: 'Gradient' },
        ]
    },
    {
        label: 'Elegant', items: [
            { id: 'elegant', name: 'Elegant' },
            { id: 'elegant-rose', name: 'Rose' },
            { id: 'elegant-ivory', name: 'Ivory' },
            { id: 'elegant-dark', name: 'Dark' },
        ]
    },
];

export default function PreviewPage() {
    const router = useRouter();
    const { template, setTemplate, data } = usePortfolio();
    const [publishing, setPublishing] = useState(false);
    const [username, setUsername] = useState('');
    const [showPublish, setShowPublish] = useState(false);
    const [publishedUrl, setPublishedUrl] = useState('');
    const [error, setError] = useState('');
    const [origin, setOrigin] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (!template) router.push('/create');
    }, [template, router]);

    useEffect(() => {
        setOrigin(window.location.origin);
    }, []);

    const confettiPieces = useMemo(() =>
        Array.from({ length: 50 }).map((_, i) => ({
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 3}s`,
            duration: `${2 + Math.random() * 3}s`,
            color: ['#a78bfa', '#60a5fa', '#22d3ee', '#f472b6', '#34d399', '#fb923c'][i % 6],
        })), []);

    const handlePublish = async () => {
        if (!username.trim()) { setError('Please enter a username'); return; }
        if (!/^[a-z0-9_-]+$/.test(username)) { setError('Only lowercase letters, numbers, hyphens, and underscores'); return; }
        setError('');
        setPublishing(true);
        try {
            const res = await fetch('/api/publish', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, template, data }),
            });
            const result = await res.json();
            if (!res.ok) { setError(result.error || 'Something went wrong'); setPublishing(false); return; }
            setPublishedUrl(result.url);
        } catch { setError('Failed to publish. Try again.'); }
        setPublishing(false);
    };

    const checkUsername = async (val: string) => {
        const clean = val.toLowerCase().replace(/[^a-z0-9_-]/g, '');
        setUsername(clean);
        if (clean.length >= 3) {
            try {
                const res = await fetch(`/api/check-username?username=${clean}`);
                const result = await res.json();
                if (!result.available) setError('Username is taken');
                else setError('');
            } catch { /* ignore */ }
        }
    };

    if (!template) return null;

    if (publishedUrl) {
        return (
            <div className="publish-success">
                <div className="publish-success__card glass-card">
                    <span className="publish-success__emoji">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    </span>
                    <h2>Your Portfolio is <span className="gradient-text">Live!</span></h2>
                    <p>Share your portfolio with the world</p>
                    <div className="publish-success__url">
                        <span>{origin}/p/{username}</span>
                        <button className="btn btn-secondary" onClick={() => navigator.clipboard.writeText(`${origin}/p/${username}`)}>Copy</button>
                    </div>
                    <div className="publish-success__actions">
                        <a href={`/p/${username}`} target="_blank" className="btn btn-primary btn-large">
                            View Portfolio
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" /></svg>
                        </a>
                        <button className="btn btn-secondary" onClick={() => { setPublishedUrl(''); setShowPublish(false); router.push('/create'); }}>
                            Create Another
                        </button>
                    </div>
                </div>
                <div className="publish-confetti">
                    {confettiPieces.map((p, i) => (
                        <div key={i} className="confetti-piece" style={{
                            left: p.left, animationDelay: p.delay, animationDuration: p.duration, backgroundColor: p.color,
                        }} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="preview-page">
            {/* Mobile sidebar toggle */}
            <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                Templates
            </button>

            {/* Sidebar */}
            <aside className={`preview-sidebar ${sidebarOpen ? 'preview-sidebar--open' : ''}`}>
                <div className="preview-sidebar__top">
                    <button className="sidebar-publish-btn" onClick={() => setShowPublish(true)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" /></svg>
                        Publish
                    </button>
                    <button className="sidebar-edit-btn" onClick={() => router.push('/create/form')}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
                        Edit Info
                    </button>
                </div>

                <div className="preview-sidebar__templates">
                    {categories.map(cat => (
                        <div key={cat.label} className="sidebar-cat">
                            <div className="sidebar-cat__label">{cat.label}</div>
                            {cat.items.map(t => (
                                <button
                                    key={t.id}
                                    className={`sidebar-tpl ${template === t.id ? 'sidebar-tpl--active' : ''}`}
                                    onClick={() => { setTemplate(t.id); setSidebarOpen(false); }}
                                >
                                    <span className="sidebar-tpl__name">{t.name}</span>
                                    {template === t.id && <span className="sidebar-tpl__dot" />}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </aside>

            {/* Main area — full portfolio preview, no device bar */}
            <div className="preview-main">
                <div className="preview-frame">
                    <div className="preview-frame__inner">
                        <PortfolioRenderer template={template} data={data as unknown as Record<string, unknown>} />
                    </div>
                </div>
            </div>

            {/* Overlay for mobile sidebar */}
            {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

            {/* Publish Modal */}
            {showPublish && (
                <div className="publish-modal" onClick={() => setShowPublish(false)}>
                    <div className="publish-modal__card glass-card" onClick={e => e.stopPropagation()}>
                        <h3>Publish Your Portfolio</h3>
                        <p>Choose a unique username for your portfolio URL</p>
                        <div className="publish-modal__url-preview">
                            {origin}/p/<strong>{username || 'yourname'}</strong>
                        </div>
                        <div className="input-group">
                            <label className="input-label">Username</label>
                            <input className="input-field" placeholder="johndoe" value={username} onChange={e => checkUsername(e.target.value)} />
                        </div>
                        {error && <p className="publish-error">{error}</p>}
                        <button className="btn btn-primary btn-large" onClick={handlePublish} disabled={publishing} style={{ width: '100%' }}>
                            {publishing ? 'Publishing...' : 'Go Live'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
