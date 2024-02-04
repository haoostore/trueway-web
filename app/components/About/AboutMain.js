"use client"
import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css'
import { useParallax } from 'react-scroll-parallax';
import isMobileFunc from "../../../utils/use-is-mobile";
import { useInViewport } from 'react-in-viewport';

const AboutMain = () => {
  const aboutRef = useRef();
  const { inViewport, } = useInViewport(aboutRef);
  const [isVisible, setVisible] = useState(false);
  const isMobile = isMobileFunc();
  const speed = isMobile ? 0 : - 10
  const parallax = useParallax({ speed });

  useEffect(() => {
    if (inViewport) setVisible(true);
  }, [inViewport]);

  return (
    <section className={`${styles.aboutWrap} ${isVisible ? styles.aboutWrapLoaded : ""}`} ref={aboutRef}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutBg} >
          <h2>關於良辰吉市</h2>
        </div>

        <div className={styles.aboutCopyWarp} ref={parallax.ref}>
          <div className={styles.aboutCopyMain}>
            <div className={styles.aboutCopyInner} >
              <div>
                <h3>專業的精緻服務<br />
                  完善客戶的禮贈品需求</h3>
              </div>
              <div>
                <p>良辰吉市致力於提供高品質、獨特且有價值的禮贈品，以滿足個人和企業在各種場合下的禮贈需求。無論是企業贈品、活動獎品、節日禮物還是個人特殊場合的禮贈，我們的目標是為客戶提供無與倫比的禮物選擇和卓越的客戶服務。</p>
                <p className={styles.mobileHide}>我們與優質供應商合作，選擇優質原材料，以確保我們的禮贈品在外觀、功能和質量上都能夠滿足客戶的期望。</p>
                <p className={styles.mobileHide}>客戶滿意度是我們最優先的目標。我們的團隊致力於提供個性化的禮贈解決方案，從理念到實現的每一步都充分考慮客戶的需求和要求。我們不斷努力超越期望，以確保客戶對我們的產品和服務感到滿意。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default AboutMain;