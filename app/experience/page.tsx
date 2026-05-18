'use client'
import PageWrapper from '@/components/PageWrapper'
import { experiences } from '@/data/experience'
import Navbar from '@/components/Navbar'

const typeColors: Record<string, { bg: string; color: string; label: string }> = {
  fulltime:   { bg: 'rgba(34,211,238,0.08)',  color: '#22d3ee', label: 'Full-time'  },
  internship: { bg: 'rgba(251,146,60,0.08)',  color: '#fb923c', label: 'Internship' },
  volunteer:  { bg: 'rgba(167,139,250,0.08)', color: '#a78bfa', label: 'Volunteer'  },
}

export default function ExperiencePage() {
  
  return (
   
    <PageWrapper
      label="experience"
      title="Work Experience."
      subtitle={`${experiences.length} roles across leadership, development, and operations.`}
    >
      <Navbar />
      <div style={{ position: 'relative' }}>
        {/* Timeline vertical line */}
        <div className="timeline-line" style={{
          position: 'absolute', left: '7px', top: '8px', bottom: '8px',
          width: '1px', background: 'var(--border)',
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {experiences.map((exp, i) => {
            const tc = typeColors[exp.type]
            return (
              <div key={exp.id} style={{
                display: 'flex', gap: '2rem',
                paddingBottom: i < experiences.length - 1 ? '3rem' : 0,
              }}>
                {/* Timeline dot */}
                <div className="timeline-dot" style={{ flexShrink: 0, paddingTop: '6px' }}>
                  <div style={{
                    width: '15px', height: '15px', borderRadius: '50%',
                    background: exp.current ? 'var(--accent)' : 'var(--bg3)',
                    border: `2px solid ${exp.current ? 'var(--accent)' : 'var(--border2)'}`,
                    boxShadow: exp.current ? '0 0 12px rgba(34,211,238,0.5)' : 'none',
                  }} />
                </div>

                {/* Card */}
                <div style={{
                  flex: 1, background: 'var(--bg2)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1.75rem', transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border2)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem',
                  }}>
                    <div>
                      <div style={{ fontFamily: 'var(--display)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>
                        {exp.role}
                      </div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--accent)' }}>
                        {exp.company} · {exp.location}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{
                        fontFamily: 'var(--mono)', fontSize: '10px', padding: '3px 10px',
                        background: tc.bg, color: tc.color,
                        border: `1px solid ${tc.color}33`, borderRadius: '20px',
                      }}>
                        {tc.label}
                      </span>
                      {exp.current && (
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
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)' }}>
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ display: 'flex', gap: '10px', fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.75 }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (max-width: 600px) {
          .timeline-dot { display: none !important; }
          .timeline-line { display: none !important; }
        }
      `}</style>
    </PageWrapper>
  )
}