import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="border-[0.1px] border-custom mt-7"></div>
            <div className="max-w-[1280px] w-full mx-auto py-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="flex justify-center md:justify-start w-[22%]">
                        <img src='https://plumbing-seven.vercel.app/logo.png' alt="Logo" className="w-[50%] md:w-full" />
                    </div>

                    <div className="flex gap-[18px] justify-center">
                        <h2 className="">Locations</h2>
                        <h2 className="">Gallery</h2>
                        <h2>Contact Us</h2>
                    </div>

                    <div className="flex justify-center md:justify-end space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-brand-twitter"
                            style={{ width: 'calc(1.125rem * var(--mantine-scale))', height: 'calc(1.125rem * var(--mantine-scale))' }}
                        >
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-brand-youtube"
                            style={{ width: 'calc(1.125rem * var(--mantine-scale))', height: 'calc(1.125rem * var(--mantine-scale))' }}
                        >
                            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
                            <path d="M10 9l5 3l-5 3z"></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-brand-instagram"
                            style={{ width: 'calc(1.125rem * var(--mantine-scale))', height: 'calc(1.125rem * var(--mantine-scale))' }}
                        >
                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M16.5 7.5l0 .01"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
