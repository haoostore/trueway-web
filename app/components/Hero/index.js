"use client"
import { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import Image from 'next/image'
import styles from './Hero.module.css'
import HeroSlider from "../HeroSlider"

const Hero = () => {
  const heroRef = useRef();
  const { inViewport, } = useInViewport(heroRef);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (inViewport) setVisible(true);
  }, [inViewport]);

  return (
    <section className={`${styles.heroWrap} ${isVisible ? styles.heroWrapLoaded : ""}`} ref={heroRef}>
      <div className={styles.heroCopyWrap}>
        <h1 className={styles.heroCopy}>
          精緻企業禮贈品服務<br />
          用心照亮每一瞬間
        </h1>
      </div>
      <div className={styles.heroSlider}>
        <HeroSlider speed={80000} />
      </div>
      <Image
        src="/logo-square.svg"
        alt="Good Day Market Logo"
        className={styles.gdmLogoSquare}
        width={288}
        height={288}
        priority
      />
      <Image
        src="/circle-black.svg"
        alt="Good Day Market Circle Logo"
        className={styles.gdmCircle}
        width={160}
        height={160}
        priority
      />
    </section>
  )
}

export default Hero