'use client'
import { useState } from 'react'
import PageWrapper from '@/components/PageWrapper'
import { patents } from '@/data/patents'
import Navbar from '@/components/Navbar'

export default function PatentsPage() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <PageWrapper
      label="patents"
      title="Published Patents."
      subtitle={`${patents.length} patents published with the Indian Patent Office.`}
    >
    <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {patents.map((patent, i) => {
          const isOpen = expanded === patent.id
          return (
            <div key={patent.id} style={{
              background: 'var(--bg2)', border: '1px solid var(--border)',
              borderRadius: '8px', overflow: 'hidden', transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border2)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <button
                onClick={() => setExpanded(isOpen ? null : patent.id)}
                style={{
                  width: '100%', textAlign: 'left', padding: '2rem',
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.08em',
                      padding: '3px 10px', background: 'rgba(34,211,238,0.07)',
                      color: 'var(--accent)', border: '1px solid rgba(34,211,238,0.15)', borderRadius: '3px',
                    }}>
                      {patent.patentNumber}
                    </span>
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: '10px',
                      padding: '3px 10px', background: 'rgba(74,222,128,0.08)',
                      color: '#4ade80', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '20px',
                      display: 'inline-flex', alignItems: 'center', gap: '5px',
                    }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                      {patent.status}
                    </span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)' }}>Filed {patent.filedYear}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.35 }}>
                    {patent.title}
                  </div>
                </div>
                <div style={{
                  color: isOpen ? 'var(--accent)' : 'var(--text3)', fontSize: '1.2rem',
                  transition: 'transform 0.3s, color 0.2s',
                  transform: isOpen ? 'rotate(45deg)' : 'none', flexShrink: 0,
                }}>
                  +
                </div>
              </button>

              {isOpen && (
                <div style={{ padding: '0 2rem 2rem', borderTop: '1px solid var(--border)', background: 'var(--bg3)' }}>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em',
                    color: 'var(--accent)', textTransform: 'uppercase', margin: '1.5rem 0 0.75rem',
                  }}>
                    Description
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.85, maxWidth: '700px', marginBottom: '1.5rem' }}>
                    {patent.description}
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {patent.link && (
                      <a href={patent.link} target="_blank" rel="noreferrer" style={{
                        fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.06em',
                        padding: '8px 18px', background: 'var(--accent)', color: '#000',
                        borderRadius: '4px', textDecoration: 'none',
                      }}>
                        View Patent ↗
                      </a>
                    )}
                    {patent.pdfPath && (
                      <a href={patent.pdfPath} target="_blank" rel="noreferrer" style={{
                        fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.06em',
                        padding: '8px 18px', background: 'transparent', color: 'var(--text)',
                        border: '1px solid var(--border2)', borderRadius: '4px', textDecoration: 'none',
                      }}>
                        Download PDF ↓
                      </a>
                    )}
                    {!patent.link && !patent.pdfPath && (
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)', padding: '8px 0' }}>
                        Official link coming soon
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </PageWrapper>
  )
}