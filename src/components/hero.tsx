'use client';

import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  const [heroData, setHeroData] = useState<{ intro: string; resumeUrl: string } | null>(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await fetch('/api/hero');
        const data = await res.json();
        setHeroData(data);
      } catch (error) {
        console.error('Failed to load hero section data', error);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <section
      id="hero"
      className="bg-[url('/bg.png')] bg-center bg-no-repeat md:min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 py-8 bg-white text-white mt-10 "
    >
      <p className="text-base md:text-lg text-gray-600">Hi there,</p>

      <h1 className="text-3xl sm:text-4xl md:text-6xl font-ballet text-black mt-2">
        I am Muqadus Masood
      </h1>

      <h2 className="text-lg sm:text-xl md:text-2xl text-black mt-4">
        I am into{' '}
        <span className="text-blue-900 font-semibold">
          <Typewriter
            words={['UI/UX', 'Web Development', 'Data Analytics']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1200}
          />
        </span>
      </h2>

      <p className="mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg text-black leading-relaxed px-2">
        {heroData?.intro || 'Loading...'}
      </p>

      {heroData?.resumeUrl && (
        <a
          href={heroData.resumeUrl}
          download
          className="mt-8 inline-block bg-gradient-to-bl from-blue-400 to-blue-800 text-white px-4 py-1 text-sm md:text-lg  rounded-full transition duration-300 hover:scale-105 hover:bg-gradient-to-bl hover:from-blue-500 hover:to-green-400"
        >
          Download Resume
        </a>
      )}
    </section>
  );
}
