import React from 'react'
import Links from './components/Links'

export default function RootLayout({children}) {
  return (
    <>
    <div className='overflow-hidden'>
    <Links />
    {children}
    </div>
    </>
  )
}
