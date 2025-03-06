import { useEffect } from "react"

const ScrollToTop = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 200)
  }, [])
  return (
    <>{children}</>
  )
}

export default ScrollToTop
