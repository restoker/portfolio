
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { useRef } from 'react';

const Contact = () => {

    const container = useRef();
    const headerRef = useRef();
    const sectionsRef = useRef([]);

    useGSAP(() => {
        // const ctx = gsap.context(() => {
        gsap.to(headerRef.current, {
            y: 0,
            duration: 1,
            delay: 1,
            ease: "power3.out",
        });

        gsap.delayedCall(1.1, () => {
            sectionsRef.current.forEach((section) => {
                gsap.to(section.querySelectorAll("p"), {
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                });
            });
        });
        // }, container);

        // return () => ctx.revert();
    }, { scope: container });

    return (
        <>
            <div className="contact-page relative p-20" ref={container}>

                <div className="container">
                    <img src="https://cdn.cosmos.so/bf8161b0-95c0-4ae2-98f3-0d5f43cccb58?format=jpeg" alt="" className='absolute top-0 left-0 object-cover h-full w-full blur-lg' />
                    <div className="col mix-blend-difference">
                        <div className="where" ref={(el) => (sectionsRef.current[0] = el)}>
                            <div className="title">
                                <p className='text-white'>Where</p>
                            </div>
                            <div className="item text-white">
                                <p className=''>Spazio Alva</p>
                            </div>
                            <div className="item text-white">
                                <p className=''>Vicolo Terrà, 5 VR/B</p>
                            </div>
                            <div className="item text-white">
                                <p className=''>37129 . Verona . Italy</p>
                            </div>
                        </div>
                        <div className="vat" ref={(el) => (sectionsRef.current[1] = el)}>
                            <div className="title">
                                <p>VAT</p>
                            </div>
                            <div className="item">
                                <p>9724865620</p>
                            </div>
                        </div>
                    </div>

                    <div className="col text-white">
                        <div className="contact-header">
                            <h1 className='text-4xl' ref={headerRef}>Contact</h1>
                        </div>

                        <div
                            className="socials"
                            ref={(el) => (sectionsRef.current[2] = el)}
                        >
                            <div className="title">
                                <p>Socials</p>
                            </div>
                            <div className="item">
                                <p>
                                    <a href="#">Instagram</a>
                                </p>
                            </div>
                            <div className="item">
                                <p>
                                    <a href="#">LinkedIn</a>
                                </p>
                            </div>
                            <div className="item">
                                <p>
                                    <a href="#">Vimeo</a>
                                </p>
                            </div>
                        </div>

                        <div className="mail" ref={(el) => (sectionsRef.current[3] = el)}>
                            <div className="title">
                                <p>Mail</p>
                            </div>
                            <div className="item">
                                <p>
                                    <a href="#">restoker7@gmail.com</a>
                                </p>
                            </div>
                        </div>

                        <div className='mix-blend-difference absolute top-1/2 lg:right-20 lg:bottom-0'>
                            <h1 className='text-white text-[5rem]'>Chau 🤟</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact