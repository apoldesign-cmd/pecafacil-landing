// Catalog (Casa de peça) — grid of part cards
function PartCard({ p, onOpen }) {
  return (
    <button onClick={() => onOpen(p)} className="card" style={{ overflow: 'hidden', textAlign: 'left', cursor: 'pointer', font: 'inherit', padding: 0, display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 96, background: '#EEF2F7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B6C2D2' }}>
        {p.hot && <span style={{ position: 'absolute', top: 7, left: 7, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.04em', padding: '3px 7px', borderRadius: 6, background: '#FEF3E2', color: '#B45309' }}>Procurada</span>}
        <Icon name="gear" size={30} stroke={1.4} />
      </div>
      <div style={{ padding: '10px 11px' }}>
        <div style={{ fontSize: 11, color: 'var(--text-2)', fontWeight: 600 }}>{p.cat} · {p.cond}</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)', letterSpacing: '-.01em', marginBottom: 8, lineHeight: 1.2 }}>{p.name}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="num" style={{ fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap' }}>{brl(p.price)}</span>
          <Pill status={p.status} />
        </div>
      </div>
    </button>
  );
}

function ScreenCatalog({ onOpenPart }) {
  const [filter, setFilter] = useState('Todas');
  const filters = ['Todas', 'Motor', 'Lataria', 'Elétrica', 'Interior'];
  const list = filter === 'Todas' ? PARTS : PARTS.filter(p => p.cat === filter);
  return (
    <React.Fragment>
      <div className="appbar">
        <div><div className="sub">271 peças · 6 sucatas</div><div className="title">Casa de peça</div></div>
        <div className="spacer"></div>
        <button className="iconbtn"><Icon name="search" /></button>
      </div>
      <div style={{ display: 'flex', gap: 8, padding: '0 18px 12px', overflowX: 'auto' }}>
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{ flex: '0 0 auto', fontSize: 13, fontWeight: 600, padding: '7px 14px', borderRadius: 999, cursor: 'pointer',
            border: '1px solid', borderColor: f === filter ? 'var(--brand)' : 'var(--border)',
            background: f === filter ? 'var(--brand)' : '#fff', color: f === filter ? '#fff' : 'var(--text-2)' }}>{f}</button>
        ))}
      </div>
      <div className="content fade" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {list.map(p => <PartCard key={p.id} p={p} onOpen={onOpenPart} />)}
      </div>
    </React.Fragment>
  );
}
Object.assign(window, { ScreenCatalog, PartCard });
