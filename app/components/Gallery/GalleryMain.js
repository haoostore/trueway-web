"use client"
import styles from "./Gallery.module.css"
import { useParallax } from 'react-scroll-parallax';
import Image from 'next/image'

const Gallery = () => {
  const parallaxCol01 = useParallax({
    speed: -10,
  });
  const parallaxCol02 = useParallax({
    speed: -30,
  });

  const parallaxCol03 = useParallax({
    speed: -10,
  });

  const parallaxCol04 = useParallax({
    speed: -30,
  });


  return (
    <section className={styles.galleryWrap}>
      <div className={styles.galleryIconWrap}>
        <Image
          src="/logo-square.svg"
          alt="Good Day Market Logo"
          className={styles.galleryIcon}
          width={320}
          height={320}
          priority
        />
      </div>
      <div className={styles.galleryPhotosWrap}>
        <div className={styles.galleryPhotosColumn} ref={parallaxCol01.ref}>
          <div className={`${styles.galleryPhoto} ${styles.galleryPhoto01}`}></div>
          <div className={`${styles.galleryPhoto} ${styles.galleryPhoto02}`}></div>
          <div className={`${styles.galleryPhoto} ${styles.galleryPhoto03}`}></div>
        </div>
        <div className={styles.galleryPhotosColumn} ref={parallaxCol02.ref}>
          <div className={`${styles.galleryPhoto} ${styles.galleryPhoto04}`}></div>
          <div className={`${styles.galleryPhoto} ${styles.galleryPhoto05}`}></div>
          <div className={`${styles.galleryPhoto} ${styles.galleryPhoto06}`}></div>
        </div>
        <div className={styles.galleryPhotosColumn} ref={parallaxCol03.ref}>
          <div className={`${styles.galleryPhoto} ${styles.galleryPhoto07}`}></div>
          <div className={`${styles.galleryPhoto} ${styles.galleryPhoto08}`}></div>
          <div className={`${styles.galleryPhoto} ${styles.galleryPhoto09}`}></div>
        </div>
        <div className={styles.galleryPhotosColumn} ref={parallaxCol04.ref}>
          <div className={`${styles.galleryPhoto} ${styles.galleryPhoto10}`}></div>
          <div className={`${styles.galleryPhoto} ${styles.galleryPhoto11}`}></div>
          <div className={`${styles.galleryPhoto} ${styles.galleryPhoto12}`}></div>
        </div>
      </div>
    </section>
  )
}

export default Gallery;