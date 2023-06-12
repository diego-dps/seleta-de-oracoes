import { extendTheme } from "@chakra-ui/react";


const themes = {
  styles: {
    global: {
      'html, body': {
        fontFamily: `'roboto', sans-serif`,
        backgroundImage: 'https://img.freepik.com/fotos-gratis/fundo-do-assoalho-de-madeira_53876-88628.jpg?w=1380&t=st=1686542629~exp=1686543229~hmac=ba14da2954714dd8b18651030b0ad0bb49cd33592e342367ebda3d4f9e5ef92b'
      },
    },
  },
}

const theme = extendTheme(themes);

export default theme;