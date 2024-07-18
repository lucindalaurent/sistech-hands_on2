import {WelcomingInfo, Carousel} from "../../components";

function WelcomingSection() {
  return (
    <>
      <WelcomingInfo/>
      <section className="flex flex-col items-center justify-center min-h-screen">
        <Carousel />
      </section>
    </>
  );
}

export {WelcomingSection};