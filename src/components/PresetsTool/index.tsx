import { useState } from 'react'

import Button from 'components/Button'
import Modal from 'components/Modal'
import GalleryShadow from 'components/GalleryShadow'

import * as S from './styles'
import { Heart } from '@styled-icons/typicons'

import {
  simplePreset,
  neumorphismPreset,
  ringsPreset,
  ledsPreset,
  eclipsePreset
} from 'utils/shadow'
import { useBoxShadow } from 'hooks/use-box-shadow'
import { Preset } from 'types'

export type PresetModalProps = {
  featured?: Preset
}

const PresetModal = ({ featured }: PresetModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { loadPreset } = useBoxShadow()

  const items: Preset[] = [
    simplePreset,
    neumorphismPreset,
    ringsPreset,
    ledsPreset,
    eclipsePreset
  ]

  const handleClick = (preset: Preset) => {
    loadPreset(preset)
    setIsOpen(false)
  }

  return (
    <S.Wrapper>
      <Button
        size="small"
        minimal
        aria-label="add preset configurations"
        onClick={() => setIsOpen(true)}
      >
        Presets
      </Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Choose a preset:">
        <S.ItemsWrapper>
          <>
            {items.map((item) => (
              <S.Item
                role="button"
                aria-label={`select ${item.name} preset`}
                key={item.name}
                onClick={() => handleClick(item)}
              >
                <S.Image>
                  <GalleryShadow
                    aria-label={`${item.name} preset preview`}
                    initialBoxShadow={item.boxShadow}
                    size="small"
                    shape={item.shape}
                    mode={item.theme}
                  />
                </S.Image>
                <S.Info>
                  <label>{item.name}</label>
                </S.Info>
              </S.Item>
            ))}
          </>
          {featured && (
            <S.FeaturedItem
              role="button"
              aria-label={`select ${featured.name} preset`}
              key={featured.name}
              onClick={() => featured && handleClick(featured)}
            >
              <S.FeaturedImage>
                {featured.likes && (
                  <S.Likes>
                    <Heart />
                    {new Intl.NumberFormat('en-GB', {
                      notation: 'compact',
                      compactDisplay: 'short'
                    }).format(featured.likes)}
                  </S.Likes>
                )}
                <GalleryShadow
                  aria-label={`${featured.name} preset preview`}
                  initialBoxShadow={featured.boxShadow}
                  size="small"
                  shape={featured.shape}
                  mode={featured.theme}
                />
              </S.FeaturedImage>
              <S.Info>
                <S.FeaturedTitle>{featured.name}</S.FeaturedTitle>
                {featured?.author?.name && (
                  <S.Author>
                    <S.AuthorName>
                      by <span>{featured.author.name}</span>
                    </S.AuthorName>

                    <S.AuthorPhoto
                      src={featured.author.avatar_url}
                      alt={`${featured.author.name}'s photo`}
                    />
                  </S.Author>
                )}
              </S.Info>
            </S.FeaturedItem>
          )}
        </S.ItemsWrapper>
      </Modal>
    </S.Wrapper>
  )
}
export default PresetModal
