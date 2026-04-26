import { useState } from 'react'
import MarqueeBanner from '../Components/MarqueeBanner'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    fontFamily: 'var(--mono)',
    fontSize: '0.78rem',
    letterSpacing: '0.04em',
    background: 'rgba(245,239,224,0.04)',
    border: '1px solid rgba(245,239,224,0.12)',
    borderRadius: '2px',
    padding: '0.9rem 1.1rem',
    color: 'var(--cream)',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        padding: '10rem 2rem 5rem',
        background: 'linear-gradient(180deg, var(--navy-mid) 0%, var(--navy) 100%)',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1rem',
          }}>
            Get in Touch
          </div>
          <h1 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(3rem, 9vw, 8rem)',
            color: 'var(--cream)',
            letterSpacing: '0.03em',
            lineHeight: 0.9,
          }}>
            LET'S<br />
            <span style={{ color: 'var(--gold)' }}>CONNECT</span>
          </h1>
        </div>
      </section>

      <MarqueeBanner dark />

      {/* Form + Info */}
      <section style={{ padding: '5rem 2rem 7rem' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* Contact Info */}
          <div>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
              color: 'var(--cream)',
              fontStyle: 'italic',
              fontWeight: 700,
              marginBottom: '1.5rem',
            }}>
              Reach out about caps, trading, or just to say hello.
            </h2>
            <p style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.72rem',
              color: 'rgba(245,239,224,0.5)',
              letterSpacing: '0.04em',
              lineHeight: 1.9,
              marginBottom: '2.5rem',
            }}>
              Whether you've got a cap to trade, a question about the collection, or you're just another milk cap enthusiast — I'd love to hear from you.
            </p>

            {[
              { icon: '📍', label: 'Location', value: 'Pennsylvania, USA' },
              { icon: '📷', label: 'Instagram', value: '@DailyDairy' },
              { icon: '📬', label: 'Response Time', value: 'Usually within 48 hours' },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                marginBottom: '1.25rem',
                padding: '1rem',
                border: '1px solid rgba(245,239,224,0.07)',
                borderRadius: '3px',
              }}>
                <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '0.2rem',
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.75rem',
                    color: 'rgba(245,239,224,0.7)',
                  }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div style={{
                padding: '3rem',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '4px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🥛</div>
                <h3 style={{
                  fontFamily: 'var(--display)',
                  fontSize: '2rem',
                  color: 'var(--gold)',
                  letterSpacing: '0.08em',
                  marginBottom: '0.75rem',
                }}>
                  MESSAGE SENT!
                </h3>
                <p style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.72rem',
                  color: 'rgba(245,239,224,0.5)',
                  letterSpacing: '0.04em',
                  lineHeight: 1.8,
                }}>
                  Thanks for reaching out. I'll get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.58rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      display: 'block',
                      marginBottom: '0.4rem',
                    }}>Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="Your name"
                      onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(245,239,224,0.12)'}
                    />
                  </div>
                  <div>
                    <label style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.58rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      display: 'block',
                      marginBottom: '0.4rem',
                    }}>Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="your@email.com"
                      onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(245,239,224,0.12)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}>Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(245,239,224,0.12)'}
                  >
                    <option value="" style={{ background: 'var(--navy)' }}>Select a topic…</option>
                    <option value="trade" style={{ background: 'var(--navy)' }}>Trading / Selling a Cap</option>
                    <option value="question" style={{ background: 'var(--navy)' }}>Question About the Collection</option>
                    <option value="collab" style={{ background: 'var(--navy)' }}>Collaboration</option>
                    <option value="other" style={{ background: 'var(--navy)' }}>Other</option>
                  </select>
                </div>

                <div>
                  <label style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}>Message</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="Tell me about your cap, your question, or just say hello..."
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(245,239,224,0.12)'}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--navy)',
                    background: 'var(--gold)',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontWeight: 500,
                    transition: 'background 0.2s',
                    marginTop: '0.5rem',
                  }}
                  onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
                  onMouseLeave={e => e.target.style.background = 'var(--gold)'}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}