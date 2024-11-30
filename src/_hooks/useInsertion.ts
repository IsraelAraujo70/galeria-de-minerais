import { useState, useEffect, RefObject } from 'react'

const useIntersection = (
  elementRef: RefObject<HTMLElement>,
  options?: IntersectionObserverInit,
): boolean => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)

    const currentElement = elementRef.current

    if (currentElement) observer.observe(currentElement)

    return () => {
      if (currentElement) observer.unobserve(currentElement)
    }
  }, [elementRef, options])

  return isVisible
}

export default useIntersection
