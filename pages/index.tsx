import { CardListContainer, Header, Carousel, SectionMarkContainer, WelcomingInfo, CallToAction, LicenseMark } from "../components";
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>SISTECH - E-Learning Platform for Women</title>
      </Head>
      <Header />
      <main >
        <WelcomingInfo />
        <section className="flex flex-col items-center justify-center min-h-screen">
          <Carousel />
        </section>
        <SectionMarkContainer />
        <CardListContainer />
      </main>
      <footer>
        <CallToAction/>
        <LicenseMark/>
      </footer>
    </>
  );
}
