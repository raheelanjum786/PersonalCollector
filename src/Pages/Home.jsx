import { Link } from 'react-router-dom'
import MarqueeBanner from '../Components/MarqueeBanner'
import StatsRow from '../Components/StatsRow'
import CollectionCard from '../Components/CollectionCard'
import SectionHeader from '../Components/SectionHeader'
import items from '../data/Items'

export default function Home() {
  const featured = items.slice(0, 4)

  return (
    <div>
      {/* HERO */}
      <section style={{
        background: 'var(--navy)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '8rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background decorative rings */}
        {[0.08, 0.15, 0.22].map((opacity, i) => (
          <div key={i} style={{
            position: 'absolute',
            right: '-5%', top: '50%',
            transform: 'translateY(-50%)',
            width: `${35 + i * 10}vw`,
            height: `${35 + i * 10}vw`,
            borderRadius: '50%',
            border: `1px solid rgba(201,168,76,${opacity})`,
            pointerEvents: 'none',
          }} />
        ))}

        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Eyebrow */}
          <div
            className="animate-fade-up opacity-0"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1.5rem',
            }}
          >
            Personal Collectors Archive — Est. 2012
          </div>

          {/* Hero title */}
          <h1
            className="animate-fade-up opacity-0 delay-100"
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(4rem, 14vw, 14rem)',
              color: 'var(--cream)',
              letterSpacing: '0.02em',
              lineHeight: 0.9,
              marginBottom: '1.5rem',
            }}
          >
            DAILY<br />
            <span style={{ color: 'var(--gold)' }}>DAIRY</span>
          </h1>

          {/* Divider */}
          <div
            className="animate-fade-up opacity-0 delay-200"
            style={{
              width: '100%', height: '1px',
              background: 'linear-gradient(90deg, rgba(201,168,76,0.6) 0%, rgba(201,168,76,0.1) 100%)',
              marginBottom: '1.5rem',
            }}
          />

          {/* Tagline + CTA */}
          <div
            className="animate-fade-up opacity-0 delay-300"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <p style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
              color: 'rgba(245,239,224,0.75)',
              fontStyle: 'italic',
              maxWidth: '520px',
              lineHeight: 1.5,
            }}>
              Dive into my collection — a milk cap a day, every day.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/collection"
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--navy)',
                  background: 'var(--gold)',
                  padding: '0.9rem 2rem',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'background 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
                onMouseLeave={e => e.target.style.background = 'var(--gold)'}
              >
                Browse the Archive →
              </Link>
              <Link
                to="/about"
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--cream)',
                  background: 'transparent',
                  padding: '0.9rem 2rem',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  border: '1px solid rgba(245,239,224,0.25)',
                  transition: 'border-color 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => e.target.style.borderColor = 'rgba(201,168,76,0.7)'}
                onMouseLeave={e => e.target.style.borderColor = 'rgba(245,239,224,0.25)'}
              >
                About me
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="animate-fade-in opacity-0 delay-600"
            style={{
              marginTop: '5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <div style={{
              width: 1, height: 40,
              background: 'linear-gradient(to bottom, var(--gold), transparent)',
            }} />
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(245,239,224,0.35)',
            }}>
              Scroll to explore
            </span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeBanner />

      {/* STATS */}
      <StatsRow />

      {/* FEATURED COLLECTION */}
      <section style={{
        background: 'var(--navy)',
        padding: '6rem 2rem',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}>
            <SectionHeader
              eyebrow="Featured Pieces"
              title="FROM THE ARCHIVE"
              light
            />
            <Link
              to="/collection"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(201,168,76,0.4)',
                paddingBottom: '2px',
                transition: 'border-color 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              View All 347+ Caps →
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}>
            {featured.map((item, i) => (
              <CollectionCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE dark */}
      <MarqueeBanner dark />

      {/* CTA SECTION */}
      <section style={{
        background: 'var(--cream)',
        padding: '7rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative large circles */}
        <div style={{
          position: 'absolute',
          left: '-10%', top: '50%',
          transform: 'translateY(-50%)',
          width: '40vw', height: '40vw',
          borderRadius: '50%',
          border: '1px solid rgba(13,27,62,0.06)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          right: '-5%', top: '50%',
          transform: 'translateY(-50%)',
          width: '30vw', height: '30vw',
          borderRadius: '50%',
          border: '1px solid rgba(13,27,62,0.06)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1rem',
          }}>
            Connect
          </div>
          <h2 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(2.5rem, 8vw, 7rem)',
            color: 'var(--navy)',
            letterSpacing: '0.03em',
            lineHeight: 0.95,
            marginBottom: '1.5rem',
          }}>
            FOLLOW<br />ON INSTAGRAM
          </h2>
          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.8rem',
            color: 'rgba(13,27,62,0.55)',
            letterSpacing: '0.06em',
            maxWidth: '400px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.8,
          }}>
            New caps posted daily. Join the community of milk cap collectors worldwide.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--cream)',
              background: 'var(--navy)',
              padding: '1rem 2.5rem',
              borderRadius: '2px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--navy-light)'}
            onMouseLeave={e => e.target.style.background = 'var(--navy)'}
          >
            @DailyDairy on Instagram
          </a>
        </div>
      </section>
    </div>
  )
}