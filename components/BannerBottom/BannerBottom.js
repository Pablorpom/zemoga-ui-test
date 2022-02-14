import styles from "./BannerBottom.module.scss";
import Image from "next/image";
import image from "../../public/bg-people.png";

export default function BannerBottom() {
  return (
    <div className={styles.bannerButtom}>
      <div className={styles.background}></div>
      <div className={styles.imageContainer}>
        <Image src={image} alt="people" layout="fill" objectFit="cover" />
      </div>
      <h3 className={styles.text}>
        Is there anyone else you would want us to add?
      </h3>
      <button className={styles.button}>Submit a name</button>
    </div>
  );
}
