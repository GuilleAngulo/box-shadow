import Terminal from 'components/Terminal'
import Shadow from 'components/Shadow'
import Tools from 'components/Tools'
import ShapeTool from 'components/ShapeTool'

import * as S from './styles'

import { AuthoredPreset } from 'types'
import { BoxShadowProvider } from 'hooks/use-box-shadow'

export type HomeTemplateProps = {
  boxShadow?: AuthoredPreset
}

const HomeTemplate = ({ boxShadow }: HomeTemplateProps) => {
  return (
    <S.Wrapper>
      <S.Panel>
        <BoxShadowProvider>
          <S.Display>
            <Shadow initialBoxShadow={boxShadow?.boxShadow} />
            <div>
              <ShapeTool />
              <Terminal />
            </div>
          </S.Display>
          <Tools />
        </BoxShadowProvider>
      </S.Panel>
    </S.Wrapper>
  )
}

export default HomeTemplate
