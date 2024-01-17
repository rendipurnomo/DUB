import Image from 'next/image'
import React from 'react'
import logo from '../../aseets/logo.png'

const Logo = () => {
  return (
    <Image src={logo} alt="logo" width={70} height={70}/>
  )
}

export default Logo