import { green, purple, red, grey, blue, blueGrey } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Theme {
    mode: string
    primary: {
      main: string
      hover: string
    }
    background: {
      main: string
      layout: string
    }
    text: {
      primary: string
      primaryHover: string
      input: string
      secondary: string
      secondaryHover: string
    }
    button: {
      primary: string
      primaryHover: string
      secondary: string
      secondaryHover: string
      secondaryBorder: string
      text: string
    }
    input: {
      main: string
      hover: string
      disabled: string
      error: string
      darkError: string
      lightError: string
      helperText: string
      helperTextShadow: string
    }
  }
  interface ThemeOptions {
    mode: string
    primary: {
      main: string
      hover: string
    }
    background: {
      main: string
      layout: string
    }
    button: {
      primary: string
      primaryHover: string
      secondary: string
      secondaryHover: string
      secondaryBorder: string
      text: string
    }
    text: {
      primary: string
      primaryHover: string
      input: string
      secondary: string
      secondaryHover: string
    }
    input: {
      main: string
      hover: string
      disabled: string
      error: string
      darkError: string
      lightError: string
      helperText: string
      helperTextShadow: string
    }
  }
}

export const getDesignTokens = (mode: string) => ({
  mode,
  ...(mode === 'light'
    ? {
        primary: {
          main: blue[400],
          hover: blue[600],
        },
        background: {
          main: '#F0F0F0',
          layout: '#FFFFFF',
        },
        text: {
          primary: '#252525',
          primaryHover: '#D25C37',
          secondary: '#F36C41',
          secondaryHover: '#F36C41',
          input: '#000000',
        },
        button: {
          primary: '#F36C41',
          primaryHover: '#D25C37',
          secondary: '#ffffff',
          secondaryHover: '#F0F0F0',
          secondaryBorder: '#252525',
          text: '#252525',
        },
        input: {
          main: '#959595',
          hover: '#F36C41',
          disabled: '#C0C0C0',
          error: red[400],
          darkError: red[600],
          lightError: red[200],
          helperText: red[700],
          helperTextShadow: red[900],
        },
      }
    : {
        primary: {
          main: blue[400],
          hover: blue[600],
        },
        background: {
          main: '#252525',
          layout: '#303030',
          buttonHover: blue[700],
        },
        text: {
          primary: '#FFFFFF',
          primaryHover: '#D25C37',
          secondary: '#F36C41',
          secondaryHover: '#F36C41',
          input: '#FFFFFF',
        },
        button: {
          primary: '#F36C41',
          primaryHover: '#D25C37',
          secondary: '#303030',
          secondaryHover: '#484848',
          secondaryBorder: '#FFFFFF',
          text: '#FFFFFF',
        },
        input: {
          main: '#7F7F7F',
          hover: '#F36C41',
          disabled: '#C0C0C0',
          error: red[400],
          darkError: red[600],
          lightError: red[200],
          helperText: red[700],
          helperTextShadow: red[900],
        },
      }),
})
