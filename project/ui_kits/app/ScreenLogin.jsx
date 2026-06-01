// Login screen
function ScreenLogin({ onLogin }) {
  const [email, setEmail] = useState('joao@desmanchesilva.com.br');
  const [pwd, setPwd] = useState('••••••••');
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--navy)', color: '#fff' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, display: 'flex' }}>
        <i style={{ flex: 1, background: 'var(--senna-green)' }}></i><i style={{ flex: 1, background: 'var(--senna-yellow)' }}></i>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 28px' }}>
        <div style={{ marginBottom: 28 }}><Logo size={34} mono /></div>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-.02em', margin: '0 0 6px', lineHeight: 1.15 }}>Bem-vindo de volta.</h1>
        <p style={{ color: '#A8B3CE', fontSize: 15, margin: '0 0 28px' }}>Entre para gerir seu pátio.</p>

        <div className="field" style={{ marginBottom: 14 }}>
          <label style={{ color: '#C7D0E6' }}>E-mail</label>
          <input className="inp" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="field" style={{ marginBottom: 22 }}>
          <label style={{ color: '#C7D0E6' }}>Senha</label>
          <input className="inp" type="password" value={pwd} onChange={e => setPwd(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={onLogin}>Entrar</button>
        <button className="btn btn-ghost" style={{ color: '#A8B3CE', marginTop: 8 }}>Criar conta grátis</button>
      </div>
      <p style={{ textAlign: 'center', color: '#6B7795', fontSize: 12, padding: '0 0 26px' }}>Sem cartão · Plano gratuito para sempre</p>
    </div>
  );
}
Object.assign(window, { ScreenLogin });
