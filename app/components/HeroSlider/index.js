import styles from './HeroSlider.module.css'
import photoURLs from "./photoURLs"

const heroPhotos = photoURLs.map((image) => ({
  id: crypto.randomUUID(),
  image
}));

const HeroSlider = ({ speed = 5000 }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <ul style={{ "--speed": `${speed}ms` }}>
          {heroPhotos.map(({ id, image }) => (
            <li key={id}>
              <div className={styles.sliderImage}
                style={{ "background-image": `url(${image})` }}></div>
            </li>
          ))}
        </ul>
        <ul style={{ "--speed": `${speed}ms` }}>
          {heroPhotos.map(({ id, image }) => (
            <li key={id}>
              <div className={styles.sliderImage}
                style={{ "background-image": `url(${image})` }}></div>
            </li>
          ))}
        </ul>
        <ul style={{ "--speed": `${speed}ms` }}>
          {heroPhotos.map(({ id, image }) => (
            <li key={id}>
              <div className={styles.sliderImage}
                style={{ "background-image": `url(${image})` }}></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroSlider;
