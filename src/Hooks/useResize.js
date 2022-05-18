import { useState, useEffect } from 'react'

export const useResize = (limit = 900) => {
  const [isMinor, setIsMinor] = useState(
    window.innerWidth < limit ? true : false
  )

  const handleResize = () => {
    if (window.innerWidth < limit) {
      if (!isMinor) setIsMinor(true)
    } else if (isMinor) setIsMinor(false)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  })

  return isMinor
}