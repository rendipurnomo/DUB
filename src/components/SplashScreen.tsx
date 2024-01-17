'use client';
import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import Image from 'next/image';

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const animete = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });
    loader
      .add({
        targets: '#logo',
        delay: 0,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo',
      })
      .add({
        targets: '#logo',
        delay: 0,
        scale: 1.5,
        duration: 500,
        easing: 'easeInOutExpo',
      })
      .add({
        targets: '#logo',
        delay: 0,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo',
      })
      .add({
        targets: '#logo',
        delay: 0,
        scale: 1.5,
        duration: 500,
        easing: 'easeInOutExpo',
      })
      .add({
        targets: '#logo',
        delay: 0,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo',
      })
      .add({
        targets: '#logo',
        delay: 0,
        scale: 1.5,
        duration: 500,
        easing: 'easeInOutExpo',
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animete();
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      className="w-screen h-screen bg-stone-900 flex justify-center items-center"
      isMounted={isMounted}>
      <Image id="logo" src={'/logo.png'} width={80} height={80} alt="logo" />
    </div>
  );
};

export default SplashScreen;
