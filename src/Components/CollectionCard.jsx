import { useState } from 'react'

const conditionColors = {
  mint: { bg: '#d4edda', text: '#155724' },
  good: { bg: '#d1ecf1', text: '#0c5460' },
  fair: { bg: '#fff3cd', text: '#856404' },
  worn: { bg: '#f8d7da', text: '#721c24' },
}

export default function CollectionCard({ item, index = 0 }) {
  const [hovered, setHovered] = useState(false)
  const cond = conditionColors[item.conditionKey] || conditionColors.good

  return (
    <article
      className="card-lift animate-fade-up opacity-0"
      style={{
        animationDelay: `${index * 0.08}s`,
        animationFillMode: 'forwards',
        background: 'var(--navy)',
        borderRadius: '4px',
        overflow: 'hidden',
        border: hovered
          ? '1px solid rgba(201,168,76,0.6)'
          : '1px solid rgba(255,255,255,0.06)',
        transition: 'border-color 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cap visual */}
      <div style={{
        aspectRatio: '1',
        background: `radial-gradient(circle at 50% 50%, ${item.color}22 0%, transparent 70%), var(--navy-light)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circle ring */}
        <div style={{
          width: '75%', height: '75%',
          borderRadius: '50%',
          border: `3px solid ${item.color}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
          transition: 'transform 0.4s ease',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
        }}>
          <div style={{
            width: '82%', height: '82%',
            borderRadius: '50%',
            background: `${item.color}18`,
            border: `1px solid ${item.color}55`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column',
            gap: '0.3rem',
            padding: '1rem',
            textAlign: 'center',
          }}>
            <span style={{ fontSize: '1.8rem' }}>{item.emoji}</span>
            <span style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(0.5rem, 1.5vw, 0.75rem)',
              letterSpacing: '0.08em',
              color: item.color,
              lineHeight: 1.2,
            }}>
              {item.dairy.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Item number */}
        <div style={{
          position: 'absolute',
          top: '0.75rem', left: '0.75rem',
          fontFamily: 'var(--mono)',
          fontSize: '0.6rem',
          color: 'rgba(245,239,224,0.35)',
          letterSpacing: '0.1em',
        }}>
          ITEM: {item.id}
        </div>

        {/* Condition badge */}
        <div style={{
          position: 'absolute',
          top: '0.75rem', right: '0.75rem',
          fontFamily: 'var(--mono)',
          fontSize: '0.55rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '2px 7px',
          borderRadius: '2px',
          background: cond.bg,
          color: cond.text,
          fontWeight: 500,
        }}>
          {item.condition}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '1.1rem 1.25rem 1.25rem' }}>
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.12em',
          color: 'var(--gold)',
          textTransform: 'uppercase',
          marginBottom: '0.35rem',
        }}>
          {item.era} · {item.location}
        </div>

        <h3 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
          color: 'var(--cream)',
          fontWeight: 700,
          lineHeight: 1.3,
          marginBottom: '0.5rem',
          fontStyle: 'italic',
        }}>
          {item.name}
        </h3>

        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.62rem',
          color: 'rgba(245,239,224,0.45)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          {item.conditionNote}
        </p>
      </div>
    </article>
  )
}