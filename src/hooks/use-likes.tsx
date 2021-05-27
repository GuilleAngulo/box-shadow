import { createContext, useContext, useEffect, useState } from 'react'
import { getLikesByUser } from 'services/likes'
import { useAuth } from './use-auth'

export type LikesContextData = {
  isLiked: (id: number) => boolean
  addLike: (id: number) => void
  removeLike: (id: number) => void
}

export const LikesContextDefaultValues = {
  isLiked: () => false,
  addLike: () => null,
  removeLike: () => null
}

export const LikesContext = createContext<LikesContextData>(
  LikesContextDefaultValues
)

export type LikesProviderProps = {
  children: React.ReactNode
}

const LikesProvider = ({ children }: LikesProviderProps) => {
  const [likes, setLikes] = useState<number[]>([])
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      getLikesByUser(user.id)
        .then(({ data, error }) => {
          if (error) throw error
          !!data && setLikes(() => data.map((like) => like.box_shadow_id))
        })
        .catch((err) => console.log(err))
    }
  }, [user])

  const isLiked = (id: number) => likes.some((likeId) => likeId === id)

  const saveLike = (likes: number[]) => {
    setLikes(likes)
  }

  const addLike = (id: number) => {
    saveLike([...likes, id])
  }

  const removeLike = (id: number) => {
    const newLikes = likes.filter((likeId: number) => likeId !== id)
    saveLike(newLikes)
  }

  return (
    <LikesContext.Provider
      value={{
        isLiked,
        addLike,
        removeLike
      }}
    >
      {children}
    </LikesContext.Provider>
  )
}

const useLikes = () => useContext(LikesContext)

export { LikesProvider, useLikes }
