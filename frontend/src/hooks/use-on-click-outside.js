import { useEffect } from 'react'

const useOnClickOutside = (ref, handler, target = 'overlay') => {
  useEffect(() => {
    const listener = (event) => {
      if (
        event.target.classList.contains(target) ||
        !ref.current.contains(event.target)
      ) {
        handler(event)
      }
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler, target])
}

export default useOnClickOutside
