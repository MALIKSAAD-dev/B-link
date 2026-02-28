'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [navHidden, setNavHidden] = useState(false);

    useEffect(() => {
        setHidden(!!pathname?.startsWith('/p/'));
    }, [pathname]);

    useEffect(() => {
        let lastY = 0;
        const handleScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 20);
            if (pathname === '/preview' && y > 80 && y > lastY) {
                setNavHidden(true);
            } else {
                setNavHidden(false);
            }
            lastY = y;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    if (hidden) return null;

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${navHidden ? 'navbar--hidden' : ''}`}>
            <div className="navbar__inner container">
                <Link href="/" className="navbar__logo">
                    <svg className="navbar__logo-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#navGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <defs><linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#22d3ee" /></linearGradient></defs>
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    <span className="navbar__logo-text">B-<span className="gradient-text">link</span></span>
                </Link>

                <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
                    <Link href="/" className={`navbar__link ${pathname === '/' ? 'navbar__link--active' : ''}`}>Home</Link>
                    <Link href="/create" className={`navbar__link ${pathname?.startsWith('/create') ? 'navbar__link--active' : ''}`}>Create</Link>
                </div>

                <button className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
}
