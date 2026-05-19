'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import { experiences } from '@/data/experience'

const typeColors: Record<string, { bg: string; color: string; label: string }> = {
  fulltime:   { bg: 'rgba(34,211,238,0.08)',  color: '#22d3ee', label: 'Full-time'  },
  internship: { bg: 'rgba(251,146,60,0.08)',  color: '#fb923c', label: 'Internship' },
  volunteer:  { bg: 'rgba(167,139,250,0.08)', color: '#a78bfa', label: 'Volunteer'  },
}

export default function ExperiencePage() {
  const [active, setActive] = useState(experiences[0].id)
  const current = experiences.find(e => e.id === active)!

  return (
    <>
      <Navbar />
      <main>
        <PageWrapper
          label="experience"
          title="Work Experience."
          subtitle="Roles across leadership, development, and operations."
        >
          <div className="exp-layout" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '1.5rem', alignItems: 'start' }}>

            {/* Left — company selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', borderRadius: '8px', overflow: 'hidden', position: 'sticky', top: '90px' }}>
              {experiences.map(exp => {
                const tc = typeColors[exp.type]
                const isActive = active === exp.id
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActive(exp.id)}
                    style={{
                      width: '100%', textAlign: 'left', padding: '1.2rem 1.4rem',
                      background: isActive ? 'var(--bg3)' : 'var(--bg2)',
                      border: 'none', cursor: 'pointer', transition: 'background 0.2s',
                      borderLeft: `3px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'var(--bg3)' }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'var(--bg2)' }}
                  >
                    <div style={{
                      fontFamily: 'var(--display)', fontSize: '0.9rem', fontWeight: 600,
                      color: isActive ? 'var(--text)' : 'var(--text2)', marginBottom: '3px',
                      lineHeight: 1.3,
                    }}>
                      {exp.company}
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: isActive ? 'var(--accent)' : 'var(--text3)', marginBottom: '6px' }}>
                      {exp.duration}
                    </div>
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: '9px', padding: '2px 8px',
                      background: tc.bg, color: tc.color,
                      border: `1px solid ${tc.color}33`, borderRadius: '20px',
                    }}>
                      {tc.label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Right — detail panel */}
            <div style={{
              background: 'var(--bg2)', border: '1px solid var(--border)',
              borderRadius: '10px', overflow: 'hidden',
            }}>
              {/* Header */}
              <div style={{
                padding: '2rem', borderBottom: '1px solid var(--border)',
                background: 'linear-gradient(135deg, var(--bg3) 0%, var(--bg2) 100%)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: '10px', padding: '3px 10px',
                      background: typeColors[current.type].bg, color: typeColors[current.type].color,
                      border: `1px solid ${typeColors[current.type].color}33`, borderRadius: '20px',
                    }}>
                      {typeColors[current.type].label}
                    </span>
                    {current.current && (
                      <span style={{
                        fontFamily: 'var(--mono)', fontSize: '10px', padding: '3px 10px',
                        background: 'rgba(74,222,128,0.08)', color: '#4ade80',
                        border: '1px solid rgba(74,222,128,0.2)', borderRadius: '20px',
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                      }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                        Current
                      </span>
                    )}
                  </div>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text3)' }}>
                    {current.duration}
                  </span>
                </div>
                <div style={{
                  fontFamily: 'var(--display)', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                  fontWeight: 700, color: 'var(--text)', marginBottom: '4px',
                }}>
                  {current.role}
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--accent)' }}>
                  {current.company} · {current.location}
                </div>
              </div>

              {/* Points */}
              <div style={{ padding: '2rem' }}>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em',
                  color: 'var(--text3)', textTransform: 'uppercase', marginBottom: '1.25rem',
                  display: 'flex', alignItems: 'center', gap: '10px',
                }}>
                  <div style={{ width: '16px', height: '1px', background: 'var(--border2)' }} />
                  Key Contributions
                  <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {current.points.map((pt, j) => (
                    <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '20px', height: '20px', borderRadius: '4px', flexShrink: 0,
                        background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginTop: '1px',
                      }}>
                        <span style={{ color: 'var(--accent)', fontSize: '10px' }}>▸</span>
                      </div>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.75 }}>
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </PageWrapper>
      </main>

      <style>{`
        @media (max-width: 768px) {
          .exp-layout {
            grid-template-columns: 1fr !important;
          }
          .exp-layout > div:first-child {
            position: static !important;
            display: flex !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            border-radius: 8px !important;
            gap: 0 !important;
          }
          .exp-layout > div:first-child button {
            min-width: 160px !important;
            border-left: none !important;
            border-bottom: 3px solid transparent !important;
            padding: 1rem !important;
          }
        }
        @media (max-width: 480px) {
          .exp-layout > div:first-child button { min-width: 140px !important; }
        }
      `}</style>
    </>
  )
}