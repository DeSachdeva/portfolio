'use client'
import { certifications, education, languages } from '@/data/experience'

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '0.75rem' }}>
            // about
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}>
            Who I Am.
          </h2>
        </div>

        {/* Bio row */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start', marginBottom: '5rem' }}>
          {/* Left — identity */}
          <div>
            <div style={{
              width: '120px', height: '120px', borderRadius: '12px',
              background: 'var(--bg3)', border: '1px solid var(--border2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--display)', fontSize: '2rem', fontWeight: 800,
              color: 'var(--accent)', marginBottom: '2rem',
            }}>
              DS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['Degree', 'B.Tech CSE — GGSIPU'],
                ['Year', '2nd Year (Expected 2028)'],
                ['Location', 'Delhi, India'],
                ['Focus', 'AI/ML · Blockchain · Hardware'],
                ['Status', 'Open to Opportunities'],
              ].map(([label, val]) => (
                <div key={label} style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)', letterSpacing: '0.08em', minWidth: '68px', flexShrink: 0 }}>
                    {label}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: label === 'Status' ? '#4ade80' : 'var(--text2)', lineHeight: 1.5 }}>
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bio + terminal */}
          <div>
            <div style={{ fontSize: '0.975rem', color: 'var(--text2)', lineHeight: 1.9, marginBottom: '2rem' }}>
              <p style={{ marginBottom: '1.25rem' }}>
                I'm a 2nd year CSE student who's more interested in{' '}
                <span style={{ color: 'var(--text)' }}>actually building things</span> than collecting certificates.
                My projects span hardware, blockchain, and AI — not because I'm trying to cover everything,
                but because real problems rarely fit neatly into one domain.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                I've authored <span style={{ color: 'var(--text)' }}>7 research papers</span> across AI, law, environment,
                and technology, and hold <span style={{ color: 'var(--text)' }}>2 published patents</span> with the
                Indian Patent Office. Currently going deep on machine learning — the kind you understand from the math up,
                not just API calls.
              </p>
              <p>
                Looking for internships and collaborations where I can contribute to something that actually matters.
              </p>
            </div>

            {/* Terminal */}
            <div style={{
              background: '#070b10', border: '1px solid var(--border2)',
              borderRadius: '8px', overflow: 'hidden',
            }}>
              <div style={{ display: 'flex', gap: '7px', padding: '10px 14px', background: '#0a0e14', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
                {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
                  <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                ))}
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)', marginLeft: '8px', letterSpacing: '0.06em' }}>
                  devansh ~ terminal
                </span>
              </div>
              <div style={{ padding: '1.25rem 1.5rem', fontFamily: 'var(--mono)', fontSize: '12px', lineHeight: 2 }}>
                {[
                  { cmd: 'whoami', out: 'cse_student · researcher · builder' },
                  { cmd: 'cat learning.txt', out: 'Deep Learning, Transformers, MLOps' },
                  { cmd: 'echo $LANGUAGES', out: 'Python, C++, JS, SQL, Solidity' },
                  { cmd: 'echo $GOAL', out: 'Build AI that fixes real things' },
                ].map((line, i) => (
                  <div key={i}>
                    <span style={{ color: '#22d3ee' }}>➜ </span>
                    <span style={{ color: 'var(--text2)' }}>{line.cmd}</span>
                    <div style={{ paddingLeft: '1.25rem', color: '#86efac' }}>{line.out}</div>
                  </div>
                ))}
                <div>
                  <span style={{ color: '#22d3ee' }}>➜ </span>
                  <span style={{
                    display: 'inline-block', width: '8px', height: '14px',
                    background: 'var(--accent)', verticalAlign: 'middle',
                    animation: 'blink 1s infinite',
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>

{/* ── EDUCATION ── */}
<SubLabel>Education</SubLabel>
<div className="edu-grid" style={{
  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem', marginBottom: '4rem',
}}>
  {education.map((edu, i) => (
    <div key={i} style={{
      background: 'var(--bg2)', border: '1px solid var(--border)',
      borderRadius: '10px', padding: '1.5rem',
      position: 'relative', overflow: 'hidden',
      transition: 'all 0.2s',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,211,238,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: i === 0
          ? 'linear-gradient(90deg, #22d3ee, #7c3aed)'
          : i === 1
          ? 'linear-gradient(90deg, #7c3aed, #ec4899)'
          : 'linear-gradient(90deg, #10b981, #22d3ee)',
      }} />
      <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
        {i === 0 ? '🎓' : i === 1 ? '📘' : '📗'}
      </div>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--accent)',
        letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem',
      }}>
        {edu.year}
      </div>
      <div style={{
        fontFamily: 'var(--display)', fontSize: '0.975rem', fontWeight: 700,
        color: 'var(--text)', lineHeight: 1.3, marginBottom: '0.5rem',
      }}>
        {edu.degree}
      </div>
      {edu.field && (
        <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--accent)', marginBottom: '0.5rem' }}>
          {edu.field}
        </div>
      )}
      <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text3)', lineHeight: 1.5 }}>
        {edu.institution || edu.board}
        <br />{edu.location}
      </div>
    </div>
  ))}
