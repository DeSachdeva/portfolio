import Link from 'next/link'

export default function PageWrapper({ label, title, subtitle, children }: {
  label: string
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '64px' }}>
      <div className="page-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <Link href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text3)',
          letterSpacing: '0.08em', textDecoration: 'none', marginBottom: '3rem',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
        >
          ← back to home
        </Link>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '0.75rem' }}>
            // {label}
          </div>
          <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: subtitle ? '1rem' : 0 }}>
            {title}
          </h1>
          {subtitle && <p style={{ fontSize: '1rem', color: 'var(--text2)', maxWidth: '560px', lineHeight: 1.75 }}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  )
}