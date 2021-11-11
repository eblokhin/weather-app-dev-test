import { useEffect } from 'react'

const useWindowEvent = (eventType: keyof WindowEventMap, handler: (e: Event) => void): void => {
  useEffect(() => {
    window.addEventListener(eventType, handler)

    return () => {
      window.removeEventListener(eventType, handler)
    }
  })
}

export default useWindowEvent
