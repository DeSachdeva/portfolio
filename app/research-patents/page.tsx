'use client'
import { useState, useRef } from 'react'
import Navbar from '@/components/Navbar'
import { papers } from '@/data/research'
import { patents } from '@/data/patents'

export default function ResearchPatentsPage() {
  const [expandedPaper, setExpandedPaper] = useState<string | null>(null)
  const [expandedPatent, setExpandedPatent] = useState<string | null>(null)
  const papersRef = useRef<HTMLDivElement>(null)
  const patentsRef = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: '72px' }}>

        {/* ── HERO HEADER ── */}
        <div style={{
          position: 'relative', overflow: 'hidden',
          padding: 'clamp(3rem, 8vw, 6rem) 2rem clamp(2rem, 5vw, 4rem)',
          borderBottom: '1px solid var(--border)',
        }}>
          {/* bg grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at 50% 0%, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 40%, transparent 80%)',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 50% -10%, rgba(34,211,238,0.07) 0%, transparent 70%)',
          }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <div style={{ width: '28px', height: '1px', background: 'var(--accent)' }} />
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text2)' }}>
                INTELLECTUAL WORK
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--display)', fontWeight: 800,
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--text)',
              marginBottom: '1.5rem',
            }}>
              Research &<br /><span style={{ color: 'var(--accent)' }}>Patents.</span>
            </h1>

            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: 'var(--text2)',
              maxWidth: '520px', lineHeight: 1.8, marginBottom: '3rem',
            }}>
              Academic publications and intellectual property spanning AI, law,
              environment, and applied technology.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'flex', gap: '1px', background: 'var(--border)',
              borderRadius: '10px', overflow: 'hidden', width: 'fit-content',
              marginBottom: '3rem',
            }}>
              {[
                { num: papers.length, label: 'Research Papers' },
                { num: patents.length, label: 'Published Patents' },
                { num: '7+', label: 'Domains' },
                { num: '2025', label: 'Latest' },
              ].map(s => (
                <div key={s.label} style={{
                  background: 'var(--bg2)', padding: '1.1rem 2rem', textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--display)', fontSize: 'clamp(1.4rem, 3vw, 2rem)',
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

            {/* Jump buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => scrollTo(papersRef)}
                style={{
                  fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.06em',
                  padding: '11px 28px', background: 'var(--accent)', color: '#000',
                  border: 'none', borderRadius: '5px', cursor: 'pointer',
                  fontWeight: 700, transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#67e8f9'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'none' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Research Papers ({papers.length})
              </button>
              <button
                onClick={() => scrollTo(patentsRef)}
                style={{
                  fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.06em',
                  padding: '11px 28px', background: 'transparent', color: 'var(--text)',
                  border: '1px solid var(--border2)', borderRadius: '5px', cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.transform = 'none' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                Patents ({patents.length})
              </button>
            </div>
          </div>
        </div>

        {/* ── RESEARCH PAPERS ── */}
        <div
          ref={papersRef}
          style={{
            maxWidth: '1200px', margin: '0 auto',
            padding: 'clamp(3rem, 6vw, 5rem) 2rem',
          }}
        >
          {/* Section header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem',
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em',
                color: 'var(--accent)', marginBottom: '0.5rem',
              }}>
                // 01 — research papers
              </div>
              <h2 style={{
                fontFamily: 'var(--display)', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em',
              }}>
                Authored Publications.
              </h2>
            </div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text3)',
              padding: '6px 14px', border: '1px solid var(--border)',
              borderRadius: '20px',
            }}>
              {papers.length} papers
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
            {papers.map((paper, i) => {
              const isOpen = expandedPaper === paper.id
              return (
                <div key={paper.id} style={{
                  background: isOpen ? 'var(--bg3)' : 'var(--bg2)',
                  transition: 'background 0.25s',
                }}>
                  <button
                    onClick={() => setExpandedPaper(isOpen ? null : paper.id)}
                    style={{
                      width: '100%', textAlign: 'left',
                      padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.75rem)',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'flex-start',
                      justifyContent: 'space-between', gap: '1rem',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flex: 1, minWidth: 0 }}>
                      {/* Number */}
                      <span style={{
                        fontFamily: 'var(--mono)', fontSize: '11px',
                        color: isOpen ? 'var(--accent)' : 'var(--text3)',
                        letterSpacing: '0.08em', minWidth: '24px',
                        paddingTop: '2px', flexShrink: 0,
                        transition: 'color 0.2s',
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div style={{ minWidth: 0 }}>
                        <div style={{
                          fontFamily: 'var(--display)',
                          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                          fontWeight: 600, color: 'var(--text)',
                          lineHeight: 1.4, marginBottom: '6px', textAlign: 'left',
                        }}>
                          {paper.title}
                        </div>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                          <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)' }}>
                            {paper.publishedIn}
                          </span>
                          <span style={{
                            fontFamily: 'var(--mono)', fontSize: '10px',
                            color: 'var(--accent)', padding: '1px 8px',
                            border: '1px solid rgba(34,211,238,0.2)',
                            borderRadius: '3px', background: 'rgba(34,211,238,0.05)',
                          }}>
                            {paper.year}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                      border: `1px solid ${isOpen ? 'var(--accent)' : 'var(--border2)'}`,
                      background: isOpen ? 'rgba(34,211,238,0.1)' : 'transparent',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isOpen ? 'var(--accent)' : 'var(--text3)',
                      fontSize: '1.1rem', transition: 'all 0.3s',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                    }}>
                      +
                    </div>
                  </button>

                  {/* Expanded */}
                  <div style={{
                    maxHeight: isOpen ? '600px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1)',
                  }}>
                    <div style={{
                      padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.75rem)',
                      paddingLeft: 'clamp(1rem, 4vw, 5rem)',
                      borderTop: '1px solid var(--border)',
                    }}>
                      <div style={{
                        fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em',
                        color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.75rem',
                        display: 'flex', alignItems: 'center', gap: '8px',
                      }}>
                        <div style={{ width: '16px', height: '1px', background: 'var(--accent)' }} />
                        Abstract
                      </div>
                      <p style={{
                        fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.9,
                        maxWidth: '700px', marginBottom: '1.5rem',
                      }}>
                        {paper.abstract}
                      </p>
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {paper.link && (
                          <a href={paper.link} target="_blank" rel="noreferrer" style={{
                            fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.06em',
                            padding: '8px 20px', background: 'var(--accent)', color: '#000',
                            borderRadius: '4px', textDecoration: 'none', fontWeight: 700,
                            transition: 'background 0.2s',
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
                            padding: '8px 20px', background: 'transparent', color: 'var(--text)',
                            border: '1px solid var(--border2)', borderRadius: '4px',
                            textDecoration: 'none', transition: 'border-color 0.2s',
                          }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border2)')}
                          >
                            Download PDF ↓
                          </a>
                        )}
                        {!paper.link && !paper.pdfPath && (
                          <span style={{
                            fontFamily: 'var(--mono)', fontSize: '10px',
                            color: 'var(--text3)', padding: '8px 0',
                            display: 'flex', alignItems: 'center', gap: '6px',
                          }}>
                            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--text3)', display: 'inline-block' }} />
                            Link coming soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          maxWidth: '1200px', margin: '0 auto', padding: '0 2rem',
        }}>
          <div style={{
            height: '1px', background: 'linear-gradient(90deg, transparent, var(--border2), transparent)',
          }} />
        </div>

        {/* ── PATENTS ── */}
        <div
          ref={patentsRef}
          style={{
            maxWidth: '1200px', margin: '0 auto',
            padding: 'clamp(3rem, 6vw, 5rem) 2rem clamp(4rem, 8vw, 7rem)',
          }}
        >
          {/* Section header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem',
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em',
                color: 'var(--accent)', marginBottom: '0.5rem',
              }}>
                // 02 — patents
              </div>
              <h2 style={{
                fontFamily: 'var(--display)', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em',
              }}>
                Published Patents.
              </h2>
            </div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '11px', color: '#4ade80',
              padding: '6px 14px',
              border: '1px solid rgba(74,222,128,0.2)',
              background: 'rgba(74,222,128,0.06)',
              borderRadius: '20px',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
              Indian Patent Office
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {patents.map((patent, i) => {
              const isOpen = expandedPatent === patent.id
              return (
                <div key={patent.id} style={{
                  background: 'var(--bg2)',
                  border: `1px solid ${isOpen ? 'rgba(34,211,238,0.3)' : 'var(--border)'}`,
                  borderRadius: '12px', overflow: 'hidden',
                  transition: 'all 0.25s',
                  boxShadow: isOpen ? '0 4px 24px rgba(34,211,238,0.06)' : 'none',
                }}>
                  <button
                    onClick={() => setExpandedPatent(isOpen ? null : patent.id)}
                    style={{
                      width: '100%', textAlign: 'left',
                      padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'flex-start', gap: '1rem',
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      {/* Badges */}
                      <div style={{
                        display: 'flex', flexWrap: 'wrap', gap: '8px',
                        marginBottom: '0.9rem', alignItems: 'center',
                      }}>
                        <span style={{
                          fontFamily: 'var(--mono)', fontSize: '10px',
                          padding: '3px 10px', background: 'rgba(34,211,238,0.07)',
                          color: 'var(--accent)', border: '1px solid rgba(34,211,238,0.2)',
                          borderRadius: '3px', letterSpacing: '0.04em',
                        }}>
                          {patent.patentNumber}
                        </span>
                        <span style={{
                          fontFamily: 'var(--mono)', fontSize: '10px',
                          padding: '3px 10px', background: 'rgba(74,222,128,0.08)',
                          color: '#4ade80', border: '1px solid rgba(74,222,128,0.2)',
                          borderRadius: '20px',
                          display: 'inline-flex', alignItems: 'center', gap: '5px',
                        }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                          {patent.status}
                        </span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)' }}>
                          Filed {patent.filedYear}
                        </span>
                      </div>
                      {/* Title */}
                      <div style={{
                        fontFamily: 'var(--display)',
                        fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                        fontWeight: 600, color: 'var(--text)', lineHeight: 1.35,
                      }}>
                        {patent.title}
                      </div>
                    </div>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
                      border: `1px solid ${isOpen ? 'var(--accent)' : 'var(--border2)'}`,
                      background: isOpen ? 'rgba(34,211,238,0.1)' : 'transparent',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isOpen ? 'var(--accent)' : 'var(--text3)',
                      fontSize: '1.1rem', transition: 'all 0.3s',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                    }}>
                      +
                    </div>
                  </button>

                  {/* Expanded */}
                  <div style={{
                    maxHeight: isOpen ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1)',
                  }}>
                    <div style={{
                      padding: 'clamp(1rem, 3vw, 1.75rem)',
                      borderTop: '1px solid var(--border)',
                      background: 'rgba(34,211,238,0.02)',
                    }}>
                      <div style={{
                        fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em',
                        color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.75rem',
                        display: 'flex', alignItems: 'center', gap: '8px',
                      }}>
                        <div style={{ width: '16px', height: '1px', background: 'var(--accent)' }} />
                        Description
                      </div>
                      <p style={{
                        fontSize: '0.9rem', color: 'var(--text2)',
                        lineHeight: 1.9, maxWidth: '700px', marginBottom: '1.5rem',
                      }}>
                        {patent.description}
                      </p>
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {patent.link && (
                          <a href={patent.link} target="_blank" rel="noreferrer" style={{
                            fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.06em',
                            padding: '8px 20px', background: 'var(--accent)', color: '#000',
                            borderRadius: '4px', textDecoration: 'none', fontWeight: 700,
                            transition: 'background 0.2s',
                          }}
                            onMouseEnter={e => (e.currentTarget.style.background = '#67e8f9')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
                          >
                            View Patent ↗
                          </a>
                        )}
                        {patent.pdfPath && (
                          <a href={patent.pdfPath} target="_blank" rel="noreferrer" style={{
                            fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.06em',
                            padding: '8px 20px', background: 'transparent', color: 'var(--text)',
                            border: '1px solid var(--border2)', borderRadius: '4px',
                            textDecoration: 'none', transition: 'border-color 0.2s',
                          }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border2)')}
                          >
                            Download PDF ↓
                          </a>
                        )}
                        {!patent.link && !patent.pdfPath && (
                          <span style={{
                            fontFamily: 'var(--mono)', fontSize: '10px',
                            color: 'var(--text3)', padding: '8px 0',
                            display: 'flex', alignItems: 'center', gap: '6px',
                          }}>
                            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--text3)', display: 'inline-block' }} />
                            Official link coming soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </main>
    </>
  )
}