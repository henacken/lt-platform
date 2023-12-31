import React from 'react'

interface LogoProps {
  style: string
  src: string
  alt: string
}

const Icon: React.FC<LogoProps> = ({ style, src, alt }) => {
  return <img className={style} src={src} alt={alt} />
}

export default Icon
