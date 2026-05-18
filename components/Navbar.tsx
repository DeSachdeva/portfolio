'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'experience', href: '/experience' },
  { label: 'projects', href: '/projects' },
  { label: 'research', href: '/research' },
  { label: 'patents', href: '/patents' },
  { label: 'achievements', href: '/achievements' },
  { label: 'contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: '72px',
        background: scrolled ? 'rgba(8,12,16,0.97)' : 'rgba(8,12,16,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)'}`,
        transition: 'all 0.3s',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 2.5rem',
        }}>

          {/* Logo */}
          <Link href="/" style={{
            fontFamily: 'var(--mono)', fontSize: '14px',
            color: 'var(--accent)', letterSpacing: '0.08em', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '1px',
          }}>
            DS<span style={{ color: 'var(--text3)' }}>/</span><span style={{ color: 'var(--text2)' }}>portfolio</span>
          </Link>

          {/* Desktop nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="desktop-nav">
            {links.map(link => {
              const active = pathname === link.href
              return (
                <Link key={link.href} href={link.href} style={{
                  fontFamily: 'var(--mono)', fontSize: '12px',
                  color: active ? 'var(--accent)' : 'var(--text2)',
                  padding: '7px 16px', borderRadius: '5px',
                  letterSpacing: '0.05em',
                  border: active ? '1px solid rgba(34,211,238,0.25)' : '1px solid transparent',
                  background: active ? 'rgba(34,211,238,0.06)' : 'transparent',
                  transition: 'all 0.2s', textDecoration: 'none',
                  position: 'relative',
                }}
                  onMouseEnter={e => {
                    if (!active) {
                      e.currentTarget.style.color = 'var(--text)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      e.currentTarget.style.color = 'var(--text2)'
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* GitHub */}
            <a href="https://github.com/desachdeva" target="_blank" rel="noreferrer"
              title="GitHub"
              style={{
                width: '36px', height: '36px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', border: '1px solid var(--border2)',
                borderRadius: '8px', color: 'var(--text2)', transition: 'all 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'rgba(34,211,238,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.background = 'transparent' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/devanshsachdeva" target="_blank" rel="noreferrer"
              title="LinkedIn"
              style={{
                width: '36px', height: '36px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', border: '1px solid var(--border2)',
                borderRadius: '8px', color: 'var(--text2)', transition: 'all 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'rgba(34,211,238,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.background = 'transparent' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Resume */}
            <a href="/resume.pdf" target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.08em',
              padding: '8px 18px', border: '1px solid var(--accent)', borderRadius: '5px',
              color: 'var(--accent)', background: 'transparent',
              transition: 'all 0.2s', textDecoration: 'none', whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,211,238,0.1)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(34,211,238,0.15)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Resume
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(m => !m)}
              className="hamburger"
              aria-label="Toggle menu"
              style={{
                display: 'none', flexDirection: 'column', justifyContent: 'center',
                gap: '5px', padding: '8px', width: '40px', height: '40px',
                border: '1px solid var(--border2)', borderRadius: '8px',
                background: menuOpen ? 'rgba(255,255,255,0.05)' : 'transparent',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              <span style={{
                width: '18px', height: '1.5px', background: 'var(--text2)', display: 'block',
                transition: 'all 0.3s',
                transform: menuOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none',
              }} />
              <span style={{
                width: '18px', height: '1.5px', background: 'var(--text2)', display: 'block',
                transition: 'all 0.3s',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                width: '18px', height: '1.5px', background: 'var(--text2)', display: 'block',
                transition: 'all 0.3s',
                transform: menuOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
              }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div style={{
        position: 'fixed', top: '72px', left: 0, right: 0, zIndex: 999,
        background: 'rgba(8,12,16,0.98)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        maxHeight: menuOpen ? '600px' : '0px',
        overflow: 'hidden',
        transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{ padding: '1rem 1.5rem 1.5rem' }}>
          {links.map(link => {
            const active = pathname === link.href
            return (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontFamily: 'var(--mono)', fontSize: '13px', letterSpacing: '0.05em',
                color: active ? 'var(--accent)' : 'var(--text2)',
                padding: '12px 1rem', borderRadius: '6px', textDecoration: 'none',
                background: active ? 'rgba(34,211,238,0.06)' : 'transparent',
                marginBottom: '2px', transition: 'all 0.15s',
              }}>
                {link.label}
                {active && <span style={{ color: 'var(--accent)', fontSize: '10px' }}>●</span>}
              </Link>
            )
          })}
          <div style={{ height: '1px', background: 'var(--border)', margin: '0.75rem 0' }} />
          <a href="/resume.pdf" target="_blank" rel="noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.08em',
            padding: '12px', border: '1px solid var(--accent)', borderRadius: '6px',
            color: 'var(--accent)', textDecoration: 'none', background: 'rgba(34,211,238,0.06)',
          }}>
            Resume ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (max-width: 640px) {
          nav > div { padding: 0 1.25rem !important; }
        }
      `}</style>
    </>
  )
}