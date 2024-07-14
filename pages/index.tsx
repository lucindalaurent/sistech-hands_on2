import { CardListContainer, Header, Carousel, SectionMarkContainer, WelcomingInfo, CallToAction } from "../components";
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>SISTECH - E-Learning Platform for Women</title>
      </Head>

      {/* <Card
        title="lorem ipsum"
        description="10 min"
        thumbnail="/images/DummyThumbnail.png"
      /> */}
      <Header />
      <main >
        <WelcomingInfo />
        <section className="flex flex-col items-center justify-center min-h-screen py-2">
          <Carousel />
        </section>
        <SectionMarkContainer />
        <CardListContainer />
        <CallToAction/>
      </main>


    </>
  );
}
