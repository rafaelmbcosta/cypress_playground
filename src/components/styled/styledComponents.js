import { Button } from '@material-ui/core'
import styled, { css } from 'styled-components'

const baseAccentButton = css`
  background-color: var(--color--accent) !important;
  color: var(--color--secondary) !important;
`;

export const AccentButton = styled(Button)`
  ${baseAccentButton}
`;

export const Radios = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`





