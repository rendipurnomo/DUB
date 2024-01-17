"use client";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { useSession } from 'next-auth/react';
import { useUser } from '@auth0/nextjs-auth0/client';

const UserProfile = async() => {
  // const { data: session } = useSession();
  const { user, error, isLoading } = useUser();
  return (
    <div className='flex flex-col items-center justify-center'>
      <Avatar>
        <AvatarImage
          src={
            user
              ? user.picture!
              : 'https://github.com/shadcn.png'
          }
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1>{user?.name}</h1>
    </div>
  );
};

export default UserProfile;
