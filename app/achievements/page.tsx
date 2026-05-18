'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import { achievements } from '@/data/achievements'

const medals: Record<number, string> = { 0: '🏆', 1: '📜', 2: '🥇', 3: '🎖️', 4: '⚡' }

export default function AchievementsPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <Navbar />
      <main>
        <PageWrapper
          label="achievements"
          title="Accomplishments."
          subtitle="Awards, recognitions, and milestones."
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {achievements.map((a, i) => (
              <div key={a.id} style={{
                background: 'var(--bg2)', border: '1px solid var(--border)',
                borderRadius: '8px', padding: '1.75rem', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{
                    width: '48px', height: '48px', minWidth: '48px', borderRadius: '10px',
                    background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem',
                  }}>
                    {medals[i] || '🏅'}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--display)', fontSize: '1rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3, marginBottom: '4px' }}>
                      {a.title}
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '0.06em' }}>
                      {a.org}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                  {a.description}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)' }}>{a.year}</span>
                  {a.certificatePath ? (
                    <button
                      onClick={() => setLightbox(a.certificatePath!)}
                      style={{
                        fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.06em',
                        padding: '5px 12px', background: 'transparent', color: 'var(--accent)',
                        border: '1px solid rgba(34,211,238,0.3)', borderRadius: '3px',
                        cursor: 'pointer', transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(34,211,238,0.08)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      View Certificate ↗
                    </button>
                  ) : (
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)', fontStyle: 'italic' }}>
                      certificate coming soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {lightbox && (
            <div onClick={() => setLightbox(null)} style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)',
              zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem', cursor: 'zoom-out',
            }}>
              <div style={{ position: 'relative', maxWidth: '900px', maxHeight: '85vh', width: '100%' }}>
                <img src={lightbox} alt="Certificate" style={{
                  width: '100%', height: 'auto', maxHeight: '85vh',
                  objectFit: 'contain', borderRadius: '8px',
                }} />
                <button onClick={() => setLightbox(null)} style={{
                  position: 'absolute', top: '-36px', right: 0,
                  background: 'transparent', border: 'none', color: 'var(--text2)',
                  fontFamily: 'var(--mono)', fontSize: '11px', cursor: 'pointer', letterSpacing: '0.08em',
                }}>
                  close ✕
                </button>
              </div>
            </div>
          )}
        </PageWrapper>
      </main>
    </>
  )
}