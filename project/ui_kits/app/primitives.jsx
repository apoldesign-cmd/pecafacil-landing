// PeçaFácil UI Kit — shared primitives (Lucide-style icons, plate, logo, etc.)
const { useState } = React;

// Curated Lucide 2px-stroke icon paths
const ICONS = {
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  box: '<path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  chevR: '<path d="m9 18 6-6-6-6"/>',
  chevL: '<path d="m15 18-6-6 6-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3"/>',
  tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"/>',
  sparkles: '<path d="M9.94 4.66 11 8l3.34 1.06L11 10.12 9.94 13.46 8.88 10.12 5.54 9.06 8.88 8z"/><path d="M18 4v4M20 6h-4M18 14v3M19.5 15.5h-3"/>',
  trend: '<path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
};
function Icon({ name, size = 20, stroke = 2, style }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={style}
    dangerouslySetInnerHTML={{ __html: ICONS[name] || '' }} />;
}

function Stripe({ h = 28, style }) {
  return <span className="stripe" style={{ height: h, ...style }}><i className="g"></i><i className="y"></i></span>;
}

function Logo({ size = 26, mono }) {
  const navy = mono ? '#fff' : '#212E50', blue = mono ? '#fff' : '#3B5391';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="21" fill={navy} />
        <circle cx="24" cy="24" r="8" fill="#fff" />
        <circle cx="24" cy="24" r="4.4" fill={blue} />
        <g fill={navy}>
          {[0,45,90,135,180,225,270,315].map(a => (
            <rect key={a} x="21.5" y="0.5" width="5" height="7" rx="1.5"
              transform={`rotate(${a} 24 24)`} />
          ))}
        </g>
      </svg>
      <span style={{ fontWeight: 800, fontSize: size * 0.72, letterSpacing: '-0.02em' }}>
        <span style={{ color: navy }}>Peça</span><span style={{ color: blue }}>Fácil</span>
      </span>
    </span>
  );
}

// Stylized Mercosul plate
function Plate({ value = 'ABC1D23', scale = 1 }) {
  return (
    <div style={{ width: 240 * scale, borderRadius: 9, overflow: 'hidden', border: '3px solid #111', background: '#fff', boxShadow: 'var(--shadow-md)' }}>
      <div style={{ background: '#0A3D91', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3px 9px' }}>
        <span style={{ fontSize: 9 * scale, fontWeight: 700, letterSpacing: '.14em' }}>MERCOSUL</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 9 * scale, fontWeight: 700, letterSpacing: '.16em' }}>BRASIL</span>
          <span style={{ width: 15, height: 10, borderRadius: 2, background: '#009C3B', position: 'relative' }}>
            <span style={{ position: 'absolute', inset: 2, background: '#FFDF00', clipPath: 'polygon(50% 0,100% 50%,50% 100%,0 50%)' }}></span>
          </span>
        </span>
      </div>
      <div style={{ fontSize: 38 * scale, fontWeight: 800, letterSpacing: '.10em', textAlign: 'center', color: '#111', padding: `${6*scale}px 0 ${8*scale}px`, fontVariantNumeric: 'tabular-nums' }}>{value}</div>
    </div>
  );
}

function Pill({ status }) {
  const map = { sale: ['pill-sale', 'à venda'], pend: ['pill-pend', 'pendente'], sold: ['pill-sold', 'vendida'], draft: ['pill-draft', 'rascunho'] };
  const [cls, label] = map[status] || map.sale;
  return <span className={`pill ${cls}`}><span className="dot" style={{ background: 'currentColor' }}></span>{label}</span>;
}

function PartThumb({ tone = '#EEF2F7', size = 56 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 12, background: tone, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B6C2D2', flex: '0 0 auto' }}>
      <Icon name="gear" size={size * 0.42} stroke={1.4} />
    </div>
  );
}

Object.assign(window, { Icon, Stripe, Logo, Plate, Pill, PartThumb });
