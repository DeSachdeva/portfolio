'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import { achievements } from '@/data/achievements'

type Achievement = typeof achievements[0]

const medals: Record<number, string> = { 0: '🏆', 1: '📜', 2: '🥇', 3: '🎖️', 4: '⚡' }

export default function AchievementsPage() {
  const [selected, setSelected] = useState<Achievement | null>(null)

  return (
    <>
      <Navbar />
      <main>
        <PageWrapper
          label="achievements"
          title="Accomplishments."
          subtitle="Awards, recognitions, and milestones worth remembering."
        >
          <div className="ach-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
          }}>
            {achievements.map((a, i) => (
              <button
                key={a.id}
                onClick={() => setSelected(a)}
                style={{
                  background: 'var(--bg2)', border: '1px solid var(--border)',
                  borderRadius: '10px', padding: '1.75rem', textAlign: 'left',
                  cursor: 'pointer', transition: 'all 0.25s', position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(34,211,238,0.3)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Top gradient line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: [
                    'linear-gradient(90deg,#22d3ee,#7c3aed)',
                    'linear-gradient(90deg,#f59e0b,#ef4444)',
                    'linear-gradient(90deg,#10b981,#22d3ee)',
                    'linear-gradient(90deg,#a78bfa,#ec4899)',
                    'linear-gradient(90deg,#22d3ee,#10b981)',
                  ][i % 5],
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '12px',
                    background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                  }}>
                    {medals[i] || '🏅'}
                  </div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '9px', letterSpacing: '0.1em',
                    color: 'var(--text3)', padding: '3px 8px',
                    border: '1px solid var(--border)', borderRadius: '3px',
                  }}>
                    {a.year}
                  </div>
                </div>

                <div style={{
                  fontFamily: 'var(--display)', fontSize: '1rem', fontWeight: 700,
                  color: 'var(--text)', lineHeight: 1.3, marginBottom: '6px',
                }}>
                  {a.title}
                </div>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--accent)',
                  letterSpacing: '0.05em', marginBottom: '1rem',
                }}>
                  {a.org}
                </div>
                <p style={{
                  fontSize: '0.825rem', color: 'var(--text2)', lineHeight: 1.7,
                  display: '-webkit-box', WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>
                  {a.description}
                </p>

                <div style={{
                  marginTop: '1.25rem', display: 'flex', alignItems: 'center',
                  gap: '6px', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--accent)',
                }}>
                  <span>View details</span>
                  <span style={{ transition: 'transform 0.2s' }}>→</span>
                </div>
              </button>
            ))}
          </div>
        </PageWrapper>
      </main>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem', cursor: 'zoom-out',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="modal-inner"
            style={{
              background: 'var(--bg2)', border: '1px solid var(--border2)',
              borderRadius: '14px', overflow: 'hidden',
              width: '100%', maxWidth: '680px',
              maxHeight: '90vh', overflowY: 'auto',
              cursor: 'default', position: 'relative',
            }}
          >
            {/* Photo slot */}
            <div style={{
              width: '100%', height: '240px', background: 'var(--bg3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              {selected.certificatePath ? (
                <img
                  src={selected.certificatePath}
                  alt={selected.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>
                    {medals[achievements.findIndex(a => a.id === selected.id)] || '🏅'}
                  </div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '11px',
                    color: 'var(--text3)', letterSpacing: '0.08em',
                  }}>
                    photo coming soon
                  </div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)',
                    marginTop: '6px',
                  }}>
                    upload to /public/certificates/
                  </div>
                </div>
              )}
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)',
                  color: 'var(--text2)', cursor: 'pointer', fontSize: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.9)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.6)'; e.currentTarget.style.color = 'var(--text2)' }}
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--display)', fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                    fontWeight: 700, color: 'var(--text)', lineHeight: 1.3, marginBottom: '6px',
                  }}>
                    {selected.title}
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--accent)' }}>
                    {selected.org}
                  </div>
                </div>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: '11px',
                  padding: '4px 12px', border: '1px solid rgba(34,211,238,0.2)',
                  borderRadius: '3px', background: 'rgba(34,211,238,0.06)',
                  color: 'var(--accent)', whiteSpace: 'nowrap',
                }}>
                  {selected.year}
                </span>
              </div>

              <p style={{
                fontSize: '0.925rem', color: 'var(--text2)', lineHeight: 1.85,
                marginBottom: '1.5rem',
              }}>
                {selected.description}
              </p>

              {selected.certificatePath && (
                <a href={selected.certificatePath} target="_blank" rel="noreferrer" style={{
                  fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.06em',
                  padding: '8px 20px', background: 'var(--accent)', color: '#000',
                  borderRadius: '4px', textDecoration: 'none', fontWeight: 700,
                  display: 'inline-block',
                }}>
                  View Certificate ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 500px) {
          .ach-grid { grid-template-columns: 1fr !important; }
          .modal-inner { border-radius: 10px !important; }
        }
      `}</style>
    </>
  )
}