export const business = {
  name: 'Elisabete Freire Beauty',
  descriptor: 'Empório da beleza',
  phoneDisplay: '(12) 98812-9008',
  phoneE164: '5512988129008',
  instagram: 'https://www.instagram.com/elisabetefreire.beauty/',
  instagramHandle: '@elisabetefreire.beauty',
  address: 'R. Pimenteiras, 848 - Parque Industrial, São José dos Campos - SP, 12235-750',
  rating: '4,9',
} as const;

export function whatsappHref(service?: string): string {
  const text = service
    ? `Olá! Vim pelo site e gostaria de fazer um agendamento para ${service}.`
    : 'Olá! Vim pelo site e gostaria de fazer um agendamento.';
  return `https://wa.me/${business.phoneE164}?text=${encodeURIComponent(text)}`;
}

export const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`;

export const services = [
  {
    number: '01',
    name: 'Cílios',
    slug: 'cílios',
    theme: 'Olhar',
    description: 'Aplicação e manutenção de extensão de cílios.',
    image: '/images/cilios-close.jpg',
    width: 360,
    height: 640,
    alt: 'Close de cílios produzidos no studio Elisabete Freire Beauty',
  },
  {
    number: '02',
    name: 'Maquiagem',
    slug: 'maquiagem',
    theme: 'Ocasião',
    description: 'Maquiagem social e profissional para eventos, festas e ocasiões especiais.',
    image: '/images/maquiagem-formatura.jpg',
    width: 361,
    height: 640,
    alt: 'Cliente com maquiagem para formatura feita por Elisabete Freire Beauty',
  },
  {
    number: '03',
    name: 'Sobrancelhas',
    slug: 'sobrancelhas',
    theme: 'Expressão',
    description: 'Design, alinhamento e cuidados com as sobrancelhas.',
    image: '/images/antes-depois-olhar.jpg',
    width: 3464,
    height: 3464,
    alt: 'Comparação antes e depois de lash lifting e brow lamination publicada pelo studio',
  },
] as const;
