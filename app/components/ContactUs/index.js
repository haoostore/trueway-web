"use client"
import styles from './ContactUs.module.css'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Image from 'next/image'

const ContactUs = () => {
  return (
    <ParallaxProvider>
      <section className={styles.contactUsWrap}>
        <div className={styles.contactUsBg}>
          <Parallax speed={-10}>
            <div className={styles.contactUsBgImg}></div>
          </Parallax>
        </div>
        <div className={styles.contactUsMain}>
          <Image
            src="/logo.svg"
            alt="Good Day Market Logo"
            className={styles.contactUsLogo}
            width={260}
            height={78}
            priority
          />
          <h3 className={styles.contactUsMainCopy}>
            專業的精緻服務<br />
            完善客戶的禮贈品需求
          </h3>
          <a href="https://line.me/ti/p/3OlHN3MjKP"
            className={styles.contactUsCTA}
            rel="nofollow" target="_blank">
            <span className={styles.contactUsCTAIcon}></span>
            透過LINE與我們諮詢
          </a>
        </div>
      </section>
    </ParallaxProvider>
  )
}

export default ContactUs;