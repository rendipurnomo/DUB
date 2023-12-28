import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {
  HandCoins,
  Factory,
  House,
  ShoppingBag,
  PhoneCall,
  ShoppingCartSimple,
  Bell,
} from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="flex justify-between p-4 items-center bg-gradient-to-l from-secondary via-primary to-secondary">
      <Link to="/">
        <img className="h-14" src={logo} alt="logo" />
      </Link>
      <nav className="max-md:fixed bottom-4 left-4 right-4 rounded-2xl md:rounded-full bg-light/30  backdrop-blur-2xl text-light md:text-secondary  [&_.active]:text-primary z-50">
        <Navlist />
      </nav>
      <div className="flex gap-4 text-black">
        <Link to="/" className="bg-light p-2 rounded-full">
          <Bell size={24} />
        </Link>
        <Link to="/cart" className="relative bg-light p-2 rounded-full">
          <ShoppingCartSimple size={24} />
          <div className="absolute -top-0 -right-0 w-5 h-5 flex justify-center items-center rounded-full bg-primary">
            <span className="text-light">2</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

const Navlist = () => {
  return (
    <ul className="flex justify-between items-center">
      {menu.map(({ name, path, icon }) => (
        <li
          key={name}
          className="p-2 md:p-4 [&_.active]:md:bg-secondary [&_.active]:md:p-2 [&_.active]:md:rounded-full [&_.active]:md:border-2 [&_.active]:md:border-light [&_.active]:md:text-light">
          <NavLink
            to={path}
            className="hover:text-secondary flex flex-col items-center md:hover:text-yellow-600">
            <div className="p-2 md:hidden">{icon}</div>
            <span className="text-xs md:text-base md:font-bold">{name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const menu = [
  {
    name: 'Home',
    icon: <House size={24} />,
    path: '/',
  },
  {
    name: 'Services',
    icon: <HandCoins size={24} />,
    path: '/services',
  },
  {
    name: 'About Us',
    icon: <Factory size={24} />,
    path: '/about',
  },
  {
    name: 'Shop',
    icon: <ShoppingBag size={24} />,
    path: '/shop',
  },
  {
    name: 'Contact Us',
    icon: <PhoneCall size={24} />,
    path: '/contact',
  },
];
