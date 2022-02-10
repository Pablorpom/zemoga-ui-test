import Image from "next/image";
import popeImage from "../../public/pope-francis.png";
import styles from "./Hero.module.scss";
import HeroClosingGauge from "./HeroClosingGauge";
import HeroFeaturedCard from "./HeroFeaturedCard";

export default function Hero() {
  return (
    <header className={styles.root}>
      <div className={styles.heroContainer}>
        <div className={styles.imageContainer}>
          <Image
            priority
            src={popeImage}
            alt="Pope Francis"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <HeroFeaturedCard />
        <HeroClosingGauge />
      </div>
    </header>
  );
}
