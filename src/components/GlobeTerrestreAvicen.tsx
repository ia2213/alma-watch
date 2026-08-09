import React from 'react';

interface Props {
  height?: string;
}

export default function GlobeTerrestreAvicen({ height = '100%' }: Props) {
  return (
    <iframe
      src="/globe-civilisations.html"
      style={{
        width: '100%',
        height,
        border: 'none',
        display: 'block',
        background: '#050505',
      }}
      title="Globe des civilisations AVICEN"
      allowFullScreen
    />
  );
}