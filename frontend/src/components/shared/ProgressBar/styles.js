import styled from 'styled-components'

export const ProgressBarWrapper = styled.div``

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  ${({ theme: { colors } }) => `
    background-color: ${colors.neutral500};
  `}
`

export const ProgressBarActive = styled.div`
  height: 100%;
  transition: all ease 0.4s;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;

  ${({ theme: { colors }, color, size }) => `
    width: ${size}%;
    background-color: ${colors[color]};
  `}
`
