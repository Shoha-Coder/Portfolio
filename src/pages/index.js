  import Head from "next/head";
  import Helmet from "@/components/Helmet";
  import Style from "@/styles/Home.module.scss";
  import HomeContent from "@/components/HomeContent";
  import Game from "@/components/Snake/Game";
  import Container from "@/components/Container"

export default function Home() {
  return (
    <Container>
      <Helmet title="Home" />
      <Head>
        <meta
          name="description"
          content="Shoha Coder: Front end developer From Uzbekistan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Shoha_Coder, shohacoder@gmail.com" />

        <meta name="url" content="https://www.shoha-coder.uz" />
        <meta name="identifier-URL" content="https://www.shoha-coder.uz" />
        <meta name="news_keywords" content="Shoha Coder" />
        <meta
          name="og:description"
          content="Shakhrukh khan Asrorkhanov Front end Developer From Uzbekistan"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={Style.Home}>
        <HomeContent />
        <div className={Style.Game}>
          <Game />
        </div>
      </div>
    </Container>
  );
}