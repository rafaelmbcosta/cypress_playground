import { Button } from '@material-ui/core'
import styled, { css } from 'styled-components'

const baseAccentButton = css`
  background-color: var(--color--accent);
  color: var(--color--secondary);
`;

export const PrimaryButton = styled(Button)`
  background-color: var(--color--primary);
`;

export const SecondaryButton = styled(Button)`
  background-color: var(--color--secondary);
`;

export const AccentButton = styled(Button)`
  ${baseAccentButton}
`;



