'use client';

interface Props {
  height?: string;
}

export default function GlobeTerrestreAlma({ height = '100%' }: Props) {
  return (
    <iframe
      src="/globe-civilisations.html"
      style={{
        width: '100%',
        height,
        border: 'none',
        borderRadius: '8px',
        display: 'block',
        background: '#050505',
      }}
      title="Globe des civilisations ALMA"
      allowFullScreen
    />
  );
}
