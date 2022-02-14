import Head from "next/head";
import BannerTop from "../components/BannerTop/BannerTop";
import Hero from "../components/Hero/Hero";
import CelebrityVoteSection from "../components/CelebrityVoteSection/CelebrityVoteSection";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.scss";
import BannerBottom from "../components/BannerBottom/BannerBottom";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import { promises as fs } from "fs";
import path from "path";

export default function Home(props) {
  useEffect(() => {
    console.log(props.data);
  }, [props.data]);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Rule of Thumb</title>
      </Head>
      <div className={styles.bodyContainer}>
        <Navbar />
        <Hero />
        <div className={styles.center}>
          <BannerTop />
          <CelebrityVoteSection />
          <BannerBottom />
          <Footer />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const dataDirectory = path.join(process.cwd(), "data");
  const filePath = path.join(dataDirectory, "celebrities.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  return {
    props: {
      data: JSON.parse(fileContents),
    },
  };
}
