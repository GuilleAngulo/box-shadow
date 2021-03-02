import { useState } from 'react'
import * as S from './styles'
import { stringify, prettify } from 'utils/helpers'
import { ShadowProps } from 'components/Shadow'
import { ContentCopy } from '@styled-icons/material-outlined'

export type EditorProps = {
  boxShadow: ShadowProps[]
}

const Editor = ({ boxShadow }: EditorProps) => {
  const [copied, setCopied] = useState(false)
  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(prettify(stringify(boxShadow)))
      setCopied(true)
      /** After 5 seconds, allow to copy again */
      setTimeout(() => setCopied(false), 5000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
  return (
    <S.Wrapper>
      <S.Pre>
        <S.CopyWrapper onClick={handleCopyUrl} role="button">
          {copied ? (
            <span>Copied ✓</span>
          ) : (
            <ContentCopy size={20} aria-label="Copy Code" />
          )}
        </S.CopyWrapper>
        <S.Code>{prettify(stringify(boxShadow))}</S.Code>
      </S.Pre>
    </S.Wrapper>
  )
}

export default Editor
