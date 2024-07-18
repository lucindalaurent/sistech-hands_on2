import { CourseListContainer, CoursePageHeader, CallToAction, LicenseMark } from "../components";
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>SISTECH - Courses</title>
      </Head>
      <CoursePageHeader/>
      <main >
        <CourseListContainer/>
      </main>
      <footer>
        <CallToAction/>
        <LicenseMark/>
      </footer>
    </>
  );
}
