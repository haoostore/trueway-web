"use client"
import { ParallaxProvider } from 'react-scroll-parallax';
import GalleryMain from "./GalleryMain"

const Gallery = () => {
  return (
    <ParallaxProvider>
      <GalleryMain />
    </ParallaxProvider>
  )
}

export default Gallery;