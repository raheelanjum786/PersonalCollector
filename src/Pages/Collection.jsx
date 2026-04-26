import { useState } from 'react'
import CollectionCard from '../Components/CollectionCard'
import SectionHeader from '../Components/SectionHeader'
import MarqueeBanner from '../Components/MarqueeBanner'
import { Items } from "../data/Items"

const CONDITIONS = ['All', 'Excellent', 'Very Good', 'Good', 'Fair', 'Worn']
const ERAS = ['All', '1920s', '1930s', '1940s', '1950s', '1960s', '1970s']

export default function Collection() {
  const [condFilter, setCondFilter] = useState('All')
  const [eraFilter, setEraFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = Items.filter(item => {
    const matchCond = condFilter === 'All' || item.condition === condFilter
    const matchEra = eraFilter === 'All' || item.era.includes(eraFilter.replace('s', ''))
    const matchSearch = search === '' ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.dairy.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase())
    return matchCond && matchEra && matchSearch
  })

  const FilterBtn = ({ label, active, onClick }) => (
    <button
      onClick={onClick}
      style={{
        fontFamily: 'var(--mono)',
        fontSize: '0.62rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '0.4rem 0.9rem',
        borderRadius: '2px',
        border: active
          ? '1px solid var(--gold)'
          : '1px solid rgba(245,239,224,0.15)',
        background: active ? 'var(--gold)' : 'transparent',
        color: active ? 'var(--navy)' : 'rgba(245,239,224,0.6)',
        cursor: 'pointer',
        transition: 'all 0.2s',
        fontWeight: active ? 500 : 300,
      }}
    >
      {label}
    </button>
  )

  return (
    <div style={{ background: 'var(--navy)', minHeight: '100vh' }}>
      {/* Page Header */}
      <section style={{
        padding: '10rem 2rem 4rem',
        background: 'linear-gradient(180deg, var(--navy-mid) 0%, var(--navy) 100%)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeader
            eyebrow={`${items.length} Caps Catalogued`}
            title="THE FULL COLLECTION"
            subtitle="Every milk cap in the archive, catalogued by era, condition, and dairy."
            light
          />

          {/* Search & Filters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {/* Search */}
            <input
              type="text"
              placeholder="Search by name, dairy, or location..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(245,239,224,0.12)',
                borderRadius: '2px',
                padding: '0.75rem 1.2rem',
                color: 'var(--cream)',
                outline: 'none',
                maxWidth: '440px',
                width: '100%',
              }}
            />

            {/* Condition filter */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                color: 'rgba(245,239,224,0.35)',
                textTransform: 'uppercase',
                marginRight: '0.25rem',
              }}>
                Condition:
              </span>
              {CONDITIONS.map(c => (
                <FilterBtn
                  key={c}
                  label={c}
                  active={condFilter === c}
                  onClick={() => setCondFilter(c)}
                />
              ))}
            </div>

            {/* Era filter */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                color: 'rgba(245,239,224,0.35)',
                textTransform: 'uppercase',
                marginRight: '0.25rem',
              }}>
                Era:
              </span>
              {ERAS.map(e => (
                <FilterBtn
                  key={e}
                  label={e}
                  active={eraFilter === e}
                  onClick={() => setEraFilter(e)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <MarqueeBanner dark />

      {/* Grid */}
      <section style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {filtered.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '6rem 2rem',
              fontFamily: 'var(--mono)',
              fontSize: '0.8rem',
              color: 'rgba(245,239,224,0.35)',
              letterSpacing: '0.1em',
            }}>
              No caps found matching your filters.
            </div>
          ) : (
            <>
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                color: 'rgba(245,239,224,0.35)',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}>
                Showing {filtered.length} of {items.length} caps
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '1.25rem',
              }}>
                {filtered.map((item, i) => (
                  <CollectionCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}