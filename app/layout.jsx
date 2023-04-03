"use client"
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {usePathname} from 'next/navigation'


export default function RootLayout({ children }) {

  // TODO:
  // clamp texts, responsiveness, animation triggers, load page, video, 
  // navbar colors, background-colors, links, carousel functionality, other pages.
  const pathname = usePathname();

  const hideFooter = pathname === '/contact' 

  console.log(hideFooter)
  console.log(pathname)
  
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
       <body>
       <Navbar />
        {children}
        {hideFooter ? null : <Footer />}
       </body>
    </html>
  )
}
