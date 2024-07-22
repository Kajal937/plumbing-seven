import React from 'react';

const GalleryImg = () => {
    const images = [
        {
            img: "https://plumbing-seven.vercel.app/gallery/01.avif",
        },
        {
            img: "https://plumbing-seven.vercel.app/gallery/02.avif",
        },
        {
            img: "https://plumbing-seven.vercel.app/gallery/03.avif",
        },
        {
            img: "https://plumbing-seven.vercel.app/gallery/04.avif",
        },
        {
            img: "https://plumbing-seven.vercel.app/gallery/05.avif",
        },
        {
            img: "https://plumbing-seven.vercel.app/gallery/06.avif",
        },
        {
            img: "https://plumbing-seven.vercel.app/gallery/07.avif",
        },
        {
            img: "https://plumbing-seven.vercel.app/gallery/08.avif",
        },
        {
            img: "https://plumbing-seven.vercel.app/gallery/09.avif",
        },
        {
            img: "https://plumbing-seven.vercel.app/gallery/18.avif",
        },
        {
            img: "https://plumbing-seven.vercel.app/gallery/15.avif",
        },
        {
            img: "https://plumbing-seven.vercel.app/gallery/12.avif",
        },
        {
            img: "https://plumbing-seven.vercel.app/gallery/10.avif",
        },
        {
            img: "https://plumbing-seven.vercel.app/gallery/13.avif",
        },
        {
            img: "https://plumbing-seven.vercel.app/gallery/17.avif",
        }


    ];

    return (
        <div className="mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-[77px]">
                {images.map((src, index) => (
                    <div key={index} className="grid gap-4">
                        <img className="h-full max-w-full rounded-lg object-cover" src={src.img} alt="gallery" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryImg;
