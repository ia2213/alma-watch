import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AVICEN — L'Art du Temps Universel",
    short_name: 'AVICEN',
    description: 'Haute horlogerie multiculturelle suisse réunissant 12 civilisations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#080808',
    theme_color: '#080808',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
