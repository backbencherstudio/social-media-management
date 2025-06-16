import React from 'react'
import ProfileInfo from './_components/profileInfo'
import Tabs from './_components/tabs'

export default function Profile() {
  return (
    <div className='space-y-6'>
       <ProfileInfo />
       <Tabs />
    </div>
  )
}
