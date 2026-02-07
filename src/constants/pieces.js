export const PIECE_SVGS = {
  K: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <defs>
      <linearGradient id="wk" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#ffffff"/>
        <stop offset="50%" style="stop-color:#e8e8e8"/>
        <stop offset="100%" style="stop-color:#c0c0c0"/>
      </linearGradient>
    </defs>
    <g fill="url(#wk)" stroke="#404040" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22.5 11.63V6M20 8h5" stroke-linejoin="miter"/>
      <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" stroke-linecap="butt" stroke-linejoin="miter"/>
      <path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"/>
      <path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/>
    </g>
  </svg>`,
  Q: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <defs>
      <linearGradient id="wq" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#ffffff"/>
        <stop offset="50%" style="stop-color:#e8e8e8"/>
        <stop offset="100%" style="stop-color:#c0c0c0"/>
      </linearGradient>
    </defs>
    <g fill="url(#wq)" stroke="#404040" stroke-width="1.5" stroke-linejoin="round">
      <path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"/>
      <path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/>
      <path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none"/>
      <circle cx="6" cy="12" r="2"/>
      <circle cx="14" cy="9" r="2"/>
      <circle cx="22.5" cy="8" r="2"/>
      <circle cx="31" cy="9" r="2"/>
      <circle cx="39" cy="12" r="2"/>
    </g>
  </svg>`,
  R: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <defs>
      <linearGradient id="wr" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#ffffff"/>
        <stop offset="50%" style="stop-color:#e8e8e8"/>
        <stop offset="100%" style="stop-color:#c0c0c0"/>
      </linearGradient>
    </defs>
    <g fill="url(#wr)" stroke="#404040" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 39h27v-3H9v3zm3-3v-4h21v4H12zm-1-22V9h4v2h5V9h5v2h5V9h4v5" stroke-linecap="butt"/>
      <path d="M34 14l-3 3H14l-3-3"/>
      <path d="M31 17v12.5H14V17" stroke-linecap="butt" stroke-linejoin="miter"/>
      <path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/>
      <path d="M11 14h23" fill="none" stroke-linejoin="miter"/>
    </g>
  </svg>`,
  B: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <defs>
      <linearGradient id="wb" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#ffffff"/>
        <stop offset="50%" style="stop-color:#e8e8e8"/>
        <stop offset="100%" style="stop-color:#c0c0c0"/>
      </linearGradient>
    </defs>
    <g fill="url(#wb)" stroke="#404040" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <g stroke-linecap="butt">
        <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/>
        <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/>
        <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/>
      </g>
      <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke-linejoin="miter"/>
    </g>
  </svg>`,
  N: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <defs>
      <linearGradient id="wn" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#ffffff"/>
        <stop offset="50%" style="stop-color:#e8e8e8"/>
        <stop offset="100%" style="stop-color:#c0c0c0"/>
      </linearGradient>
    </defs>
    <g fill="url(#wn)" stroke="#404040" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/>
      <path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/>
      <path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z" fill="#404040"/>
    </g>
  </svg>`,
  P: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <defs>
      <linearGradient id="wp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#ffffff"/>
        <stop offset="50%" style="stop-color:#e8e8e8"/>
        <stop offset="100%" style="stop-color:#c0c0c0"/>
      </linearGradient>
    </defs>
    <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="url(#wp)" stroke="#404040" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
  k: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <defs>
      <linearGradient id="bk" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4a4a4a"/>
        <stop offset="50%" style="stop-color:#2a2a2a"/>
        <stop offset="100%" style="stop-color:#1a1a1a"/>
      </linearGradient>
    </defs>
    <g fill="url(#bk)" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22.5 11.63V6" stroke-linejoin="miter"/>
      <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" stroke-linecap="butt" stroke-linejoin="miter"/>
      <path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"/>
      <path d="M20 8h5" stroke-linejoin="miter"/>
      <path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" stroke="#3a3a3a"/>
    </g>
  </svg>`,
  q: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <defs>
      <linearGradient id="bq" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4a4a4a"/>
        <stop offset="50%" style="stop-color:#2a2a2a"/>
        <stop offset="100%" style="stop-color:#1a1a1a"/>
      </linearGradient>
    </defs>
    <g fill="url(#bq)" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z" stroke-linecap="butt"/>
      <path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" stroke-linecap="butt"/>
      <path d="M11.5 30c3.5-1 18.5-1 22 0m-21 3c5.5-1 15.5-1 21 0" fill="none" stroke="#3a3a3a"/>
      <circle cx="6" cy="12" r="2"/>
      <circle cx="14" cy="9" r="2"/>
      <circle cx="22.5" cy="8" r="2"/>
      <circle cx="31" cy="9" r="2"/>
      <circle cx="39" cy="12" r="2"/>
    </g>
  </svg>`,
  r: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <defs>
      <linearGradient id="br" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4a4a4a"/>
        <stop offset="50%" style="stop-color:#2a2a2a"/>
        <stop offset="100%" style="stop-color:#1a1a1a"/>
      </linearGradient>
    </defs>
    <g fill="url(#br)" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5h-20zm-.5 4v-4h21v4H12z" stroke-linecap="butt"/>
      <path d="M14 29.5v-13h17v13H14z" stroke-linecap="butt" stroke-linejoin="miter"/>
      <path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" stroke-linecap="butt"/>
      <path d="M12 35.5v-20h21v20H12z" fill="none" stroke="#3a3a3a" stroke-width="1" stroke-linejoin="miter"/>
    </g>
  </svg>`,
  b: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <defs>
      <linearGradient id="bb" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4a4a4a"/>
        <stop offset="50%" style="stop-color:#2a2a2a"/>
        <stop offset="100%" style="stop-color:#1a1a1a"/>
      </linearGradient>
    </defs>
    <g fill="url(#bb)" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <g stroke-linecap="butt">
        <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/>
        <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/>
        <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/>
      </g>
      <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke="#3a3a3a" stroke-linejoin="miter"/>
    </g>
  </svg>`,
  n: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <defs>
      <linearGradient id="bn" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4a4a4a"/>
        <stop offset="50%" style="stop-color:#2a2a2a"/>
        <stop offset="100%" style="stop-color:#1a1a1a"/>
      </linearGradient>
    </defs>
    <g fill="url(#bn)" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/>
      <path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/>
      <path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z" fill="#6a6a6a" stroke="#6a6a6a"/>
    </g>
  </svg>`,
  p: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <defs>
      <linearGradient id="bp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4a4a4a"/>
        <stop offset="50%" style="stop-color:#2a2a2a"/>
        <stop offset="100%" style="stop-color:#1a1a1a"/>
      </linearGradient>
    </defs>
    <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="url(#bp)" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`
};
export const BOARD_THEMES = {
  neutral: {
    name: 'Neutral',
    light: '#f0f0f0',      
    dark: '#a8b4be',       
    highlight: '#7fadcf',  
    selected: '#5a9fd4',   
    moveIndicator: '#5a9fd4', 
    border: '#8a8a8a'      
  },
  modern: {
    name: 'Modern',
    light: '#e8e8e8',
    dark: '#6b6b6b',
    highlight: '#7fadcf',
    selected: '#5a9fd4',
    moveIndicator: '#5a9fd4',
    border: '#404040'
  },
  classic: {
    name: 'Classic',
    light: '#f0d9b5',
    dark: '#b58863',
    highlight: '#cdd26a',
    selected: '#f7ec5e',
    moveIndicator: '#646f40',
    border: '#2c2c2c'
  },
  green: {
    name: 'Green',
    light: '#eeeed2',
    dark: '#769656',
    highlight: '#baca44',
    selected: '#f7f769',
    moveIndicator: '#646f40',
    border: '#2c2c2c'
  },
  blue: {
    name: 'Blue',
    light: '#dee3e6',
    dark: '#8ca2ad',
    highlight: '#afc8e4',
    selected: '#82b1d4',
    moveIndicator: '#5a8bb0',
    border: '#2c2c2c'
  },
  purple: {
    name: 'Purple',
    light: '#e8e0f0',
    dark: '#9070a0',
    highlight: '#c8a8e8',
    selected: '#b090d0',
    moveIndicator: '#8060a0',
    border: '#2c2c2c'
  }
};
