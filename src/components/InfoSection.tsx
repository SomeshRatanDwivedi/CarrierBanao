import React, { startTransition, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const InfoSection = () => {
  const imageRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    startTransition(() => {
      navigate(path);
    });
  };

  useEffect(() => {
    const imageElement = imageRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            imageElement?.classList.remove("scrolled");
          } else {
            imageElement?.classList.add("scrolled");
          }
        });
      },
      { threshold: 1.0 } // Fully visible
    );

    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);

  return (
    <section className="w-full pt-4 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Your AI-Powered Career
            <br />
            Navigator
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl text-blue-400">
            Unlock your potential with tailored career advice, expert interview coaching, and cutting-edge AI tools for job success
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Button onClick={() => handleNavigate('/jobinsights')} size="lg" className="px-8 btn">
            Get Started
          </Button>
          <Link to="https://www.youtube.com/roadsidecoder">
            <Button size="lg" className="px-8 text-white">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image w-[90%] mx-auto">
            <img
              src="/banner.jpeg"
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto w-[1280px] h-[720px] transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;