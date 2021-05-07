import { useState } from 'react'
import { Preset, Mode, Shape } from 'types'
import { BoxShadowAuthorProps, deleteBoxShadow } from 'services/boxShadows'

import Button from 'components/Button'
import GalleryShadow from 'components/GalleryShadow'

import { useBoxShadow } from 'hooks/use-box-shadow'

import { parseBoxShadow } from 'utils/helpers'

import { FolderOpen } from '@styled-icons/material-outlined'
import { Likes } from 'components/PresetsTool/styles'
import { Heart } from '@styled-icons/typicons'
import * as S from './styles'
import { getTimeAgo } from 'utils/time'

export type CollectionItemProps = {
  boxShadow: BoxShadowAuthorProps
  closeModal: () => void
  refresh?: () => void
}

const CollectionItem = ({
  boxShadow,
  closeModal,
  refresh
}: CollectionItemProps) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const { loadPreset } = useBoxShadow()

  const handleLoad = (boxShadow: Preset) => {
    loadPreset(boxShadow)
    !!closeModal && closeModal()
  }

  const handleDelete = async (boxShadowId: number) => {
    if (isDeleting) {
      await deleteBoxShadow(boxShadowId)
      !!refresh && refresh()
      return
    }
    setIsDeleting(true)
  }

  const timeAgo = new Date(boxShadow.inserted_at).getTime()

  return (
    <S.Item key={boxShadow.id}>
      <S.ItemHeader>
        <S.ItemTitle>{boxShadow.title}</S.ItemTitle>
        {/* <S.ItemDate>{getTimeAgo(timeAgo)}</S.ItemDate> */}
      </S.ItemHeader>
      <S.Image deleteMode={isDeleting} mode={boxShadow.theme}>
        <S.Message deleteMode={isDeleting} mode={boxShadow.theme}>
          Are you sure?
        </S.Message>
        <GalleryShadow
          aria-label={boxShadow.title}
          initialBoxShadow={parseBoxShadow(boxShadow.box_shadow)}
          size="small"
          shape={boxShadow.shape}
          mode={boxShadow.theme}
        />
        {boxShadow?.likes >= 0 && (
          <Likes>
            <Heart />
            {new Intl.NumberFormat('en-GB', {
              notation: 'compact',
              compactDisplay: 'short'
            }).format(boxShadow?.likes)}
          </Likes>
        )}
      </S.Image>
      <S.ItemControls>
        {!isDeleting ? (
          <>
            <Button
              minimal
              size="small"
              onClick={() => handleDelete(boxShadow.id)}
              aria-label={`delete ${boxShadow.title}`}
              style={{
                color: '#FF1717',
                boxShadow: '0 0 0 0.1rem #FF1717'
              }}
            >
              Delete
            </Button>
            <Button
              variant
              size="small"
              icon={<FolderOpen />}
              onClick={() =>
                handleLoad({
                  boxShadow: parseBoxShadow(boxShadow.box_shadow),
                  theme: boxShadow.theme as Mode,
                  shape: boxShadow.shape as Shape
                })
              }
              aria-label={`load ${boxShadow.title}`}
            >
              Open
            </Button>
          </>
        ) : (
          <>
            <Button
              minimal
              size="small"
              onClick={() => handleDelete(boxShadow.id)}
              aria-label={`delete permanently ${boxShadow.title}`}
              style={{
                color: 'white',
                backgroundColor: '#FF1717'
              }}
            >
              Delete
            </Button>
            <Button
              variant
              size="small"
              onClick={() => setIsDeleting(false)}
              aria-label={`cancel deleting ${boxShadow.title}`}
            >
              Cancel
            </Button>
          </>
        )}
      </S.ItemControls>
    </S.Item>
  )
}
export default CollectionItem
