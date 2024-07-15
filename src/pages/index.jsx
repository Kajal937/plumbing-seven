import AreasCards from '@/components/areasCards';
import AvailableServices from '@/components/availableServices';
import BackgroundImg from '@/components/backgroundImg';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import RepairCards from '@/components/repairCards';
import ServiceCards from '@/components/serviceCards';
import Testimonals from '@/components/testimonals';
import React from 'react'
// import ServicesPart from './service/[slug]';
import { cards } from '@/utils/data/notes';



const HomePge = () => {


  return (

    <>
      <Navbar />
      <BackgroundImg />
      <AvailableServices text={"Available Services"} />
      <ServiceCards data={cards} />
      <AvailableServices text={"Service Areas"} />
      <AreasCards />
      <AvailableServices text={"What We Offer!"} />
      <RepairCards />
      <AvailableServices text={"TESTIMONIALS"} />
      <Testimonals />
      <Footer />

    </>
  )
}

export default HomePge;
