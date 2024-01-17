"use client";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSession } from 'next-auth/react';

const UserProfile = () => {
  const { data: session } = useSession();

  return (
    <div className='flex flex-col items-center justify-center'>
      <Avatar>
        <AvatarImage
          src={
            session?.user
              ? session?.user?.image!
              : 'https://github.com/shadcn.png'
          }
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1>{session?.user?.name}</h1>
    </div>
  );
};

export default UserProfile;
