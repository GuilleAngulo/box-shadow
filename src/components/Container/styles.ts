import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 0 auto;
  ${media.greaterThan('medium')`
      flex-direction: row;
    `}
`
