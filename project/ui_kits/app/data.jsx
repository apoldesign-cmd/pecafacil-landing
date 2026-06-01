// Sample data for the PeçaFácil app kit
const PARTS = [
  { id:1, name:'Cabeçote', cat:'Motor', cond:'Boa', price:1430, status:'sale', hot:true },
  { id:2, name:'Câmbio automático', cat:'Transmissão', cond:'Ótima', price:4420, status:'sale', hot:true },
  { id:3, name:'Farol dianteiro esq.', cat:'Iluminação', cond:'Ótima', price:340, status:'pend' },
  { id:4, name:'Porta diant. direita', cat:'Lataria', cond:'Boa', price:530, status:'sale' },
  { id:5, name:'Alternador', cat:'Elétrica', cond:'Boa', price:310, status:'sold' },
  { id:6, name:'Parabrisa', cat:'Vidros', cond:'Regular', price:300, status:'draft' },
  { id:7, name:'Banco dianteiro', cat:'Interior', cond:'Ótima', price:880, status:'sale', hot:true },
  { id:8, name:'Compressor de ar', cat:'Ar-cond.', cond:'Boa', price:610, status:'sale' },
];
const CHANNELS = [
  { id:'ml', name:'Mercado Livre', on:true },
  { id:'olx', name:'OLX', on:true },
  { id:'fb', name:'Facebook', on:false },
  { id:'loja', name:'Loja própria', on:true },
];
const brl = n => 'R$ ' + n.toLocaleString('pt-BR');
Object.assign(window, { PARTS, CHANNELS, brl });
