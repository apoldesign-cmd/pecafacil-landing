// Cadastro pela placa + scanner
function ScreenScan({ onBack, onDone }) {
  const [stage, setStage] = useState('entry'); // entry | scanning
  const [plate, setPlate] = useState('ABC1D23');
  const [count, setCount] = useState(0);
  const cats = ['Motor', 'Câmbio', 'Lataria', 'Faróis', 'Interior', 'Elétrica'];
  const [activeCat, setActiveCat] = useState(0);

  React.useEffect(() => {
    if (stage !== 'scanning') return;
    const total = 47;
    const t = setInterval(() => {
      setCount(c => {
        if (c >= total) { clearInterval(t); setTimeout(onDone, 700); return total; }
        return c + 1;
      });
    }, 55);
    const t2 = setInterval(() => setActiveCat(a => (a + 1) % cats.length), 420);
    return () => { clearInterval(t); clearInterval(t2); };
  }, [stage]);

  return (
    <React.Fragment>
      <div className="appbar">
        <button className="iconbtn" onClick={onBack}><Icon name="chevL" /></button>
        <div className="title" style={{ fontSize: 18 }}>Cadastrar sucata</div>
      </div>
      <div className="content fade" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 14 }}>
        {stage === 'entry' && (
          <React.Fragment>
            <p className="muted" style={{ fontSize: 14, textAlign: 'center', margin: '4px 24px 22px', lineHeight: 1.5 }}>
              Digite a placa e o PeçaFácil explode todas as peças do modelo.
            </p>
            <Plate value={plate || 'ABC0000'} />
            <div className="field" style={{ width: '100%', marginTop: 26 }}>
              <label>Placa do veículo</label>
              <input className="inp" value={plate} maxLength={7} onChange={e => setPlate(e.target.value.toUpperCase())}
                style={{ textAlign: 'center', fontSize: 22, fontWeight: 700, letterSpacing: '.18em', fontVariantNumeric: 'tabular-nums' }} />
            </div>
            <button className="btn btn-primary" style={{ marginTop: 22 }} onClick={() => setStage('scanning')}>
              <Icon name="scan" /> Escanear veículo
            </button>
            <p className="muted" style={{ fontSize: 12, marginTop: 14 }}>VW Gol 1.6 · 2014 · detectado</p>
          </React.Fragment>
        )}

        {stage === 'scanning' && (
          <React.Fragment>
            <div style={{ position: 'relative', marginTop: 8 }}>
              <Plate value={plate} />
              <div style={{ position: 'absolute', inset: -6, border: '2px solid var(--brand)', borderRadius: 14, animation: 'pulse 1.1s ease-out infinite' }}></div>
            </div>
            <div className="num" style={{ fontSize: 56, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-.03em', marginTop: 28, lineHeight: 1 }}>{count}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-2)', marginBottom: 18 }}>peças detectadas de 47</div>

            <div style={{ width: '100%', height: 6, background: 'var(--border)', borderRadius: 999, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(count/47)*100}%`, background: 'linear-gradient(90deg, var(--senna-green), var(--senna-yellow))', transition: 'width .1s linear' }}></div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: 22 }}>
              {cats.map((c, i) => (
                <span key={c} style={{ fontSize: 13, fontWeight: 600, padding: '7px 13px', borderRadius: 999, transition: 'all .3s',
                  background: i === activeCat ? 'var(--brand)' : '#fff', color: i === activeCat ? '#fff' : 'var(--text-2)',
                  border: '1px solid', borderColor: i === activeCat ? 'var(--brand)' : 'var(--border)' }}>{c}</span>
              ))}
            </div>
            <p className="muted" style={{ fontSize: 13, marginTop: 22 }}>Sugerindo preços do Mercado Livre…</p>
          </React.Fragment>
        )}
      </div>
      <style>{`@keyframes pulse{0%{opacity:.9;transform:scale(1)}100%{opacity:0;transform:scale(1.08)}}`}</style>
    </React.Fragment>
  );
}
Object.assign(window, { ScreenScan });
