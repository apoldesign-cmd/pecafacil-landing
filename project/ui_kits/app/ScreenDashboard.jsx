// Dashboard (Painel)
function KpiCard({ k, v, delta, deltaColor, accent }) {
  return (
    <div className="card" style={{ padding: '14px 15px', position: 'relative', overflow: 'hidden', flex: 1 }}>
      {accent && <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'linear-gradient(var(--senna-green) 0 50%, var(--senna-yellow) 50% 100%)' }}></span>}
      <div style={{ fontSize: 12, color: 'var(--text-2)', fontWeight: 600, marginBottom: 5 }}>{k}</div>
      <div className="num" style={{ fontSize: 26, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-.02em', lineHeight: 1 }}>{v}</div>
      {delta && <div style={{ fontSize: 12, fontWeight: 600, marginTop: 5, color: deltaColor }}>{delta}</div>}
    </div>
  );
}

function ScreenDashboard({ onScan, onOpenPart }) {
  const recent = PARTS.slice(0, 4);
  return (
    <React.Fragment>
      <div className="appbar">
        <div><div className="sub">Desmanche Silva</div><div className="title">Painel</div></div>
        <div className="spacer"></div>
        <button className="iconbtn"><Icon name="bell" /></button>
      </div>
      <div className="content fade">
        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
          <KpiCard k="Peças catalogadas" v="271" delta="▲ +47 hoje" deltaColor="var(--success)" accent />
          <KpiCard k="Anunciado" v="80%" delta="217 de 271" deltaColor="var(--text-2)" />
        </div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
          <KpiCard k="Receita do mês" v="R$ 38,4k" delta="▲ +30% margem" deltaColor="var(--success)" />
          <KpiCard k="Sucatas ativas" v="6" delta="2 em catalogação" deltaColor="var(--text-2)" />
        </div>

        <div className="card" style={{ display: 'flex', gap: 11, padding: '14px 15px', marginBottom: 18, background: 'var(--info-bg)', border: 'none' }}>
          <div style={{ color: 'var(--info)' }}><Icon name="sparkles" size={18} /></div>
          <div style={{ fontSize: 13, lineHeight: 1.45, color: 'var(--brand-700)' }}>
            <b>Insight da IA</b><br />Anuncie 5 peças de alta procura — elas vendem 2× mais rápido.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
          <span className="eyebrow">Catalogado recentemente</span>
          <span style={{ flex: 1 }}></span>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--brand)' }}>Ver tudo</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {recent.map(p => (
            <button key={p.id} onClick={() => onOpenPart(p)} className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 10, textAlign: 'left', cursor: 'pointer', font: 'inherit' }}>
              <PartThumb />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, color: 'var(--text-2)', fontWeight: 600 }}>{p.cat} · {p.cond}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy)', letterSpacing: '-.01em' }}>{p.name}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="num" style={{ fontSize: 15, fontWeight: 800, color: 'var(--text)' }}>{brl(p.price)}</div>
                <Pill status={p.status} />
              </div>
            </button>
          ))}
        </div>

        <button className="btn btn-primary" style={{ marginTop: 18 }} onClick={onScan}>
          <Icon name="scan" /> Cadastrar nova sucata
        </button>
      </div>
    </React.Fragment>
  );
}
Object.assign(window, { ScreenDashboard });
