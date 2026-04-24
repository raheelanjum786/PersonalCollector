export default function SectionHeader({ eyebrow, title, subtitle, light = false }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      {eyebrow && (
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '0.75rem',
        }}>
          {eyebrow}
        </div>
      )}
      <h2 style={{
        fontFamily: 'var(--display)',
        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
        color: light ? 'var(--cream)' : 'var(--navy)',
        letterSpacing: '0.04em',
        lineHeight: 0.95,
        marginBottom: subtitle ? '1rem' : 0,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.8rem',
          color: light
            ? 'rgba(245,239,224,0.55)'
            : 'rgba(13,27,62,0.55)',
          letterSpacing: '0.05em',
          maxWidth: '480px',
          lineHeight: 1.8,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}