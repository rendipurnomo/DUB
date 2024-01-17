"use client";

import ModeToggle from '../DarkMode/Toggle';

import SearchButton from '../Search/Search';
import Profile from '../Profile/Profile';
import MobileMenu from './Mobile';
import Logo from '../ui/Logo';
import DekstopMenu from './Dekstop';
import CartSheet from '../Cart/CartSheet';
import { useState } from 'react';

const Navbar = () => {
  const [backdrop, setBackdrop] = useState('');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      setBackdrop('bg-white/20 backdrop-blur-xl');
    } else {
      setBackdrop('');
    }
  });
  return (
    <>
      <header
        className={`sticky top-0 right-0 left-0 container py-4 z-50 ${backdrop}`}>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <Logo />
              <DekstopMenu />
            </div>

            <div className="flex gap-1 md:gap-8 items-center">
              <SearchButton />
              <CartSheet />
              <Profile />
              <ModeToggle />
            </div>
          </div>
          <hr />
        </div>
      </header>
      <MobileMenu />
    </>
  );
};
export default Navbar;
