import { useEffect, useState } from 'react'

import Button from 'components/Button'
import Modal from 'components/Modal'
import GalleryShadow from 'components/GalleryShadow'

import * as S from './styles'
import {
  simplePreset,
  neumorphismPreset,
  ringsPreset,
  ledsPreset,
  eclipsePreset
} from 'utils/shadow'
import { useBoxShadow } from 'hooks/use-box-shadow'
import { Preset } from 'types'
import { getBoxShadow } from 'services/boxShadows'

export type PresetModalProps = {
  featuredBoxShadow?: Preset
}

const PresetModal = ({ featuredBoxShadow }: PresetModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { loadPreset } = useBoxShadow()
  const [featured, setFeatured] = useState(undefined)

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

  useEffect(() => {
    async function fetchBoxShadow() {
      const response = await getBoxShadow()
      if (response) {
        setFeatured(response)
      }
    }
    fetchBoxShadow()
  }, [])

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
              aria-label={`select ${featured.preset.name} preset`}
              key={featured.preset.name}
              onClick={() => featured.preset && handleClick(featured.preset)}
            >
              <S.FeaturedImage>
                <GalleryShadow
                  aria-label={`${featured.preset.name} preset preview`}
                  initialBoxShadow={featured.preset.boxShadow}
                  size="small"
                  shape={featured.preset.shape}
                  mode={featured.preset.theme}
                />
              </S.FeaturedImage>
              <S.Info>
                <S.FeaturedTitle>{featured.preset.name}</S.FeaturedTitle>
                {featured.author.name && (
                  <S.Author href={'#'} target="_blank">
                    <div>
                      by <span>{featured.author.name}</span>
                    </div>
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
