import styles from './Header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Image
          src="/logo.svg"
          alt="Good Day Market Logo"
          className={styles.gdmLogo}
          width={155}
          height={47}
          priority
        />
      </nav>
    </header>);
}


export default Header;