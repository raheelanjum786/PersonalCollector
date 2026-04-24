import { Link } from 'react-router-dom'
import MarqueeBanner from '../components/MarqueeBanner'

export default function About() {
  const timeline = [
    { year: '2012', title: 'The First Cap', text: 'Found a weathered Borden cap at a flea market in Pennsylvania. Something clicked.' },
    { year: '2015', title: 'The Archive Begins', text: 'What started as a shoebox became a catalogued system. 60 caps, meticulously documented.' },
    { year: '2018', title: 'Going Online', text: 'Started posting one cap a day on Instagram. The milk cap community found me.' },
    { year: '2021', title: '200 Caps', text: 'Crossed the 200-cap milestone. Started sourcing from estate sales across 20+ states.' },
    { year: '2024', title: '347 Caps & Counting', text: 'The collection now spans 1920 to 1980, representing over 38 states.' },
  ]

  return (
    <div style={{ background: 'var(--cream)' }}>
      {/* Hero */}
      <section style={{
        background: 'var(--navy)',
        padding: '10rem 2rem 6rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          right: '-8%', bottom: '-20%',
          width: '50vw', height: '50vw',
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.1)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1rem',
            }}>
              The Collector
            </div>
            <h1 style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              color: 'var(--cream)',
              letterSpacing: '0.04em',
              lineHeight: 0.92,
              marginBottom: '1.5rem',
            }}>
              MADE<br />BY<br /><span style={{ color: 'var(--gold)' }}>Uswa</span>
            </h1>
            <p style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.78rem',
              color: 'rgba(245,239,224,0.6)',
              letterSpacing: '0.04em',
              lineHeight: 1.9,
              maxWidth: '420px',
            }}>
              I'm Uswa — a collector, archivist, and lifelong admirer of the golden age of American dairy. Milk bottle caps tell a story about local farms, graphic design history, and a time when your milk came from down the road.
            </p>
          </div>

          {/* Cap artwork */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="animate-spin-slow" style={{
              width: 'min(280px, 70vw)',
              height: 'min(280px, 70vw)',
              borderRadius: '50%',
              border: '2px dashed rgba(201,168,76,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                width: '80%', height: '80%',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 40% 40%, rgba(201,168,76,0.15), rgba(13,27,62,0.8))',
                border: '2px solid rgba(201,168,76,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column',
                gap: '0.5rem',
              }}>
                <span style={{ fontSize: '3rem' }}>🥛</span>
                <span style={{
                  fontFamily: 'var(--display)',
                  fontSize: '1.1rem',
                  color: 'var(--gold)',
                  letterSpacing: '0.1em',
                }}>
                  DAILY DAIRY
                </span>
                <span style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.55rem',
                  color: 'rgba(201,168,76,0.6)',
                  letterSpacing: '0.12em',
                }}>
                  EST. 2012
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeBanner />

      {/* Timeline */}
      <section style={{ padding: '6rem 2rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '0.75rem',
          }}>
            The Story
          </div>
          <h2 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            color: 'var(--navy)',
            letterSpacing: '0.04em',
            lineHeight: 0.95,
            marginBottom: '4rem',
          }}>
            HOW IT STARTED
          </h2>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: 72, top: 0, bottom: 0,
              width: 1,
              background: 'linear-gradient(to bottom, var(--gold) 0%, rgba(201,168,76,0.1) 100%)',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {timeline.map(({ year, title, text }, i) => (
                <div key={year} style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }}>
                  <div style={{
                    fontFamily: 'var(--display)',
                    fontSize: '1.1rem',
                    color: 'var(--gold)',
                    letterSpacing: '0.06em',
                    minWidth: 56,
                    textAlign: 'right',
                    paddingTop: '2px',
                  }}>
                    {year}
                  </div>
                  {/* Dot */}
                  <div style={{
                    width: 10, height: 10,
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    border: '2px solid var(--cream)',
                    marginTop: '6px',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 1,
                    marginLeft: 8,
                  }} />
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '1.1rem',
                      color: 'var(--navy)',
                      fontWeight: 700,
                      fontStyle: 'italic',
                      marginBottom: '0.4rem',
                    }}>
                      {title}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.72rem',
                      color: 'rgba(13,27,62,0.6)',
                      letterSpacing: '0.04em',
                      lineHeight: 1.8,
                    }}>
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{
        background: 'var(--navy)',
        padding: '6rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.3rem, 3.5vw, 2rem)',
            color: 'var(--cream)',
            fontStyle: 'italic',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
          }}>
            "Every cap is a tiny time capsule — a circle of waxed cardboard that once sealed a bottle of milk delivered to someone's doorstep, decades ago."
          </div>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
          }}>
            — Uswa, Daily Dairy
          </div>

          <div style={{ marginTop: '3rem' }}>
            <Link
              to="/collection"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--navy)',
                background: 'var(--gold)',
                padding: '0.9rem 2.5rem',
                borderRadius: '2px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
              onMouseLeave={e => e.target.style.background = 'var(--gold)'}
            >
              Explore the Collection →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}