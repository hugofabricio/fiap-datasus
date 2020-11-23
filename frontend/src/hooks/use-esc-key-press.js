import { useEffect } from 'react'

const useEscKeyPress = (handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (event.keyCode !== 27) {
        return
      }
      handler(event)
    }

    document.addEventListener('keydown', listener)

    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [handler])
}

export default useEscKeyPress
