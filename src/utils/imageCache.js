const CACHE_PREFIX = 'chess-image:';
const MAX_IMAGE_BYTES = 350 * 1024;
const MAX_TOTAL_CHARS = 1_900_000;
const MAX_ENTRIES = 32;

const hashUrl = (url) => {
  let hash = 2166136261;
  for (let i = 0; i < url.length; i++) {
    hash ^= url.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
};

const cacheKey = (url) => `${CACHE_PREFIX}${hashUrl(url)}`;

const readCachedImage = (url) => {
  try {
    const raw = localStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    return entry.url === url && typeof entry.data === 'string' ? entry.data : null;
  } catch {
    return null;
  }
};

export const peekCachedImage = readCachedImage;

const pruneCache = (neededChars = 0) => {
  try {
    const entries = [];
    let totalChars = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key?.startsWith(CACHE_PREFIX)) continue;
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      try {
        const entry = JSON.parse(raw);
        entries.push({ key, usedAt: entry.usedAt || 0, chars: raw.length });
        totalChars += raw.length;
      } catch {
        localStorage.removeItem(key);
      }
    }

    entries.sort((a, b) => a.usedAt - b.usedAt);
    while (entries.length >= MAX_ENTRIES || totalChars + neededChars > MAX_TOTAL_CHARS) {
      const oldest = entries.shift();
      if (!oldest) break;
      localStorage.removeItem(oldest.key);
      totalChars -= oldest.chars;
    }
  } catch {
    // Storage may be disabled; the image will still load directly from its URL.
  }
};

const blobToDataUrl = (blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = () => reject(reader.error);
  reader.readAsDataURL(blob);
});

export const getCachedImage = async (url) => {
  const cached = readCachedImage(url);
  if (cached) {
    try {
      const key = cacheKey(url);
      const entry = JSON.parse(localStorage.getItem(key));
      entry.usedAt = Date.now();
      localStorage.setItem(key, JSON.stringify(entry));
    } catch {
      // Use the cached value even if refreshing its recency fails.
    }
    return cached;
  }

  try {
    const response = await fetch(url, { mode: 'cors', credentials: 'omit' });
    if (!response.ok) return url;
    const blob = await response.blob();
    if (!blob.type.startsWith('image/') || blob.size > MAX_IMAGE_BYTES) return url;

    const data = await blobToDataUrl(blob);
    const raw = JSON.stringify({ url, data, usedAt: Date.now() });
    pruneCache(raw.length);
    try {
      localStorage.setItem(cacheKey(url), raw);
    } catch {
      pruneCache(raw.length);
      try { localStorage.setItem(cacheKey(url), raw); } catch { /* Fall back to the original URL. */ }
    }
    return data;
  } catch {
    // Some image hosts block CORS. Let <img> request those URLs directly.
    return url;
  }
};
