import { TbBeach, TbToolsKitchen2, TbParking, TbShieldCheck } from 'react-icons/tb';
import { Amenity, EventItem, NavLink, Stat, Store, Testimonial } from '@/types';

export const SITE_CONFIG = {
  name: 'Shopping Fortaleza',
  shortName: 'Fortaleza',
  tagline: 'Onde as compras encontram o oceano',
  description:
    'Centro comercial na Baía de Luanda: mais de 150 lojas, gastronomia e lazer com vista panorâmica para o oceano Atlântico.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shopping-fortaleza.example',
  foundedYear: 2013,
  phone: '+244 945 334 434',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? '244945334434',
  email: 'cesarelavoco360@gmail.com',
  address: 'Avenida 4 de Fevereiro, Baía de Luanda, Luanda, Angola',
  openingHours: 'Todos os dias · 09h00 – 22h00',
  mapsEmbed:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED ??
    'https://www.google.com/maps?q=Ba%C3%ADa%20de%20Luanda%2C%20Luanda%2C%20Angola&output=embed',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Sobre', href: '/sobre' },
  { label: 'Lojas', href: '/lojas' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Contactos', href: '/contactos' },
];

export const FOOTER_EXPLORE: NavLink[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Lojas & Marcas', href: '/lojas' },
  { label: 'Eventos', href: '/eventos' },
];

export const FOOTER_SERVICES: NavLink[] = [
  { label: 'Estacionamento', href: '/sobre#comodidades' },
  { label: 'Praça de Alimentação', href: '/lojas' },
  { label: 'Contactos', href: '/contactos' },
  { label: 'Newsletter', href: '/#newsletter' },
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
];

export const STATS: Stat[] = [
  { value: 150, suffix: '+', label: 'Lojas & Marcas' },
  { value: 4.5, decimals: 1, suffix: '★', label: 'Avaliação dos visitantes' },
  { value: 3, label: 'Pisos de experiências' },
  { value: 200, suffix: 'm', label: 'De frente para o mar' },
];

export const AMENITIES: Amenity[] = [
  {
    index: '01',
    icon: TbBeach,
    title: 'Vista Panorâmica',
    description:
      'Terraço e praça superior debruçados sobre a Baía de Luanda — o pôr-do-sol sobre o Atlântico como pano de fundo das suas compras.',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
  },
  {
    index: '02',
    icon: TbToolsKitchen2,
    title: 'Praça de Alimentação',
    description:
      'Mais de 20 espaços de restauração, do café rápido à cozinha de autor, com esplanadas viradas para o mar.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    index: '03',
    icon: TbParking,
    title: 'Estacionamento',
    description:
      'Mil lugares cobertos com acesso direto a cada piso e entrada facilitada pela Marginal.',
    image:
      'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=1200&q=80',
  },
  {
    index: '04',
    icon: TbShieldCheck,
    title: 'Segurança 24h',
    description:
      'Vigilância permanente, videomonitorização e equipas de apoio ao visitante em todos os pisos.',
    image:
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
  },
];

export const STORES: Store[] = [
  {
    slug: 'maré-atelier',
    name: 'Maré Atelier',
    category: 'Moda',
    floor: 'Piso 1',
    image:
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1000&q=80',
    description: 'Moda contemporânea e alfaiataria com inspiração costeira.',
  },
  {
    slug: 'baobá-denim',
    name: 'Baobá Denim',
    category: 'Moda',
    floor: 'Piso 1',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80',
    description: 'Ganga premium e streetwear angolano de autor.',
  },
  {
    slug: 'sol-e-sal-swim',
    name: 'Sol & Sal Swimwear',
    category: 'Moda',
    floor: 'Piso 0',
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=80',
    description: 'Praia, resort e acessórios para os dias de sol.',
  },
  {
    slug: 'nova-electro',
    name: 'Nova Electro',
    category: 'Eletrónica',
    floor: 'Piso 2',
    image:
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1000&q=80',
    description: 'Smartphones, computadores e som das principais marcas.',
  },
  {
    slug: 'pixel-house',
    name: 'Pixel House',
    category: 'Eletrónica',
    floor: 'Piso 2',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80',
    description: 'Gaming, foto e gadgets para criadores.',
  },
  {
    slug: 'atlântico-grill',
    name: 'Atlântico Grill',
    category: 'Restauração',
    floor: 'Piso 3',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    description: 'Grelhados, peixe fresco e esplanada sobre a baía.',
  },
  {
    slug: 'café-quiosque',
    name: 'Café Quiosque',
    category: 'Restauração',
    floor: 'Piso 0',
    image:
      'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=80',
    description: 'Café de especialidade, pastelaria e brunch à beira-mar.',
  },
  {
    slug: 'muxima-doces',
    name: 'Muxima Doces',
    category: 'Restauração',
    floor: 'Piso 1',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80',
    description: 'Gelados, sobremesas e doçaria regional.',
  },
  {
    slug: 'onda-beauty',
    name: 'Onda Beauty & Spa',
    category: 'Serviços',
    floor: 'Piso 2',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
    description: 'Cabeleireiro, estética e bem-estar.',
  },
  {
    slug: 'banco-marginal',
    name: 'Banco Marginal',
    category: 'Serviços',
    floor: 'Piso 0',
    image:
      'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=1000&q=80',
    description: 'Balcão de atendimento e caixas automáticos 24h.',
  },
  {
    slug: 'cinemar',
    name: 'CineMar',
    category: 'Lazer',
    floor: 'Piso 3',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80',
    description: 'Seis salas de cinema com a maior tela da cidade.',
  },
  {
    slug: 'kimba-kids',
    name: 'Kimba Kids Park',
    category: 'Lazer',
    floor: 'Piso 3',
    image:
      'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?auto=format&fit=crop&w=1000&q=80',
    description: 'Parque infantil e diversões para toda a família.',
  },
];

export const EVENTS: EventItem[] = [
  {
    slug: 'noites-de-verao',
    title: 'Noites de Verão na Marginal',
    date: '2026-08-15',
    dateLabel: '15 Ago 2026',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    description: 'Música ao vivo, food trucks e mercado de verão no terraço panorâmico.',
    category: 'Música',
  },
  {
    slug: 'semana-da-moda',
    title: 'Semana da Moda Atlântico',
    date: '2026-09-10',
    dateLabel: '10 Set 2026',
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
    description: 'Desfiles de designers angolanos e lançamentos das marcas do shopping.',
    category: 'Moda',
  },
  {
    slug: 'feira-do-livro',
    title: 'Feira do Livro & Café Literário',
    date: '2026-10-05',
    dateLabel: '05 Out 2026',
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
    description: 'Autores, sessões de autógrafos e conversas ao pôr-do-sol.',
    category: 'Cultura',
  },
  {
    slug: 'mercado-gastronomico',
    title: 'Mercado Gastronómico',
    date: '2026-11-01',
    dateLabel: '01 Nov 2026',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    description: 'Chefs convidados, provas e sabores do mar em edição especial.',
    category: 'Gastronomia',
  },
  {
    slug: 'natal-a-beira-mar',
    title: 'Natal à Beira-Mar',
    date: '2026-12-06',
    dateLabel: '06 Dez 2026',
    image:
      'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=1200&q=80',
    description: 'Iluminações, coro de Natal e atividades para os mais pequenos.',
    category: 'Família',
  },
  {
    slug: 'contagem-decrescente',
    title: 'Contagem Decrescente 2027',
    date: '2026-12-31',
    dateLabel: '31 Dez 2026',
    image:
      'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=1200&q=80',
    description: 'Festa de passagem de ano com DJ set e fogo sobre a baía.',
    category: 'Música',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Nadir Kiala',
    origin: 'Ingombota, Luanda',
    quote:
      'Passo as tardes de sábado aqui. Ver o mar do terraço enquanto tomo café não tem preço — nenhum outro shopping da cidade tem esta vista.',
    rating: 5,
  },
  {
    name: 'Teresa Mendes',
    origin: 'Talatona, Luanda',
    quote:
      'Encontro tudo num só sítio: as marcas que gosto, restaurantes bons e cinema para levar os miúdos. O estacionamento é o mais fácil de Luanda.',
    rating: 5,
  },
  {
    name: 'João Bunga',
    origin: 'Benfica, Luanda',
    quote:
      'Vim para os eventos de verão e fiquei fã. Ambiente seguro, muita animação e aquele fim de tarde com o sol a cair no Atlântico.',
    rating: 4,
  },
];
