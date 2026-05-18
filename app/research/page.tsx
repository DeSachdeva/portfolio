'use client'
import { useState } from 'react'
import PageWrapper from '@/components/PageWrapper'
import { papers } from '@/data/research'
import Navbar from '@/components/Navbar'

export default function ResearchPage() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <PageWrapper
      label="research"
      title="Authored Research Papers."
      subtitle={`${papers.length} published papers across AI, law, environment, and technology.`}
    >
    <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
        {papers.map((paper, i) => {
          const isOpen = expanded === paper.id
          return (
            <div key={paper.id} style={{ background: 'var(--bg2)', transition: 'background 0.2s' }}>
              {/* Row button */}
              <button
                onClick={() => setExpanded(isOpen ? null : paper.id)}
                style={{
                  width: '100%', textAlign: 'left', padding: '1.5rem 2rem',
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem',
                }}
              >
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flex: 1 }}>
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text3)',
                    letterSpacing: '0.08em', minWidth: '28px', paddingTop: '2px',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div style={{
                      fontFamily: 'var(--display)', fontSize: '1rem', fontWeight: 600,
                      color: 'var(--text)', lineHeight: 1.4, marginBottom: '0.4rem',
                      textAlign: 'left',
                    }}>
                      {paper.title}
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)', letterSpacing: '0.06em' }}>
                      {paper.publishedIn} · {paper.year}
                    </div>
                  </div>
                </div>
                <div style={{
                  color: isOpen ? 'var(--accent)' : 'var(--text3)',
                  fontSize: '1.2rem', transition: 'transform 0.3s, color 0.2s',
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                  flexShrink: 0, paddingTop: '2px',
                }}>
                  +
                </div>
              </button>

              {/* Expanded abstract */}
              {isOpen && (
                <div style={{
                  padding: '0 2rem 2rem 5.5rem',
                  borderTop: '1px solid var(--border)',
                  background: 'var(--bg3)',
                }}>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em',
                    color: 'var(--accent)', textTransform: 'uppercase', margin: '1.5rem 0 0.75rem',
                  }}>
                    Abstract
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.85, maxWidth: '700px', marginBottom: '1.5rem' }}>
                    {paper.abstract}
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {paper.link && (
                      <a href={paper.link} target="_blank" rel="noreferrer" style={{
                        fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.06em',
                        padding: '8px 18px', background: 'var(--accent)', color: '#000',
                        borderRadius: '4px', textDecoration: 'none', transition: 'background 0.2s',
                      }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#67e8f9')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
                      >
                        View Paper ↗
                      </a>
                    )}
                    {paper.pdfPath && (
                      <a href={paper.pdfPath} target="_blank" rel="noreferrer" style={{
                        fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.06em',
                        padding: '8px 18px', background: 'transparent', color: 'var(--text)',
                        border: '1px solid var(--border2)', borderRadius: '4px',
                        textDecoration: 'none', transition: 'border-color 0.2s',
                      }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border2)')}
                      >
                        Abstract ↗
                      </a>
                    )}
                    {!paper.link && !paper.pdfPath && (
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)', padding: '8px 0' }}>
                        Link coming soon
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