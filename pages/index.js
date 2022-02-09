import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Rule of Thumb</title>
      </Head>
      <div>
        <Navbar />
      </div>
    </div>
  );
}
