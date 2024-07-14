import { CardListContainer, Header, Carousel, SectionMarkContainer, WelcomingInfo, CallToAction } from "../components";
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
        <section className="flex flex-col items-center justify-center min-h-screen py-2">
          <Carousel />
        </section>
        <SectionMarkContainer />
        <CardListContainer />
      </main>
      <footer>
        <CallToAction/>
        <div className="lastSection p-6">
            <p id="copyright" className="text-center">&copy; 2024 SISTECH. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
