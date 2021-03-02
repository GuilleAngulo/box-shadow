import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  position: absolute;
  width: 70vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Panel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 8rem;
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-around;
  `}
`
