'use client'

const projects = [
  {
    num: '01',
    name: 'Aushadhi Rakshak',
    tagline: 'Anti-Counterfeit Drug System',
    desc: 'A blockchain + synthetic DNA based system to combat counterfeit drugs in the Indian market. Customers can verify authenticity post-purchase, and if a fake is found, the system traces exactly where in the supply chain the counterfeiting occurred.',
    stack: ['Blockchain', 'Synthetic DNA', 'Supply Chain', 'IoT'],
    status: 'Completed',
    statusColor: '#4ade80',
    color: 'linear-gradient(135deg, #0a1628 0%, #0d2244 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.2">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Sahaj Vidya',
    tagline: 'For Minds That Learn Differently',
    desc: 'An adaptive learning platform for dyslexic students. Converts study material to OpenDyslexia font, adds text-to-speech, and uses milestone-based assessments to detect if a student truly understood a concept before moving on.',
    stack: ['React', 'TTS API', 'OpenDyslexia', 'Adaptive Learning'],
    status: 'In Progress',
    statusColor: '#fb923c',
    color: 'linear-gradient(135deg, #0a1a10 0%, #0d2a1a 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Darbaan',
    tagline: 'Smart Gate for COVID-19',
    desc: 'A hardware system using Arduino Uno, IR sensors, and a WiFi module. Contactlessly checks body temperature — normal range opens a sanitization chamber, then entry. Elevated temp triggers a buzzer and sends an instant phone alert to designated staff.',
    stack: ['Arduino', 'IR Sensors', 'WiFi Module', 'IoT', 'C++'],
    status: 'Completed',
    statusColor: '#4ade80',
    color: 'linear-gradient(135deg, #1a0a28 0%, #240d3a 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.2">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '0.75rem' }}>
            // projects
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}>
            Things I've Built.
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {projects.map(p => (
            <div key={p.num}
              style={{
                background: 'var(--bg2)', border: '1px solid var(--border)',
                borderRadius: '8px', overflow: 'hidden', transition: 'all 0.25s', cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(34,211,238,0.25)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              {/* Banner */}
              <div style={{
                height: '140px', background: p.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
              }}>
                {p.icon}
                <div style={{
                  position: 'absolute', top: '1rem', left: '1.25rem',
                  fontFamily: 'var(--mono)', fontSize: '10px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em',
                }}>
                  {p.num}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--display)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>
                      {p.name}
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '0.06em', marginTop: '2px' }}>
                      {p.tagline}
                    </div>
                  </div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                    fontFamily: 'var(--mono)', fontSize: '10px', padding: '3px 10px',
                    borderRadius: '20px', background: `${p.statusColor}18`,
                    border: `1px solid ${p.statusColor}33`, color: p.statusColor, whiteSpace: 'nowrap',
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: p.statusColor, display: 'inline-block' }} />
                    {p.status}
                  </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.75, margin: '1rem 0' }}>
                  {p.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {p.stack.map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.04em',
                      padding: '3px 10px', borderRadius: '3px',
                      background: 'rgba(34,211,238,0.07)', color: 'var(--accent)',
                      border: '1px solid rgba(34,211,238,0.15)',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}