import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React from 'react'
import { useRef } from 'react';

const Hero = () => {
    const loaderGalleryRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        gsap.registerEffect({
            name: 'clipTitle',
            effect: (targets, config) => {
                const tl = gsap.timeline({
                    defaults: { duration: config.duration, ease: config.ease },
                });
                // Check if the text has already been split, if not, split it and mark it as done
                const chars = targets[0].classList.contains('text-split-done')
                    ? targets[0].querySelectorAll('.char')
                    : new SplitText(targets, { type: 'chars', charsClass: 'char' }).chars

                if (!targets[0].classList.contains('text-split-done')) {
                    targets[0].classList.add('text-split-done')
                }
                tl.fromTo(
                    chars,
                    {
                        x: config.x,
                        yPercent: config.yPercent,
                        clipPath: 'inset(0% 100% 120% -5%)',
                        transformOrigin: '0% 50%',
                    },
                    {
                        willChange: 'transform',
                        clipPath: 'inset(0% -100% -100% -5%)',
                        x: 0,
                        yPercent: 0,
                        stagger: config.stagger,
                        duration: config.duration,
                        ease: config.ease,
                        // opacity: 1,
                    },
                    // 0.05
                )
                return tl
            },
            defaults: { yPercent: 30, x: -30, duration: 0.8, ease: 'power3.out', stagger: -0.05 },
            extendTimeline: true,
        })
        const loader = {
            gallery: loaderGalleryRef.current,
            galleryItem: document.querySelectorAll('.loader_gallery_figure'),
            circleTop: document.querySelector('.loader_circle-top'),
            circleBottom: document.querySelector('.loader_circle-bottom'),
        };

        // const hero = {
        //     headingTitle: document.querySelector('.hero_heading_title'),
        //     headingTitleChars: document.querySelectorAll('.hero_heading_title > h1'),
        //     subheadingTitle: document.querySelector('.hero_subheading_title'),
        //     subheadingTitleChars: document.querySelectorAll('.hero_subheading_title > h2'),
        // };

        const init = () => {
            document.querySelector('body').style.overflowY = 'hidden';
            document.querySelector('body').setAttribute("data-lenis-prevent", "true");
            gsap.set(loader.gallery, { scale: 0.75 });
            gsap.set([loader.circleBottom, loader.circleTop], { yPercent: 0 });
            gsap.set([titleRef.current, subtitleRef.current], { autoAlpha: 0 });
            // gsap.set([hero.headingTitleChars, hero.subheadingTitleChars], { yPercent: -100 });

            setTimeout(() => {
                animateLoader();
                // animateHero();
            }, 1000);
        };

        const animateLoader = () => {
            const galleryItemCentered = loader.galleryItem.length / 2 - 1;
            const galleryItem = loader.galleryItem[galleryItemCentered.toFixed(0)];

            gsap.timeline({ defaults: { duration: 1.8, ease: 'expo.inOut' } })
                .to(loader.gallery, {
                    scale: 1,
                })
                .to(galleryItem, {
                    width: '100vw',
                }, 0)
                .to(loader.circleTop, {
                    yPercent: -100,
                },
                    0.2
                )
                .to(loader.circleBottom, {
                    yPercent: 100,
                    onComplete: () => {
                        loader.circleBottom.remove();
                        gsap.set('.loader', { position: 'absolute' })
                        document.querySelector('body').removeAttribute("data-lenis-prevent");
                    }
                }, 0.2)
                .to(titleRef.current, { autoAlpha: 1, }, '<')
                .to(subtitleRef.current, { autoAlpha: 1, }, '<')
                .clipTitle(titleRef.current)
                .clipTitle(subtitleRef.current, '<');
        };

        // const animateHero = () => {
        // const tl = gsap.timeline({ defaults: { duration: 1, delay: 4, ease: 'expo.inOut' } });
        // tl;
        //         .to(
        //             [hero.headingTitleChars, hero.subheadingTitleChars],
        //             {
        //                 yPercent: 0,
        //                 stagger: 0.05,
        //             },
        //             0
        // );
        // };

        init();
    }, [])
    return (
        <>
            <div className="loader">
                <div className="loader_wrapper">
                    <div className="loader_circle loader_circle-top"></div>
                    <div className="loader_circle loader_circle-bottom"></div>

                    <div ref={loaderGalleryRef} className="loader_gallery">
                        <div className="loader_gallery_figure">
                            <img
                                src="https://assets.lummi.ai/assets/QmX1NaN3o5sPFEU3YjkaccG3F7Yg9HzJbKCATSondTRw6X?auto=format&w=1500"
                                alt=""
                                className="loader_gallery_image"
                            />
                        </div>

                        <div className="loader_gallery_figure">
                            <img
                                src="https://cdn.cosmos.so/1c1ad4a5-5993-41e2-be1e-d5833defb599?format=jpeg"
                                alt=""
                                className="loader_gallery_image"
                            />
                        </div>

                        <div className="loader_gallery_figure">
                            <img
                                src="https://cdn.cosmos.so/901cc676-40bc-4da2-b3c1-86e502b0a440?format=jpeg"
                                alt=""
                                className="loader_gallery_image"
                            />
                        </div>

                        <div className="loader_gallery_figure">
                            <img
                                src="https://assets.lummi.ai/assets/QmWuGk36GjvoG3BYJ8U3GxmkA3Pv1sFA2Mfbf9AbEJsjmb?auto=format&w=1500"
                                alt=""
                                className="loader_gallery_image"
                            />
                        </div>

                        <div className="loader_gallery_figure">
                            {/* <img
                                src="https://cdn.cosmos.so/adcf0de2-a08d-46d0-aa31-2faa39009c8f?format=jpeg"
                                alt=""
                                className="loader_gallery_image"
                            /> */}
                            <img
                                src="https://cdn.cosmos.so/92aa831d-895b-439d-88f2-1e7cc1fc4be4?format=jpeg"
                                alt=""
                                className="loader_gallery_image"
                            />
                            {/* <video src="https://cdn.cosmos.so/90000df5-bfe1-4a55-806d-af2514df375e.mp4" loop muted autoPlay className="h-full w-full object-cover"> */}
                            {/* <video src="https://cdn.cosmos.so/9eb2455f-5ebe-4226-9a13-013226a48de8.mp4" loop muted autoPlay className="h-full w-full object-cover"> */}
                            {/* <video src="https://cdn.cosmos.so/b3c18e8e-e402-402e-a0e2-911cd735aba5.mp4" loop muted autoPlay className="h-full w-full object-cover"> */}
                            {/* <video src="https://cdn.cosmos.so/2a98ff36-eb40-4ca9-8e43-6c5de6abf383.mp4" loop muted autoPlay className="h-full w-full object-cover"> */}
                            {/* </video> */}
                        </div>

                        <div className="loader_gallery_figure">
                            <img
                                src="https://cdn.cosmos.so/aeb672f2-1388-44ed-a7ef-f7d9e07f53d3?format=jpeg"
                                alt=""
                                className="loader_gallery_image"
                            />
                        </div>

                        <div className="loader_gallery_figure">
                            <img
                                src="https://cdn.cosmos.so/e987b8cc-8da5-4d9b-8d31-b6487739d165?format=jpeg"
                                alt=""
                                className="loader_gallery_image"
                            />
                        </div>

                        <div className="loader_gallery_figure">
                            <img
                                src="https://cdn.cosmos.so/2f2ce3c4-46f4-49f1-bc45-2efd709fb735?format=jpeg"
                                alt=""
                                className="loader_gallery_image"
                            />
                        </div>

                        <div className="loader_gallery_figure">
                            <img
                                src="https://cdn.cosmos.so/8f2796ea-2dac-424e-a6f0-056e248f3893?format=jpeg"
                                alt=""
                                className="loader_gallery_image"
                            />
                        </div>
                    </div>
                </div>
            </div >

            <div className='relative z-20 mix-blend-difference flex flex-col'>
                <h2 ref={titleRef} className='text-white italic uppercase text-9xl'>Restoker</h2>
                <h2 ref={subtitleRef} className='text-white uppercase text-9xl'>FullStack</h2>
            </div>
        </>
    )
}

export default Hero