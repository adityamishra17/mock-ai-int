import React from 'react'
import { UserButton } from '@clerk/nextjs'
import AddNewInterview from './_coponents/AddNewInterview'

function Dashboard  (){
  return (
    <div className = 'p-10'>
      <h2 className='font-bold text-2xl'>Dashboard</h2>
      <h3 className='text-gray-500'>Create and start your AI interview</h3>
      
      <div className='grid grid-cols-1 md:grid-cols-3 my -5'>
       <AddNewInterview/>
      </div>

    </div>

   
  )
}

export default Dashboard
