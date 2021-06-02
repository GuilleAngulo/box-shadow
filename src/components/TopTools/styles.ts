import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  padding: var(--spacings-xsmall) 0;
  ${media.greaterThan('small')`
    padding: var(--spacings-xsmall);
    z-index: 10;
  `}
`
export const Content = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1rem;
  border-radius: var(--border-radius);
`
