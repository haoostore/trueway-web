"use client"
import { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import styles from './Features.module.css'

const Features = () => {
  const featuresRef = useRef();
  const { inViewport, } = useInViewport(featuresRef);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (inViewport) setVisible(true);
  }, [inViewport]);

  return (
    <section className={`${styles.wrap} ${isVisible ? styles.wrapLoaded : ""}`} ref={featuresRef}>
      <ul className={styles.main}>
        <li className={styles.featureItem}>
          <div className={styles.featureItemHeader}>
            <p className={styles.featureItemHeaderTop} data-content="01">
              GIFTS PROCUREMENT FOR<br /> PRIVATE EVENTS
            </p>
            <h3 className={styles.featureItemHeaderMain}>
              活動禮贈品採購
            </h3>
            <span className={styles.decoText}>01</span>
          </div>
          <div className={styles.featureItemMain}>
            我們為各種活動提供特別設計的獎品，無論是商業會議、展覽活動還是社交聚會。我們的目標是提供與活動主題相關且令人難忘的禮物，以提升活動的價值和參與者的體驗，幫助客戶與活動參與者創造更加密切的友好關係。

          </div>
        </li>
        <li className={styles.featureItem}>
          <div className={styles.featureItemHeader}>
            <p className={styles.featureItemHeaderTop} data-content="02">
              CUSTOM BRANDED BUSINESS GIFTS <br />FOR COMPANIES
            </p>
            <h3 className={styles.featureItemHeaderMain}>
              公司商務贈品採購
            </h3>
            <span className={styles.decoText}>02</span>
          </div>
          <div className={styles.featureItemMain}>
            我們為企業提供各種禮贈方案，包括企業贈品、員工獎勵、客戶禮物等。我們理解企業形象的重要性，因此我們專注於為企業客戶打造符合其品牌形象和價值觀的禮贈品選項。無論是推廣活動、重要會議還是客戶招待，我們都能提供獨特、有品味的禮物，以加強企業與合作夥伴和客戶之間的關係。

          </div>
        </li>
        <li className={styles.featureItem}>
          <div className={styles.featureItemHeader}>
            <p className={styles.featureItemHeaderTop} data-content="03">
              MERCH PROCUREMENT FROM <br />JAPAN & KOREA
            </p>
            <h3 className={styles.featureItemHeaderMain}>
              日韓商品採購
            </h3>
            <span className={styles.decoText}>03</span>
          </div>
          <p className={styles.featureItemMain}>
            我們深知市場上客戶對獨特和高品質商品的需求。因此，我們與日本和韓國的供應商緊密合作，精挑細選優質商品，包括人氣伴手禮、美妝產品、生活用品等。我們確保所提供的商品符合客戶的品味和需求，並追求卓越品質。


          </p>
        </li>
      </ul >
    </section >

  );
}






export default Features;