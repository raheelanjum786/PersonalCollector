import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/collection', label: 'Collection' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: 'background 0.4s ease, box-shadow 0.4s ease, padding 0.4s ease',
        background: scrolled
          ? 'rgba(13,27,62,0.97)'
          : 'transparent',
        boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.3)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <nav
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: scrolled ? '0.75rem 2rem' : '1.25rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'padding 0.4s ease',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
        >
          <span
            style={{
              width: 32, height: 32,
              borderRadius: '50%',
              background: 'var(--gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem',
              fontFamily: 'var(--display)',
              color: 'var(--navy)',
              letterSpacing: '0.05em',
            }}
          >
            DD
          </span>
          <span
            style={{
              fontFamily: 'var(--display)',
              fontSize: '1.4rem',
              letterSpacing: '0.08em',
              color: 'var(--cream)',
            }}
          >
            DAILY DAIRY
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}
          className="hidden-mobile"
        >
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/collection"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--navy)',
              background: 'var(--gold)',
              padding: '0.45rem 1rem',
              borderRadius: '2px',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
            onMouseLeave={e => e.target.style.background = 'var(--gold)'}
          >
            View All →
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'none',
            flexDirection: 'column', gap: '5px', padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2,
              background: 'var(--cream)',
              borderRadius: 2,
              transition: 'transform 0.3s, opacity 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                : i === 1 ? 'scale(0)'
                : 'rotate(-45deg) translate(5px,-5px)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          background: 'rgba(13,27,62,0.98)',
          borderTop: '1px solid rgba(201,168,76,0.2)',
          padding: '1.5rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '0.9rem' }}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}