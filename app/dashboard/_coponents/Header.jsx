import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className ='flex p-4 items-center justify-between bg-secondary shadow-sm '>
      <Image src ={'/logo.svg'}width ={160} height={100} alt=' logo'/>
      <ul className ='flex gap-6'>
      <li>Dashboard</li>
      <li>Question</li>
      <li>Upgrade</li>
      <li>How it Works</li>
      </ul>

      <UserButton/>

      
    </div>
  )
}

export default Header
