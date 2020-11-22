import colors from './colors'

export default {
  awesomegrid: {
    mediaQuery: 'only screen',
    columns: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12
    },
    gutterWidth: {
      xs: 2,
      sm: 2,
      md: 2,
      lg: 2,
      xl: 2
    },
    paddingWidth: {
      xs: 1.5,
      sm: 1.5,
      md: 1,
      lg: 1,
      xl: 1
    },
    container: {
      xs: 'full', // 'full' = max-width: 100%
      sm: 55, // max-width: 880px
      md: 60, // max-width: 960px
      lg: 65, // max-width: 1040px
      xl: 70 // max-width: 1120px
    },
    breakpoints: {
      xs: 1,
      sm: 48, // 768px
      md: 62, // 992px
      lg: 75, // 1200px
      xl: 90 // 1440px
    }
  },
  fonts: ['Poppins'],
  colors,
  gradients: [
    {
      colors: [colors.orange500, colors.yellow500]
    }
  ]
}
