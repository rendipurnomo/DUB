import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FacebookLogo, InstagramLogo, PaperPlaneTilt, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='px-12'>
      <div className='flex flex-col md:flex-row justify-between gap-4 py-8'>
        <div className='flex flex-col items-center gap-2 font-bold'>
          <img className='h-12 w-12' src={logo} alt="logo" />
          <h1>Digital UMKM Blockchain</h1>
          <div className='flex gap-2'>
          <FacebookLogo className='hover:text-primary' size={24} />
          <InstagramLogo className='hover:text-red-400' size={24} />
          <TwitterLogo className='hover:text-primary' size={24} />
          <YoutubeLogo className='hover:text-red-600' size={24} />
          </div>
        </div>
        <div className='flex gap-8 flex-col md:flex-row'>
        <div className='flex gap-4 flex-col'>
          <Link to="/about" className='hover:text-primary font-bold'>About</Link>
          <Link to="/contact" className='hover:text-primary'>Contact</Link>
          <Link to="/faq" className='hover:text-primary'>FAQ</Link>
          <Link to="/term" className='hover:text-primary'>Term & Condition</Link>
          <Link to="/privacy" className='hover:text-primary'>Privacy Policy</Link>
        </div>
        <div className='flex gap-4 flex-col'>
          <Link to="/faq" className='hover:text-primary font-bold'>FAQ</Link>
          <Link to="/term" className='hover:text-primary'>Term & Condition</Link>
          <Link to="/privacy" className='hover:text-primary'>Privacy Policy</Link>
          </div>
        </div>
        <div className='flex flex-col font-semibold gap-2'>
          <h1>Subscribe</h1>
          <label htmlFor="email" className='flex'>
            <div className='bg-primary w-12 p-2 rounded-l-md'><PaperPlaneTilt size={24} /></div>
          <input type="text" placeholder='Enter your email' className='text-dark p-2 ring-0 outline-none rounded-r-md' />
          </label>
        </div>
      </div>
      <p className='flex justify-center items-center h-24 border-t-[1px] border-light/20'>Copyright &copy; {year}. Digital UMKM Blockchain All Right Reserved</p>
    </footer>
  )
}

export default Footer