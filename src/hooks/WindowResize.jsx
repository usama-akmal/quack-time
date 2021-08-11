import { useState } from "react";

const calculatSize = (width) => {

  if (width >= 1024)
    return "lg"
  else if (width >= 640)
    return "md"
  else if (width >= 475)
    return "sm"
  return "xs"
}

const useWindowResize = () => {

  const [windowSize, setWindowSize] = useState(calculatSize(window.innerWidth))

  const handleScreenSizeChanged = (e) => {

    setWindowSize(calculatSize(window.innerWidth))
  }

  window.addEventListener("resize", handleScreenSizeChanged)

  return windowSize
}

export default useWindowResize