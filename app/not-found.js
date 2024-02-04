import styles from './page.module.css'
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./components/Header'))
const Footer = dynamic(() => import('./components/Footer'))

export default function NotFound() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.notFoundWrap}>
          <h2>親愛的迷路了嗎？沒事，有良辰吉市 ❤️</h2>
          <h3>
            <a href="/">👉🏻按我就可以回首頁囉</a>
          </h3>
        </div>

      </main >
      <Footer />
    </div>
  );
}


