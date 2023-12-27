import { HandCoins, Factory, House, ShoppingBag,PhoneCall } from '@phosphor-icons/react';

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
    path: '/about-us',
  },
  {
    name: 'Shop',
    icon: <ShoppingBag size={24} />,
    path: '/shop',
  },
  {
    name: 'Contact Us',
    icon: <PhoneCall size={24} />,
    path: '/contact-us',
  },
];

export { menu };
