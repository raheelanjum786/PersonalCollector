import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--navy)',
      borderTop: '1px solid rgba(201,168,76,0.2)',
      padding: '4rem 2rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Large background text */}
      <div style={{
        position: 'absolute',
        bottom: '-1rem', left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'var(--display)',
        fontSize: 'clamp(4rem, 15vw, 12rem)',
        color: 'rgba(255,255,255,0.03)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        letterSpacing: '0.05em',
        userSelect: 'none',
      }}>
        DAILY DAIRY
      </div>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: 'var(--display)',
            fontSize: '2rem',
            color: 'var(--cream)',
            letterSpacing: '0.08em',
            marginBottom: '0.75rem',
          }}>
            DAILY DAIRY
          </div>
          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.72rem',
            color: 'rgba(245,239,224,0.5)',
            lineHeight: 1.8,
            maxWidth: '220px',
            letterSpacing: '0.04em',
          }}>
            A personal archive of waxed milk bottle caps — one cap at a time, every day.
          </p>
          <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem' }}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              style={{
                width: 34, height: 34,
                borderRadius: '50%',
                border: '1px solid rgba(201,168,76,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold)',
                fontSize: '0.8rem',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.borderColor = 'var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)' }}
            >
              IG
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1.25rem',
          }}>
            Navigate
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {[
              { to: '/', label: 'Home' },
              { to: '/collection', label: 'Collection' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.72rem',
                  color: 'rgba(245,239,224,0.6)',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--gold-light)'}
                onMouseLeave={e => e.target.style.color = 'rgba(245,239,224,0.6)'}
              >
                → {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1.25rem',
          }}>
            The Archive
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              '347+ Caps Catalogued',
              'Oldest: Circa 1920s',
              '38 States Represented',
              '12 Years of Collecting',
            ].map(txt => (
              <span key={txt} style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.7rem',
                color: 'rgba(245,239,224,0.5)',
                letterSpacing: '0.04em',
              }}>
                {txt}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1280px',
        margin: '3rem auto 0',
        paddingTop: '1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.65rem',
          color: 'rgba(245,239,224,0.3)',
          letterSpacing: '0.08em',
        }}>
          © {new Date().getFullYear()} DAILY DAIRY — MADE BY Uswa
        </span>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.65rem',
          color: 'rgba(245,239,224,0.3)',
          letterSpacing: '0.08em',
        }}>
          A MILK CAP A DAY, EVERY DAY.
        </span>
      </div>
    </footer>
  )
}