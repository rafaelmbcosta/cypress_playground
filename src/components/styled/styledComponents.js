import { Button, Card, TextField } from '@material-ui/core'
import styled from 'styled-components'

export const AccentButton = styled(Button)`
  background-color: var(--color--accent) !important;
  color: var(--color--form) !important;
`;

export const SecondaryButton = styled(Button)`
  background-color: var(--color--secondary) !important;
  color: var(--color--form) !important;
  margin: 0px 5px !important;
`;

export const ButtonList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FullTextField = styled(TextField)`
  grid-column-start: span 2;
`;

export const FullLabel = styled.label`
  grid-column-start: span 2;
  justify-self: center;
`

export const AppCard = styled(Card)`
  width: 100%;
  border-radius: var(--border--radius);
  background-color: var(--color--form);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 10px;
  padding: 20px;
  justify-content: center;
`
export const CheckBoxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
