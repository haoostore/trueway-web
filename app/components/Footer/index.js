"use client"
import styles from './Footer.module.css'
import Image from 'next/image'



const Footer = () => {
  return (
    <>
      <footer className={styles.footerWrap}>
        <div className={styles.footerMain} >
          <p>
            ©2022 GOOD DAY MARKET
          </p>
          <Image
            src="/logo.svg"
            alt="Good Day Market Logo"
            className={styles.footerMainLogo}
            width={155}
            height={47}
            priority
          />
        </div>
      </footer>

    </>
  );
}


export default Footer;