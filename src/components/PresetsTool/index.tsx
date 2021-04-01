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
import { Preset, Author } from 'types'

import { getUser } from 'services/github-user'

export type PresetModalProps = {
  featuredBoxShadow?: Preset
}

const PresetModal = ({ featuredBoxShadow }: PresetModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { loadPreset } = useBoxShadow()
  const [author, setAuthor] = useState<Author>({
    name: featuredBoxShadow?.author
  })
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
    if (author.name) {
      getUser(author.name)
        .then((res) => {
          setAuthor({
            ...author,
            link: res.html_url,
            photo: res.avatar_url
          })
        })
        .catch((err) => console.log(err))
    }
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
          {featuredBoxShadow && (
            <S.FeaturedItem
              role="button"
              aria-label={`select ${featuredBoxShadow?.name} preset`}
              key={featuredBoxShadow?.name}
              onClick={() =>
                featuredBoxShadow && handleClick(featuredBoxShadow)
              }
            >
              <S.FeaturedImage>
                <GalleryShadow
                  aria-label={`${featuredBoxShadow?.name} preset preview`}
                  initialBoxShadow={featuredBoxShadow?.boxShadow}
                  size="small"
                  shape={featuredBoxShadow?.shape}
                  mode={featuredBoxShadow?.theme}
                />
              </S.FeaturedImage>
              <S.Info>
                <label>{featuredBoxShadow?.name}</label>
                {author.name && (
                  <S.Author href={author.link} target="_blank">
                    <div>
                      by <span>{author.name}</span>
                    </div>
                    <S.AuthorPhoto
                      src={author.photo}
                      alt={`${author.name}'s photo`}
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
