import { stats } from '../data/items'

export default function StatsRow() {
  return (
    <section style={{
      background: 'var(--navy-light)',
      borderTop: '1px solid rgba(201,168,76,0.15)',
      borderBottom: '1px solid rgba(201,168,76,0.15)',
      padding: '2.5rem 2rem',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '2rem',
        textAlign: 'center',
      }}>
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--gold)',
              letterSpacing: '0.04em',
              lineHeight: 1,
            }}>
              {value}
            </div>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(245,239,224,0.5)',
              marginTop: '0.4rem',
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}