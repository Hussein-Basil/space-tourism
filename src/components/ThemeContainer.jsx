import React from "react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px'
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "normal",
        fontFamily: 'Bellefair, serif',
        textTransform: 'uppercase'
      },
      sizes: {
        h1: {
          fontSize: ['80px', '150px']
        },
        h2: {
            fontSize: ['56px', '100px']
        },
        h3: {
            fontSize: ['24px', '56px']
        },
        h4: {
            fontSize: ['20px', '32px'],
            
        },
        h5: {
            fontSize: ['16px', '28px'],
            fontFamily: 'Barlow Condensed',
            letterSpacing: '4.75px',
            color: '#D0D6F9'
        }
      },
    },
    Text: {
        baseStyle: {
            fontSize: ['15px', '18px'],
            fontFamily: 'Barlow, sans-serif',
            color: '#D0D6F9'
        },
        variants: {
            sub1: {
                fontFamily: 'Bellefair, serif',
                fontSize: '28px',
                textTransform: 'uppercase',
                color: 'white'
            },
            sub2: {
                fontFamily: 'Barlow Condensed, serif',
                fontSize: ['14px', '16px'],
                letterSpacing: '2.35px',
                textTransform: 'uppercase',
                color: '#D0D6F9'
            },
            nav: {
                fontFamily: 'Barlow Condensed, serif',
                fontSize: '16px',
                letterSpacing: '2.7px',
                textTransform: 'uppercase',
                color: 'white'
            }
        }
    },
  },
});

const ThemeContainer = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeContainer;
