import React from 'react';

const title: string = "Indonesia’s Professional Skilling Platform For Women";

const description: string = `Master today’s digital skills with industry leaders, 
get personalized mentorship, and access a community rich in career opportunities with us! 
Be a part of our journey to help young women get professional guidance to forge their career in tech <3`;

function WelcomingInfo() {
    return (
        <section className="hero flex flex-col items-center gap-6 ml-4 px-0 sm:px-8 lg:px-64 py-12">
          <h1 id="welcome" className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-center py-5">
            {title}
          </h1>
          <div id="basic-info" className="text-center text-lg sm:text-xl font-medium mt-4">
            <p>
              {description}
            </p>
          </div>
        </section>
      );
}

export { WelcomingInfo };
