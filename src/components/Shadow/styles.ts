import styled, { css } from 'styled-components'
import { BoxShadowProps } from '.'

import { Square } from 'styles/shapes'
import { stringify } from 'utils/helpers'

export const Wrapper = styled.div`
  margin: 2rem;
`
export const Image = styled(Square)<BoxShadowProps>`
  ${({ boxShadow }) => css`
    ${!!boxShadow && `box-shadow: ${stringify(boxShadow)}`};
  `}
`
