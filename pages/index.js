import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Rule of Thumb</title>
      </Head>
      <Navbar />
      <Hero />
    </>
  );
}
