import { RefObject, useCallback, useEffect } from 'react'

const useOnClickOutside = <T extends HTMLElement>(
  handler: (event: Event) => void,
  ref: RefObject<T>,
) => {
  const handleOnClickOutside = useCallback(
    (event: Event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target as Node) ||
        ref.current.ariaHidden === 'true'
      )
        return

      handler(event)
    },
    [handler, ref],
  )

  useEffect(() => {
    document.addEventListener('click', handleOnClickOutside)

    return () => {
      document.removeEventListener('click', handleOnClickOutside)
    }
  }, [handleOnClickOutside])
}

export default useOnClickOutside
