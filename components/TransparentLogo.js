'use client';
import { useEffect, useRef, useState } from 'react';

export default function TransparentLogo({ src, height }) {
  const [dataUrl, setDataUrl] = useState(src);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Remove checkered pattern (near-white and light gray)
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        // If the pixel is very light (white/gray checkers)
        if (r > 200 && g > 200 && b > 200) {
          data[i + 3] = 0; // Make transparent
        }
      }
      ctx.putImageData(imageData, 0, 0);
      setDataUrl(canvas.toDataURL());
    };
  }, [src]);

  return <img src={dataUrl} alt="Logo" style={{ height, width: 'auto', objectFit: 'contain' }} />;
}