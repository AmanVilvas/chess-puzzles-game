import React, { useEffect, useState } from 'react';
import { getCachedImage, peekCachedImage } from '../../utils/imageCache';

export const CachedImage = ({ src, ...props }) => {
  const [cachedSrc, setCachedSrc] = useState(() => peekCachedImage(src) || src);

  useEffect(() => {
    let active = true;
    setCachedSrc(peekCachedImage(src) || src);
    getCachedImage(src).then((result) => {
      if (active) setCachedSrc(result);
    });
    return () => { active = false; };
  }, [src]);

  return <img {...props} src={cachedSrc} />;
};
