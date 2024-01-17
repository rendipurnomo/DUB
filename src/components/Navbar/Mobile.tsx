import { HomeIcon, ShoppingBag, User, Newspaper } from 'lucide-react';
import { useRouter } from 'next/navigation';

const MobileMenu = () => {
  const router = useRouter();
  return (
    <nav className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-xl p-4">
      <ul className="flex justify-between items-center [&_.active]:text-primary">
        {NavList.map((item) => (
          <li key={item.name}>
            <button onClick={() => router.push(item.path)} className="flex flex-col items-center w-14">
              {item.icon}
              <span className="text-xs">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;

const NavList = [
  {
    path: '/',
    name: 'Home',
    icon: <HomeIcon className="w-8 h-8" />,
  },
  {
    path: '/shop',
    name: 'Shop',
    icon: <ShoppingBag className="w-8 h-8" />,
  },
  {
    path: '/news',
    name: 'News',
    icon: <Newspaper className="w-8 h-8" />,
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: <User className="w-8 h-8" />,
  },
];
