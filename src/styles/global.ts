import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --color-black: #2b333a;
    --color-mid-blue: #0099ff;
    --color-bright-purple: #6542d1;
    --color-deep-purple: #331a70;
    --color-grey-10: #676878;
    --color-grey-20: #a1b1ba;
    --color-grey-30: #ccdae0;
    --color-grey-60: #f9fafb;
    --color-text-purple-10: #372866;
    --color-white: #ffffff;

    --elevation-100: 0px 0px .5px rgba(0, 0, 0, .3), 0px 1px 3px rgba(0, 0, 0, .15);
    --elevation-200:0px 0px .5px rgba(0, 0, 0, .18), 0px 3px 8px rgba(0, 0, 0, .1), 0px 1px 3px rgba(0, 0, 0, .1);

    --font-primary: Arial, Helvetica, sans-serif;
  }

  * {
    box-sizing: border-box;

    ::after,
    ::before {
      box-sizing: border-box;
    }
  }

  a {
    color: unset;
    cursor: pointer;
    outline: unset;
    text-decoration: unset;

    &[aria-disabled="true"] {
      cursor: unset;
    }
  }

  body {
    color: ${({ theme }) => theme.colors.text.main};
    font-family: ${({ theme }) => theme.font.families.primary};
  }

  button {
    cursor: pointer;
  }

  button, input, textarea {
    appearance: unset;
    background-color: unset;
    border: unset;
    color: unset;
    font: unset;
    margin: unset;
    outline: unset;
    padding: unset;

    :disabled {
      cursor: unset;
    }
  }
`

export default GlobalStyle
