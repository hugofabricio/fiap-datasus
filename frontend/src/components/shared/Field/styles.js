import { rem, rgba } from 'polished'
import styled from 'styled-components'

export const FormGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const Label = styled.label`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
`

export const InputIcon = styled.i`
  position: absolute;
  left: 18px;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  appearance: none;
  border-radius: ${rem(8)};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: ${({ hasIcon }) =>
    hasIcon
      ? `${rem(12)} ${rem(24)} ${rem(12)} ${rem(48)}`
      : `${rem(12)} ${rem(24)}`};

  ${({ theme: { colors } }) => `
    color: ${colors.neutral600};
    background-color: ${colors.neutral300};
    border: 1px solid ${colors.neutral300};

    &:focus {
      color: ${colors.blue500};
      outline: 0;
      box-shadow: 0 0 0 0.25rem ${rgba(colors.blue500, 0.25)};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const HelperText = styled.span`
  font-size: ${rem(12)};
  color: ${({ theme: { colors } }) => colors.orange500};
  position: absolute;
  bottom: -22px;
`

export const Form = styled.form`
  ${({ groupMargin }) =>
    groupMargin &&
    `
    ${FormGroup} {
      margin-bottom: ${groupMargin}px;
    }
  `}
`
