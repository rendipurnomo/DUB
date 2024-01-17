import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signIn, signOut, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { getSession } from '@auth0/nextjs-auth0';

const Profile = async() => {
   const { user }: any = await getSession();
  // const { data: session } = useSession();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="hidden md:block">
          <AvatarImage
            src={
              user
                ? user?.image!
                : 'https://github.com/shadcn.png'
            }
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push('/profile')}>Settings
        </DropdownMenuItem>
        <DropdownMenuItem>History</DropdownMenuItem>
        {!user ? (
          <DropdownMenuItem
            onClick={() =>
              user ? router.push('/api/auth/login') : toast.error('Your are signed in')
            }>
            Login
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            onClick={() =>
              router.push('/api/auth/logout')
            }>
            Logout
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
