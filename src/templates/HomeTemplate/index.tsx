import Terminal from 'components/Terminal'
import Shadow from 'components/Shadow'
import Tools from 'components/Tools'

import * as S from './styles'
import TopTools from 'components/TopTools'
import ShapeTool from 'components/ShapeTool'
import { AuthoredPreset } from 'types'
import { BoxShadowProvider } from 'hooks/use-box-shadow'
import Footer from 'components/Footer'

export type HomeTemplateProps = {
  featured?: AuthoredPreset
  initialPreset?: AuthoredPreset
}

const HomeTemplate = ({ featured, initialPreset }: HomeTemplateProps) => {
  return (
    <S.Wrapper>
      <BoxShadowProvider initialPreset={initialPreset}>
        <TopTools featured={featured} withPresets={!initialPreset} />
        <S.Panel>
          <S.Display>
            <S.Flex>
              <Shadow />
              <ShapeTool />
              <Terminal />
            </S.Flex>
            <Footer />
          </S.Display>
          <Tools />
        </S.Panel>
      </BoxShadowProvider>
    </S.Wrapper>
  )
}

export default HomeTemplate
