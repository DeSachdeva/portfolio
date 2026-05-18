'use client'

const skillGroups = [
  {
    label: 'Languages',
    icon: '{ }',
    items: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'Solidity', 'HTML/CSS'],
  },
  {
    label: 'AI / ML',
    icon: '🧠',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'NumPy', 'Pandas', 'HuggingFace', 'Jupyter'],
  },
  {
    label: 'Web & Backend',
    icon: '🌐',
    items: ['React', 'Next.js', 'Node.js', 'FastAPI', 'Flask', 'REST APIs'],
  },
  {
    label: 'Hardware & Embedded',
    icon: '⚙️',
    items: ['Arduino', 'IR Sensors', 'WiFi Modules', 'Embedded C', 'IoT Protocols'],
  },
  {
    label: 'Blockchain',
    icon: '⛓️',
    items: ['Smart Contracts', 'Web3.js', 'Ethereum', 'Solidity', 'Distributed Systems'],
  },
  {
    label: 'Tools & Infra',
    icon: '🛠',
    items: ['Git', 'GitHub', 'Linux', 'Docker', 'VS Code', 'Figma', 'Vercel'],
  },
]

export default function Skills() {
  return (
    <>
      <section id="skills" style={{ padding: '6rem 0', borderTop: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '0.75rem' }}>
                // skills
              </div>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}>
                Tech I Work With.
              </h2>
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text3)' }}>
              {skillGroups.reduce((a, g) => a + g.items.length, 0)} technologies
            </div>
          </div>

          <div className="skills-grid">
            {skillGroups.map(group => (
              <div key={group.label}
                style={{
                  background: 'var(--bg)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '1.5rem', transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border2)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1rem' }}>{group.icon}</span>
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em',
                    color: 'var(--text3)', textTransform: 'uppercase',
                  }}>
                    {group.label}
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {group.items.map(item => (
                    <span key={item}
                      style={{
                        fontFamily: 'var(--mono)', fontSize: '11px', padding: '4px 12px',
                        border: '1px solid var(--border2)', borderRadius: '3px',
                        color: 'var(--text2)', transition: 'all 0.15s', cursor: 'default',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'rgba(34,211,238,0.05)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.background = 'transparent' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}