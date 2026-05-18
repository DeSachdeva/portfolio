'use client'

export default function Contact() {
  const links = [
    { label: 'EMAIL', value: 'official_sachdeva@yahoo.com', href: 'mailto:official_sachdeva@yahoo.com' },
    { label: 'GITHUB', value: 'github.com/desachdeva', href: 'https://github.com/DeSachdeva' },
    { label: 'LINKEDIN', value: 'linkedin.com/in/desachdeva', href: 'https://linkedin.com/in/desachdeva' },
  ]

  return (
    <section id="contact" style={{ padding: '6rem 0', borderTop: '1px solid var(--border)', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '0.75rem' }}>
            // contact
          </div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}>
            Let's Talk.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.975rem', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Looking for internships, project collaborations, or just want to talk about
              something you're building? I reply fast on weekdays.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {links.map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '1rem 1.25rem', background: 'var(--bg)', border: '1px solid var(--border)',
                    borderRadius: '6px', textDecoration: 'none', transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border2)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)', letterSpacing: '0.08em', marginBottom: '2px' }}>{l.label}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{l.value}</div>
                  </div>
                  <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>→</span>
                </a>
              ))}
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--mono)', fontSize: '11px', color: '#4ade80',
              background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)',
              borderRadius: '20px', padding: '6px 14px', marginTop: '2rem',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite' }} />
              Available for opportunities — 2025
            </div>
          </div>

          {/* Right: simple form */}
          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem' }}>
            {['NAME', 'EMAIL', 'MESSAGE'].map(field => (
              <div key={field} style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--text3)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  {field}
                </label>
                {field === 'MESSAGE' ? (
                  <textarea placeholder={field === 'MESSAGE' ? "What's on your mind..." : ''} rows={4} style={{
                    width: '100%', background: 'var(--bg3)', border: '1px solid var(--border2)',
                    borderRadius: '4px', padding: '10px 14px', fontFamily: 'var(--sans)',
                    fontSize: '0.9rem', color: 'var(--text)', outline: 'none', resize: 'vertical',
                  }} />
                ) : (
                  <input type={field === 'EMAIL' ? 'email' : 'text'} placeholder={field === 'EMAIL' ? 'you@example.com' : 'Your name'} style={{
                    width: '100%', background: 'var(--bg3)', border: '1px solid var(--border2)',
                    borderRadius: '4px', padding: '10px 14px', fontFamily: 'var(--sans)',
                    fontSize: '0.9rem', color: 'var(--text)', outline: 'none',
                  }} />
                )}
              </div>
            ))}
            <button style={{
              width: '100%', padding: '10px', background: 'var(--accent)', color: '#000',
              border: 'none', borderRadius: '4px', fontFamily: 'var(--mono)', fontSize: '12px',
              letterSpacing: '0.06em', cursor: 'pointer', transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#67e8f9')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
              onClick={() => alert('Connect a backend like EmailJS to make this work!')}
            >
              Send Message →
            </button>
          </div>
        </div>
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </section>
  )
}