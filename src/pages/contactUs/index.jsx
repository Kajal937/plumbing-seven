import Contact from '@/components/contact'
import Footer from '@/components/footer'
import MapContact from '@/components/mapContact'
import Navbar from '@/components/navbar'
import VisitContact from '@/components/visitContact'
import React from 'react'

const ContactUs = () => {
  return (
    <>

      <Navbar />
      <Contact />
      <VisitContact />
      <MapContact />
      <Footer />
    </>
  )
}

export default ContactUs
