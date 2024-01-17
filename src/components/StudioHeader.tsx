import Image from 'next/image'
import logo from '@/aseets/logo.png'
import Link from 'next/link'
import { IoReturnDownBack } from 'react-icons/io5'

const StudioHeader = (props: any) => {
  return (
    <div>
      <div className='p-5 bg-slate-200 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2 font-semibold hover:text-yellow-600'>
          <IoReturnDownBack className='text-2xl' />
          Go to Website
        </Link>
        <div className='flex items-center gap-2'>
          <p className='font-semibold'>Admin Studio UMKM Digital Blockchain</p>
          <Image src={logo} width={50} height={50} alt='logo' />
        </div>
      </div>
      {props.renderDefault(props)}
    </div>
  )
}

export default StudioHeader