import styled, { css } from 'styled-components'
import { BoxShadowProps } from '.'

import { Square } from 'styles/shapes'
import { stringify } from 'utils/helpers'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;
`

// export const Image = styled(Square)<BoxShadowProps>`
//   ${({ boxShadow }) => css`
//     ${!!boxShadow && `box-shadow: ${stringify(boxShadow)}`}
//   `}
// `

export const Image = styled(Square).attrs<BoxShadowProps>((props) => ({
  style: {
    boxShadow: stringify(props.boxShadow, false)
  }
}))``
