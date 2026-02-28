'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePortfolio, Project } from '@/context/PortfolioContext';
import ImageUpload from '@/components/ImageUpload';
import './form.css';

export default function FormPage() {
    const router = useRouter();
    const { template, data, updateData } = usePortfolio();
    const [skillInput, setSkillInput] = useState('');
    const [showMoreLinks, setShowMoreLinks] = useState(false);

    useEffect(() => {
        if (!template) router.push('/create');
    }, [template, router]);

    if (!template) return null;

    const addSkill = () => {
        if (skillInput.trim() && !data.skills.includes(skillInput.trim())) {
            updateData({ skills: [...data.skills, skillInput.trim()] });
            setSkillInput('');
        }
    };

    const removeSkill = (skill: string) => {
        updateData({ skills: data.skills.filter(s => s !== skill) });
    };

    const addProject = () => {
        updateData({
            projects: [...data.projects, { title: '', description: '', imageUrl: '', liveUrl: '' }],
        });
    };

    const updateProject = (index: number, field: keyof Project, value: string) => {
        const updated = [...data.projects];
        updated[index] = { ...updated[index], [field]: value };
        updateData({ projects: updated });
    };

    const removeProject = (index: number) => {
        updateData({ projects: data.projects.filter((_, i) => i !== index) });
    };

    const handlePreview = () => {
        if (!data.name.trim()) {
            alert('Please enter your full name to continue.');
            document.getElementById('fullname-input')?.focus();
            return;
        }
        router.push('/preview');
    };

    return (
        <div className="form-page">
            <div className="container form-container">
                <div className="form-page__header animate-fade-in-up">
                    <div className="create-page__step-badge">
                        <span className="create-page__step-num">2</span>
                        <span>of 3</span>
                    </div>
                    <h1>Your <span className="gradient-text-warm">Details</span></h1>
                    <p>Everything on one page. Fill what you need, skip what you don&apos;t.</p>
                </div>

                <div className="form-layout">
                    {/* Form Sections */}
                    <div className="form-sections">
                        {/* Section: About */}
                        <section className="form-section glass-card animate-fade-in-up animate-delay-1" id="about">
                            <div className="form-section__header">
                                <div className="form-section__icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                                <div>
                                    <h2>About You</h2>
                                    <p>The essentials</p>
                                </div>
                            </div>
                            <div className="form-fields">
                                <div className="form-row form-row--avatar">
                                    <ImageUpload
                                        value={data.avatarUrl}
                                        onChange={url => updateData({ avatarUrl: url })}
                                        label="Profile Photo"
                                        shape="circle"
                                    />
                                    <div className="form-row__fields">
                                        <div className="input-group">
                                            <label className="input-label">Full Name *</label>
                                            <input id="fullname-input" className="input-field" placeholder="John Doe" value={data.name} onChange={e => updateData({ name: e.target.value })} />
                                        </div>
                                        <div className="input-group">
                                            <label className="input-label">Job Title / Role</label>
                                            <input className="input-field" placeholder="Developer / Photographer / Student..." value={data.title} onChange={e => updateData({ title: e.target.value })} />
                                        </div>
                                        <div className="input-group">
                                            <label className="input-label">Location</label>
                                            <input className="input-field" placeholder="San Francisco, CA" value={data.location} onChange={e => updateData({ location: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <label className="input-label">Bio & Interests</label>
                                    <textarea className="textarea-field" placeholder="Tell people about yourself, your journey, your hobbies, or what makes you unique..." value={data.bio} onChange={e => updateData({ bio: e.target.value })} />
                                </div>
                            </div>
                        </section>

                        {/* Section: Skills */}
                        <section className="form-section glass-card animate-fade-in-up animate-delay-2" id="skills">
                            <div className="form-section__header">
                                <div className="form-section__icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                                </div>
                                <div>
                                    <h2>Skills & Expertise</h2>
                                    <p>What are you great at?</p>
                                </div>
                            </div>
                            <div className="form-fields">
                                <div className="input-group">
                                    <div className="skill-input-row">
                                        <input
                                            className="input-field"
                                            placeholder="e.g. React, Photography, Writing, Leadership..."
                                            value={skillInput}
                                            onChange={e => setSkillInput(e.target.value)}
                                            onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                                        />
                                        <button className="btn btn-secondary" onClick={addSkill} type="button">Add</button>
                                    </div>
                                </div>
                                {data.skills.length > 0 && (
                                    <div className="skills-list">
                                        {data.skills.map((skill, i) => (
                                            <span key={i} className="skill-chip">
                                                {skill}
                                                <button onClick={() => removeSkill(skill)} className="skill-chip__remove">×</button>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Section: Projects */}
                        <section className="form-section glass-card animate-fade-in-up animate-delay-3" id="projects">
                            <div className="form-section__header">
                                <div className="form-section__icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                                </div>
                                <div>
                                    <h2>Projects</h2>
                                    <p>Showcase your best work</p>
                                </div>
                            </div>
                            <div className="form-fields">
                                {data.projects.map((project, i) => (
                                    <div key={i} className="project-card">
                                        <div className="project-card__header">
                                            <span className="project-card__num">Project {i + 1}</span>
                                            <button className="project-card__remove" onClick={() => removeProject(i)}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                                                Remove
                                            </button>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label className="input-label">Title</label>
                                                <input className="input-field" placeholder="My Awesome Project" value={project.title} onChange={e => updateProject(i, 'title', e.target.value)} />
                                            </div>
                                            <div className="input-group">
                                                <label className="input-label">Live URL</label>
                                                <input className="input-field" placeholder="https://myproject.com" value={project.liveUrl} onChange={e => updateProject(i, 'liveUrl', e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <label className="input-label">Description</label>
                                            <textarea className="textarea-field" placeholder="What does this project do?" value={project.description} onChange={e => updateProject(i, 'description', e.target.value)} />
                                        </div>
                                        <ImageUpload
                                            value={project.imageUrl}
                                            onChange={url => updateProject(i, 'imageUrl', url)}
                                            label="Project Screenshot"
                                        />
                                    </div>
                                ))}
                                <button className="btn btn-secondary add-project-btn" onClick={addProject} type="button">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                    Add Project
                                </button>
                            </div>
                        </section>

                        {/* Section: Contact */}
                        <section className="form-section glass-card animate-fade-in-up animate-delay-4" id="contact">
                            <div className="form-section__header">
                                <div className="form-section__icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <h2>Connect</h2>
                                    <p>Where can people find you?</p>
                                </div>
                            </div>
                            <div className="form-fields">
                                <div className="form-row">
                                    <div className="input-group">
                                        <label className="input-label">Email</label>
                                        <input className="input-field" placeholder="you@email.com" value={data.email} onChange={e => updateData({ email: e.target.value })} />
                                    </div>
                                    <div className="input-group">
                                        <label className="input-label">Phone</label>
                                        <input className="input-field" placeholder="+1 234 567 890" value={data.phone} onChange={e => updateData({ phone: e.target.value })} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-group">
                                        <label className="input-label">Website</label>
                                        <input className="input-field" placeholder="https://yourwebsite.com" value={data.website} onChange={e => updateData({ website: e.target.value })} />
                                    </div>
                                    <div className="input-group">
                                        <label className="input-label">GitHub URL</label>
                                        <input className="input-field" placeholder="https://github.com/..." value={data.github} onChange={e => updateData({ github: e.target.value })} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-group">
                                        <label className="input-label">LinkedIn URL</label>
                                        <input className="input-field" placeholder="https://linkedin.com/in/..." value={data.linkedin} onChange={e => updateData({ linkedin: e.target.value })} />
                                    </div>
                                    <div className="input-group">
                                        <label className="input-label">Twitter / X URL</label>
                                        <input className="input-field" placeholder="https://twitter.com/..." value={data.twitter} onChange={e => updateData({ twitter: e.target.value })} />
                                    </div>
                                </div>

                                {!showMoreLinks ? (
                                    <button className="btn btn-secondary add-project-btn" onClick={() => setShowMoreLinks(true)} type="button" style={{ marginTop: '10px' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                        Add More Social Links (Instagram, TikTok, etc.)
                                    </button>
                                ) : (
                                    <>
                                        <div className="form-row" style={{ marginTop: '10px' }}>
                                            <div className="input-group">
                                                <label className="input-label">Instagram URL</label>
                                                <input className="input-field" placeholder="https://instagram.com/..." value={data.instagram || ''} onChange={e => updateData({ instagram: e.target.value })} />
                                            </div>
                                            <div className="input-group">
                                                <label className="input-label">TikTok URL</label>
                                                <input className="input-field" placeholder="https://tiktok.com/@..." value={data.tiktok || ''} onChange={e => updateData({ tiktok: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <label className="input-label">Facebook URL</label>
                                                <input className="input-field" placeholder="https://facebook.com/..." value={data.facebook || ''} onChange={e => updateData({ facebook: e.target.value })} />
                                            </div>
                                            <div className="input-group">
                                                <label className="input-label">YouTube URL</label>
                                                <input className="input-field" placeholder="https://youtube.com/..." value={data.youtube || ''} onChange={e => updateData({ youtube: e.target.value })} />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Floating Sticky Actions */}
                    <div className="form-sidebar animate-fade-in-up animate-delay-5">
                        <div className="form-sidebar__sticky glass-card">
                            <h3>Ready?</h3>
                            <p>See how your portfolio looks with the <strong>{template}</strong> template.</p>
                            <button className="btn btn-hero btn-large full-width" onClick={handlePreview}>
                                Preview Portfolio
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                            </button>
                            <button className="btn btn-hero-ghost full-width" onClick={() => router.push('/create')} style={{ marginTop: '10px' }}>
                                Change Template
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
