import styles from './page.module.css'
import dynamic from 'next/dynamic';
import Hero from "./components/Hero"
import About from "./components/About"
const Header = dynamic(() => import('./components/Header'))
const EyeCatch = dynamic(() => import('./components/EyeCatch'))
const Features = dynamic(() => import('./components/Features'))
const Gallery = dynamic(() => import('./components/Gallery'))
const ContactUs = dynamic(() => import('./components/ContactUs'))
const Footer = dynamic(() => import('./components/Footer'))

export default function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <EyeCatch />
        <Features />
        <ContactUs />
        <Gallery />
        <ContactUs />
      </main >
      <Footer />
    </div>
  );
}

