import {MainHeader, CallToAction, LicenseMark, CourseSection, WelcomingSection } from "../components";
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>SISTECH - E-Learning Platform for Women</title>
      </Head>
      <MainHeader/>
      <main >
        <WelcomingSection/>
        <CourseSection/>
      </main>
      <footer>
        <CallToAction/>
        <LicenseMark/>
      </footer>
    </>
  );
}
