import Head from "next/head";
import { useRef } from "react";
import Canvas from "../src/components/Canvas";
import HamburgerMenu from "../src/components/HamburgerMenu";
import TextNoti from "../src/components/TextNoti";

export default function Home() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  return (
    <div className={"container"}>
      <Head>
        <title>Noti - Your notes anywhere!</title>
        <meta
          name="description"
          content="Access and make notes anywhere with noti"
        />
        <link rel="icon" href="/images/notes.png" />
      </Head>
      <main className={"main"}>
        <TextNoti />
        {/* <Canvas canvasRef={canvasRef} ctxRef={ctxRef} /> */}
        <HamburgerMenu canvasRef={canvasRef} ctxRef={ctxRef} />
      </main>
    </div>
  );
}
