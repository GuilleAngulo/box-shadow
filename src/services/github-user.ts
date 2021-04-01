export async function getUser(username: string) {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => (res.ok ? res.json() : handleError(res.status)))
    .catch(() => {
      throw new Error(
        'There was a network error. Please try again in a few seconds.'
      )
    })
}

export function handleError(status: number) {
  if (status === 404) throw new Error('Server Error.')
  if (status === 500) throw new Error('Resource not found.')
}
