import Head from "next/head";
import InputBox from "../components/inputbox";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="SimpleChat" content="웹소켓 soket.io를 이용한 채팅" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InputBox />
      <main></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
