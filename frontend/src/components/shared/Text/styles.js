import styled from 'styled-components'

export const Wrapper = styled.p`
  color: ${({ theme, color }) => theme.colors[color]};
`
