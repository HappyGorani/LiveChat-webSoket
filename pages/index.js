import Head from "next/head";
import LiveChat from "../components/livechat";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="SimpleChat" content="웹소켓 soket.io를 이용한 채팅" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LiveChat />
      </main>
    </div>
  );
}
