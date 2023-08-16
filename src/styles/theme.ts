const theme = {
  colors: {
    background: {
      white: 'var(--color-white)',
    },
    clickables: {
      hover: 'var(--color-grey-30)',
      pressed: 'var(--color-grey-20)',
    },
    icon: {
      disabled: 'var(--color-grey-30)',
      hover: 'var(--color-text-purple-10)',
      initial: 'var(--color-grey-10)',
      pressed: 'var(--color-text-purple-10)',
    },
    neutral: { grey10: 'var(--color-grey-10)', grey60: 'var(--color-grey-60)' },
    primary: {
      brightPurple: 'var(--color-bright-purple)',
      deepPurple: 'var(--color-deep-purple)',
      midBlue: 'var(--color-mid-blue)',
    },
    text: {
      main: 'var(--color-black)',
      white: 'var(--color-white)',
    },
  },
  elevations: {
    toolbar: 2,
    whiteBoard: { default: 0, selected: 1 },
  },
  font: {
    families: {
      primary: 'var(--font-primary)',
    },
    lineHeights: { xl: '2.125rem' },
    sizes: {
      small: '0.75rem',
      xl: '1.5rem',
    },
    weights: {
      bold: 700,
      normal: 400,
    },
  },
  shadows: {
    extralight: 'var(--elevation-100)',
    light: 'var(--elevation-200)',
  },
} as const

export type Theme = typeof theme

export default theme
