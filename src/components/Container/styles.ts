import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 70vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.greaterThan('medium')`
      flex-direction: row;
    `}
`
