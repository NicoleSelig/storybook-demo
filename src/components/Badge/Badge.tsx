// src/components/Badge/Badge.tsx
import styled, { css } from 'styled-components'

import { Body } from '../typography'

const Container = styled.div(
  ({ theme: { color, borderRadius } }) => css`
    padding: 3px 8px;
    background: ${color.badgeBackground};
    border-radius: ${borderRadius.xs};
    display: inline-block;
    span {
      color: ${color.badgeText};
    }
    span:first-letter {
      text-transform: capitalize;
    }
  `
)

type BadgeProps = {
  /** What the badge will display */
  text: string
  /** We use classname to make the component extensible by styled-components */
  className?: string
}

export const Badge = ({ text, className }: BadgeProps) => (
  <Container className={className}>
    <span>{text}</span>
  </Container>
)
