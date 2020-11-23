import media from '@utils/media'
import { createGlobalStyle } from 'styled-components'

import reset from './reset'

const globalStyles = createGlobalStyle`
  /**
   * Reset
   */
  ${reset}

  /**
   * Generic
   */
  body {
    padding-top: 60px;
    color: ${({ theme }) => theme.colors.neutral700};
    font-family: ${({ theme }) => `${theme.fonts[0]}, sans-serif`};

    ${media.lessThan('sm')`
      padding-top: 30px;
    `}
  }

  a,
  button {
    transition: all .4s ease;
    color: ${({ theme }) => theme.colors.blue500};
    &:hover {
      color: ${({ theme }) => theme.colors.neutral900};
    }
  }
`

export default globalStyles
