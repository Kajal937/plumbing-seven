import React from 'react';

const MapContact = () => {
    return (
        <div className='max-w-[1280px] w-full mx-auto px-4'>
            <iframe className='rounded-lg  sm:px-[15px] md:px-[15px] lg:px-[15px] xl:px-[15px]'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.034703142246!2d75.7857727751433!3d30.885690178225175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8175c66b6251%3A0x4cf298d93e86334!2sWave%20Mall%20Ludhiana!5e0!3m2!1sen!2sin!4v1720370883259!5m2!1sen!2sin"
                width="100%"
                height="310"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default MapContact;
