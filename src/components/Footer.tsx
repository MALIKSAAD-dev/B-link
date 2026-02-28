'use client';
import { usePathname } from 'next/navigation';
import './Footer.css';

export default function Footer() {
    const pathname = usePathname();
    if (pathname?.startsWith('/p/')) return null;

    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__brand">
                    <span className="footer__logo">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-purple)', marginRight: '6px' }}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                        B-<span className="gradient-text">link</span>
                    </span>
                    <p className="footer__tagline">Build your portfolio. Share your story.</p>
                </div>
                <div className="footer__bottom">
                    <p className="footer__copy">
                        &copy; {new Date().getFullYear()} B-link. All rights reserved. Made by <a href="https://maliksaad.bio.link/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline', fontWeight: 500 }}>Saad Khan</a>.
                    </p>
                </div>
            </div>
        </footer>
    );
}
