"use client"
import styles from './EyeCatch.module.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import Marquee from "react-fast-marquee";


const EyeCatch = () => {
  return (
    <ParallaxProvider>
      <section className={styles.eyeCatchWrap}>

        <ParallaxBanner
          className={styles.eyeCatchMain}
        />
        <div className={styles.marqueeWrap}>
          <Marquee>
            <p className={styles.marqueeText} >
              客製化禮品. 辦公用具. 居家生活. 環保餐具. 日韓商品採購. 商務禮盒. 3C手機配件. 人氣伴手禮. 美妝用品. 廚房用具.&nbsp;
            </p>
            <p className={styles.marqueeText} >
              客製化禮品. 辦公用具. 居家生活. 環保餐具. 日韓商品採購. 商務禮盒. 3C手機配件. 人氣伴手禮. 美妝用品. 廚房用具.&nbsp;
            </p>
          </Marquee>
        </div>
      </section>
    </ ParallaxProvider>
  );
}


export default EyeCatch;