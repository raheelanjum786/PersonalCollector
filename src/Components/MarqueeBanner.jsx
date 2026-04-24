export default function MarqueeBanner({ items, dark = false }) {
  const text = items || [
    'DAILY DAIRY',
    '—',
    'MILK CAPS',
    '—',
    'PERSONAL ARCHIVE',
    '—',
    'EST. 2012',
    '—',
    'A CAP A DAY',
    '—',
  ]

  const repeated = [...text, ...text]

  return (
    <div style={{
      background: dark ? 'var(--navy)' : 'var(--gold)',
      overflow: 'hidden',
      padding: '0.6rem 0',
      borderTop: '1px solid rgba(0,0,0,0.1)',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      whiteSpace: 'nowrap',
      userSelect: 'none',
    }}>
      <div
        className="animate-marquee"
        style={{ display: 'inline-flex', gap: '2.5rem', willChange: 'transform' }}
      >
        {repeated.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--display)',
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            color: dark ? 'var(--gold)' : 'var(--navy)',
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}