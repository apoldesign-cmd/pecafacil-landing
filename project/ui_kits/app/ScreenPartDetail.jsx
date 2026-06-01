// Part detail — price intelligence + channels + AI description
function ScreenPartDetail({ part, onBack }) {
  const p = part || PARTS[0];
  const [channels, setChannels] = useState(CHANNELS.map(c => c.on));
  const base = p.price;
  const prices = [
    { k: 'Menor', v: Math.round(base * 0.83) },
    { k: 'Médio', v: Math.round(base * 0.96) },
    { k: 'Recomendado', v: base, rec: true },
    { k: 'Maior', v: Math.round(base * 1.23) },
  ];
  return (
    <React.Fragment>
      <div className="appbar">
        <button className="iconbtn" onClick={onBack}><Icon name="chevL" /></button>
        <div className="title" style={{ fontSize: 18 }}>Detalhe da peça</div>
        <div className="spacer"></div>
        <button className="iconbtn"><Icon name="camera" /></button>
      </div>
      <div className="content fade">
        <div style={{ height: 168, borderRadius: 14, background: '#EEF2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B6C2D2', position: 'relative', marginBottom: 14 }}>
          {p.hot && <span style={{ position: 'absolute', top: 10, left: 10, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', padding: '4px 9px', borderRadius: 6, background: '#FEF3E2', color: '#B45309' }}>Procurada</span>}
          <Icon name="camera" size={40} stroke={1.4} />
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, color: 'var(--text-2)', fontWeight: 600, lineHeight: 1.4 }}>{p.cat} · Condição {p.cond}</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-.02em', margin: '3px 0 0', lineHeight: 1.15 }}>{p.name}</h2>
          </div>
          <Pill status={p.status} />
        </div>

        <div className="card" style={{ padding: 15, marginTop: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
            <Icon name="trend" size={17} style={{ color: 'var(--brand)' }} />
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)' }}>Inteligência de preço</span>
            <span style={{ flex: 1 }}></span>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-2)', whiteSpace: 'nowrap', flexShrink: 0 }}>Mercado Livre</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
            {prices.map(pr => (
              <div key={pr.k} style={{ textAlign: 'center', padding: '10px 4px', borderRadius: 10, background: pr.rec ? 'var(--success-bg)' : '#F8FAFC', border: pr.rec ? '1px solid var(--success)' : '1px solid var(--border)' }}>
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.02em', color: pr.rec ? 'var(--success)' : 'var(--text-2)' }}>{pr.k}</div>
                <div className="num" style={{ fontSize: 14, fontWeight: 800, color: pr.rec ? 'var(--success)' : 'var(--text)', marginTop: 3 }}>{brl(pr.v)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: 15, marginTop: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)' }}>Canais de venda</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 8 }}>
            {CHANNELS.map((c, i) => (
              <button key={c.id} onClick={() => setChannels(ch => ch.map((v, j) => j === i ? !v : v))}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 4px', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                <span style={{ width: 20, height: 20, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: channels[i] ? 'var(--brand)' : '#fff', border: channels[i] ? 'none' : '1.5px solid var(--border)', color: '#fff' }}>
                  {channels[i] && <Icon name="check" size={13} stroke={3} />}
                </span>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: 15, marginTop: 12, background: 'var(--info-bg)', border: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
            <Icon name="sparkles" size={16} style={{ color: 'var(--info)' }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--brand-700)' }}>Descrição gerada por IA</span>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--brand-700)', margin: 0 }}>
            ✅ {p.name} para VW Gol 2014. Peça usada original, procedência garantida. Enviamos para todo o Brasil.
          </p>
        </div>

        <button className="btn btn-primary" style={{ marginTop: 18 }}>
          <Icon name="tag" /> Publicar em {channels.filter(Boolean).length} canais
        </button>
      </div>
    </React.Fragment>
  );
}
Object.assign(window, { ScreenPartDetail });
