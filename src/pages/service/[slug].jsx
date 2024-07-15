// import ServiceCards from '@/components/serviceCards';
import AreasCards from '@/components/areasCards';
import AvailableServices from '@/components/availableServices';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Professional from '@/components/professional';
import ServiceCards from '@/components/serviceCards';
import { cards } from '@/utils/data/notes'
import { useRouter } from 'next/router';
import React from 'react'


const ServicesPart = () => {

    const router = useRouter()
    const { slug } = router.query;

    const detail = cards.find(card => card?.key === router.query.slug)
    const alternative = cards.filter(card => card?.key !== router.query.slug)

    // console.log(detail, "detaildetail")

    // const detail = cards.find(card => card?.key === key);
    // const alternative = cards.filter(card => card?.key !== key);


    return (
        <>
            <Navbar />
            <Professional title={detail?.h1} desc={detail?.p} image={detail?.img} />
            <AvailableServices text={"Available Services"} />
            {/* <p>Post: {router.query.slug}</p> */}
            <ServiceCards data={alternative} />
            <AvailableServices text={"Service Areas"} />
            <AreasCards />
            <Footer />
        </>
    )
}

export default ServicesPart;
