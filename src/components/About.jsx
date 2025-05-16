import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const lenis = useLenis();

    useGSAP(() => {

        if (!lenis) return;

        lenis.on('scroll', ScrollTrigger.update);

        // gsap.ticker.add((time) => lenis.raf(time * 1000));
        // gsap.ticker.lagSmoothing(0);

        const settings = {
            trigger: document.querySelector('.trigger'),
            lerp: 0.05,
            numberOfClones: 10,
        };

        const tlMain = gsap.timeline({
            scrollTrigger: {
                trigger: settings.trigger,
                start: 'top top',
                end: '+=8000 bottom',
                scrub: true,
                pin: true,
            },
        });

        const overlay = document.querySelector('.trigger_overlay'); //?-----> Part2

        const cloneTitle = () => {
            const titleContainer = document.querySelector('.trigger_text'),
                title = document.querySelector('.trigger_text_title');

            for (let i = 0; i < settings.numberOfClones; i++) {
                const clone = title.cloneNode(true);
                titleContainer.appendChild(clone);
            }
        };

        const animateMedia = () => {
            const tlPosition = 1;

            const media = {
                element: document.querySelector('.trigger_media'),
                figure: document.querySelectorAll('.trigger_media_figure'),
                image: document.querySelectorAll('.trigger_media_image'),
            };

            gsap.set(media.image, { yPercent: 101 });
            gsap.set(media.figure, { scale: 1.001 });

            tlMain.to(media.image, {
                yPercent: 0,
                stagger: 0.08,
            });

            const centerX = window.innerWidth / 2;

            media.figure.forEach((figure) => {
                const figureRect = figure.getBoundingClientRect(),
                    figureCenterX = figureRect.x + figureRect.width / 2;

                const distance = centerX - figureCenterX;

                tlMain.to(
                    figure,
                    {
                        x: distance,
                        duration: 1,
                        stagger: 0.08,
                    },
                    tlPosition
                );
            });

            tlMain
                .to(media.figure, {
                    scale: 5,
                })
                .to(overlay, {
                    autoAlpha: 1,
                }); //?-----> Part2
        };

        const animateText = () => {
            const tlPosition = 2;

            const title = {
                words: document.querySelectorAll('.trigger_text_title_word'),
                odd: '.trigger_text_title:nth-child(odd)',
                even: '.trigger_text_title:nth-child(even)',
            };

            gsap.set(title.words, { autoAlpha: 0 });
            gsap.set(title.words[0], { autoAlpha: 1 });
            gsap.set(title.even, { xPercent: -15 });

            tlMain
                .to(title.odd, { duration: 4, xPercent: -15, fontStyle: 'italic', fontWeight: '600' }, tlPosition)
                .to(title.even, { duration: 4, xPercent: 0, fontStyle: 'italic', fontWeight: '100' }, tlPosition)
                .to(
                    title.words,
                    {
                        duration: 0,
                        autoAlpha: 1,
                        stagger: {
                            each: 0.2,
                            grid: 'auto',
                            from: 'random',
                        },
                    },
                    tlPosition
                );
        };

        //?-----> Part2
        const animateSticky = () => {
            const tlPosition = 3;

            const sticky = {
                section: document.querySelector('.trigger_sticky'),
                cols: document.querySelectorAll('.trigger_sticky_col'),
            };

            gsap.set([sticky.cols[0], sticky.cols[1]], { yPercent: 100 });

            tlMain
                .to(
                    sticky.cols[0],
                    {
                        yPercent: 0,
                    },
                    tlPosition
                )
                .to(
                    sticky.cols[1],
                    {
                        duration: 3,
                        yPercent: -100,
                    },
                    tlPosition
                )
                .to(
                    overlay,
                    {
                        duration: 2,
                        scale: 2,
                    },
                    '>-=0.5'
                );
        };

        const init = () => {
            gsap.set(overlay, { autoAlpha: 0 }); //?-----> Part2
            // initLenis();

            animateMedia();
            animateText();
            animateSticky(); //?-----> Part2
        };
        cloneTitle();
        init();
    }, [lenis])

    return (
        <>
            {/* <section className="changed">
                <span className="fixed_item">Rest</span>
                <span className="fixed_item">&#128900;</span>
                <span className="fixed_item">Toker</span>
            </section> */}
            <section className="trigger relative h-[50vh] uppercase">
                <div className="trigger_wrapper">
                    <div className="trigger_text">
                        <div className="trigger_text_title">
                            <h1 className="trigger_text_title_word text-[18rem] leading-[0.8]">About-</h1>
                            <h1 className="trigger_text_title_word text-[18rem] leading-[0.8]">About-</h1>
                            <h1 className="trigger_text_title_word text-[18rem] leading-[0.8]">About-</h1>
                            <h1 className="trigger_text_title_word text-[18rem] leading-[0.8]">About-</h1>
                            <h1 className="trigger_text_title_word text-[18rem] leading-[0.8]">About-</h1>
                        </div>
                    </div>

                    <div className="trigger_media">
                        <figure className="trigger_media_figure">
                            <img className="trigger_media_image" src="https://cdn.cosmos.so/b27736ab-e86a-4f3a-946a-f0145ba6b259?format=jpeg" alt="" />
                        </figure>
                        <figure className="trigger_media_figure">
                            <img className="trigger_media_image" src="https://cdn.cosmos.so/1226e77b-8691-4b78-a0cc-b23a8f79b8a2?format=jpeg" alt="" />
                        </figure>
                        <figure className="trigger_media_figure">
                            <img className="trigger_media_image" src="https://cdn.cosmos.so/2075b2fb-6e9b-4335-914d-98cbca0f6af2?format=jpeg" alt="" />
                        </figure>
                        <figure className="trigger_media_figure">
                            <img className="trigger_media_image" src="https://cdn.cosmos.so/e42a37f0-a399-4eb1-864d-b74c1ca9a7aa?format=jpeg" alt="" />
                        </figure>
                        {/* <figure className='trigger_media_figure'>
                            <video autoPlay muted loop className="trigger_media_image object-contain" src="https://cdn.cosmos.so/4b919dd5-6faf-4a7c-8210-5608e17a3247.mp4"></video>
                        </figure> */}
                        {/* <figure className="trigger_media_figure">
                            <img className="trigger_media_image" src="https://cdn.cosmos.so/1226e77b-8691-4b78-a0cc-b23a8f79b8a2?format=jpeg" alt="" />
                        </figure> */}
                    </div>

                    {/* <!-------| Part2 |-------> */}
                    <div className="trigger_overlay"></div>

                    <div className="trigger_sticky">
                        <div className="trigger_sticky_wrapper">
                            <div className="trigger_sticky_col">
                                {/* <p className="trigger_sticky_col_title">About Us</p> */}
                                {/* <img className="trigger_sticky_col_image" src="https://cdn.cosmos.so/be512137-8e25-40f2-9a96-95b107770a4d?format=jpeg" alt="" /> */}
                                <img className="trigger_sticky_col_image" src="https://cdn.cosmos.so/338eef95-e8e8-4582-a988-013194246f3d?format=jpeg" alt="" />
                                {/* <video autoPlay muted loop className="trigger_sticky_col_image object-contain" src="https://cdn.cosmos.so/d005c886-9c32-4041-bd42-d936118b3ba7.mp4"></video> */}
                            </div>

                            <div className="trigger_sticky_col">
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Numquam, quis incidunt sapiente fugiat corrupti cupiditate,
                                    culpa molestias delectus rerum quidem voluptatum sequi ipsum
                                    nihil eius necessitatibus unde. Enim, possimus mollitia.
                                </h3>

                                <h3>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Numquam, quis incidunt sapiente fugiat corrupti cupiditate,
                                    culpa molestias delectus rerum quidem voluptatum sequi ipsum
                                    nihil eius necessitatibus unde. Enim, possimus mollitia.
                                </h3>

                                {/* <h3>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Numquam, quis incidunt sapiente fugiat corrupti cupiditate,
                                    culpa molestias delectus rerum quidem voluptatum sequi ipsum
                                    nihil eius necessitatibus unde. Enim, possimus mollitia.
                                </h3>  */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About