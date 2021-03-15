import { useState } from 'react'
import { stringify, prettify } from 'utils/helpers'
import { useBoxShadow } from 'hooks/use-box-shadow'

import * as S from './styles'
import { ContentCopy } from '@styled-icons/material-outlined'

const Editor = () => {
  const [copied, setCopied] = useState(false)
  const { boxShadow = [] } = useBoxShadow()
  const handleCopyCode = async () => {
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
        <S.CopyWrapper onClick={handleCopyCode} role="button">
          {copied ? (
            <span>Copied ✓</span>
          ) : (
            <ContentCopy size={20} aria-label="Copy Code" />
          )}
        </S.CopyWrapper>
        <S.Code>{prettify(stringify(boxShadow, false))}</S.Code>
      </S.Pre>
    </S.Wrapper>
  )
}

export default Editor
