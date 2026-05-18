'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const roleTags = ['Researcher', 'Builder', 'Patent Holder', 'Open Source Contributor']

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  useEffect(() => {
    const target = roleTags[roleIndex]
    let timeout: NodeJS.Timeout
    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex(i => (i + 1) % roleTags.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <>
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', paddingTop: '72px',
      }}>
        {/* Grid bg */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 20%, rgba(34,211,238,0.06) 0%, transparent 70%)',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(24px)',
            transition: 'all 0.7s ease',
          }}>
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text2)' }}>
                B.TECH CSE · 2ND YEAR · DELHI, INDIA
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: 'var(--display)', fontWeight: 800, lineHeight: 1,
              letterSpacing: '-0.02em', color: 'var(--text)',
              marginBottom: '1.25rem',
              fontSize: 'clamp(3rem, 10vw, 7.5rem)',
            }}>
              Devansh<br />Sachdeva<span style={{ color: 'var(--accent)' }}>.</span>
            </h1>

            {/* Permanent tag + typewriter row */}
            <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Permanent */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                  padding: '5px 14px', borderRadius: '4px',
                  background: 'rgba(34,211,238,0.1)',
                  border: '1px solid rgba(34,211,238,0.3)',
                  color: 'var(--accent)', letterSpacing: '0.06em',
                }}>
                  CSE Student
                </span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--text3)' }}>+</span>
              </div>

              {/* Typewriter */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--mono)', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
              }}>
                <span style={{ color: 'var(--accent)', opacity: 0.5 }}>~/</span>
                <span style={{ color: 'var(--text2)' }}>{displayed}</span>
                <span style={{
                  display: 'inline-block', width: '2px', height: '1em',
                  background: 'var(--accent)', animation: 'blink 1s infinite', verticalAlign: 'middle',
                }} />
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: 'var(--text2)',
              maxWidth: '520px', lineHeight: 1.85, marginBottom: '1.5rem',
            }}>
              Building things that matter — from{' '}
              <span style={{ color: 'var(--text)' }}>blockchain drug authentication</span> to{' '}
              <span style={{ color: 'var(--text)' }}>AI accessibility tools</span>. Author of{' '}
              <span style={{ color: 'var(--text)' }}>7 research papers</span> and holder of{' '}
              <span style={{ color: 'var(--text)' }}>2 published patents</span>.
            </p>

            {/* Stats */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '2rem',
              marginBottom: '2.5rem', paddingBottom: '2.5rem',
              borderBottom: '1px solid var(--border)',
            }}>
              {[
                { num: '7', label: 'Research Papers' },
                { num: '2', label: 'Published Patents' },
                { num: '3', label: 'Projects Built' },
                { num: '3', label: 'Internships' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{
                    fontFamily: 'var(--display)',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 800, color: 'var(--accent)', lineHeight: 1,
                  }}>
                    {s.num}
                  </div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '10px',
                    color: 'var(--text3)', letterSpacing: '0.08em', marginTop: '5px',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/research" style={{
                fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.06em',
                padding: '11px 26px', background: 'var(--accent)', color: '#000',
                borderRadius: '4px', textDecoration: 'none', fontWeight: 600,
                transition: 'background 0.2s', display: 'inline-block',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#67e8f9')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
              >
                View Research →
              </Link>
              <Link href="/contact" style={{
                fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.06em',
                padding: '11px 26px', background: 'transparent', color: 'var(--text)',
                border: '1px solid var(--border2)', borderRadius: '4px',
                textDecoration: 'none', transition: 'border-color 0.2s', display: 'inline-block',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border2)')}
              >
                Get in Touch
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" style={{
                fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.06em',
                padding: '11px 26px', background: 'transparent', color: 'var(--text2)',
                border: '1px solid var(--border)', borderRadius: '4px',
                textDecoration: 'none', transition: 'all 0.2s', display: 'inline-block',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border2)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                Resume ↗
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--text3)',
        }}>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, var(--text3))' }} />
          scroll
        </div>
      </section>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </>
  )
}