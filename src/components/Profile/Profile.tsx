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

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="hidden md:block">
          <AvatarImage
            src={
              session?.user
                ? session?.user?.image!
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
        {!session?.user ? (
          <DropdownMenuItem
            onClick={() =>
              !session?.user ? signIn() : toast.error('Your are signed in')
            }>
            Login
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            onClick={() =>
              signOut({
                callbackUrl: 'http://localhost:3000',
              })
            }>
            Logout
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