</div>

        {/* ── CERTIFICATIONS ── */}
        <SubLabel>Certifications</SubLabel>
        <div className="cert-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
          {certifications.map(cert => (
            <div key={cert.name} style={{
              background: 'var(--bg2)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '1.5rem', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '10px',
                  background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem',
                }}>
                  🎓
                </div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)' }}>{cert.year}</span>
              </div>
              <div style={{ fontFamily: 'var(--display)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>
                {cert.name}
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--accent)', marginBottom: '1.25rem' }}>
                {cert.issuer}
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {cert.credlyUrl && (
                  <a href={cert.credlyUrl} target="_blank" rel="noreferrer" style={{
                    fontFamily: 'var(--mono)', fontSize: '10px', padding: '5px 12px',
                    background: 'rgba(250,204,21,0.08)', color: '#facc15',
                    border: '1px solid rgba(250,204,21,0.2)', borderRadius: '3px',
                    textDecoration: 'none', transition: 'background 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(250,204,21,0.15)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(250,204,21,0.08)')}
                  >
                    Credly Badge ↗
                  </a>
                )}
                {cert.certificatePath && (
                  <a href={cert.certificatePath} target="_blank" rel="noreferrer" style={{
                    fontFamily: 'var(--mono)', fontSize: '10px', padding: '5px 12px',
                    background: 'transparent', color: 'var(--text2)',
                    border: '1px solid var(--border2)', borderRadius: '3px', textDecoration: 'none',
                  }}>
                    Certificate ↗
                  </a>
                )}
                {!cert.credlyUrl && !cert.certificatePath && (
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)', fontStyle: 'italic' }}>
                    badge coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── LANGUAGES ── */}
        <SubLabel>Languages</SubLabel>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {languages.map(lang => (
            <div key={lang.name} style={{
              background: 'var(--bg2)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '0.9rem 1.4rem',
              display: 'flex', alignItems: 'center', gap: '12px',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border2)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <span style={{ fontFamily: 'var(--display)', fontSize: '0.975rem', fontWeight: 600, color: 'var(--text)' }}>
                {lang.name}
              </span>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)',
                letterSpacing: '0.06em', paddingLeft: '12px',
                borderLeft: '1px solid var(--border2)',
              }}>
                {lang.level}
              </span>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
        @media (max-width: 500px) { .cert-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '12px',
      marginBottom: '1.5rem',
      fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em',
      color: 'var(--text3)', textTransform: 'uppercase',
    }}>
      <div style={{ width: '20px', height: '1px', background: 'var(--border2)' }} />
      {children}
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  )
}

<style>{`
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
  @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
  @media (max-width: 768px) { .edu-grid { grid-template-columns: 1fr !important; } }
  @media (max-width: 500px) { .cert-grid { grid-template-columns: 1fr !important; } }
`}</style>