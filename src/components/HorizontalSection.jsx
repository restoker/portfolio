import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useRef } from "react";

gsap.registerPlugin(SplitText);

const HorizontalSection = () => {
    const logoRef = useRef(null);
    const headerDescription = useRef(null);
    const headersubDescription = useRef(null);
    const statusSubTitle = useRef(null);
    const statusTitle = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        SplitText.create([headerDescription.current, headersubDescription.current, statusSubTitle.current, statusTitle.current], {
            type: "words,lines",
            mask: "lines",
        });

        tl
            .from([headerDescription.current, headersubDescription.current, statusSubTitle.current, statusTitle.current], {
                duration: 0.7,
                delay: 2.5,
                yPercent: 100,
                opacity: 0,
                stagger: 0.1,
                ease: "expo.out",
            })
    }, [])



    return (
        <div className="mt-10">
            <header className="header">
                <div className="header_wrapper">
                    <div ref={logoRef} className="header_logo">
                        <h3>/R</h3>
                    </div>
                    <div className="header_role">
                        <span ref={headerDescription}>Developer from Perú</span>
                        <span ref={headersubDescription}>based in Cusco</span>
                    </div>
                    <div className="header_status">
                        <span ref={statusTitle}>Last Mod.</span>
                        <span ref={statusSubTitle}>May 2025</span>
                    </div>
                    {/* <ul className="header_pages">
                        <li className="header_pages_item">Index</li>
                        <li className="header_pages_item">Works</li>
                        <li className="header_pages_item">Gallery</li>
                        <li className="header_pages_item">Contact</li>
                    </ul> */}
                </div>
            </header>

            <main className="app">
                <div className="frame">
                    <section className="w-intro">
                        <div className="w-intro_wrapper">
                            <h1 className="text-[24rem]">All my🫠</h1>
                            <h1 className="text-[24rem]">Works</h1>
                        </div>
                    </section>

                    <section className="w-single">
                        <div className="w-single_tab">
                            <div className="w-single_tab_container">
                                <div className="w-single_tab_field">
                                    <h2>Editorial</h2>
                                </div>
                                <h3>01</h3>
                            </div>
                        </div>
                        <div className="w-single_gallery">
                            <img
                                src="https://images.beta.cosmos.so/4cd9ace0-193a-4ce8-8100-531713ced975?format=webp&w=400"
                            />
                            <img
                                src="https://image.mux.com/kD0191i00pUsxhx8LmMK4eoPxA2Y02kYY6DmMWtgq3hPSI/thumbnail.png"
                            />
                            <img
                                src="https://image.mux.com/fWGYbE6LIr4ICIRx97aTenK4aQBOlik02UWwwNCjRtsA/thumbnail.png"
                            />
                            <img
                                src="https://images.beta.cosmos.so/e0f9f7e3-9e3d-41df-a6f2-f155dc85c09f?format=webp"
                            />
                        </div>
                    </section>

                    <section className="w-single">
                        <div className="w-single_tab">
                            <div className="w-single_tab_container">
                                <div className="w-single_tab_field">
                                    <h2>UX/UI</h2>
                                </div>
                                <h3>02</h3>
                            </div>
                        </div>
                        <div className="w-single_gallery">
                            <img
                                src="https://image.mux.com/b7EecOFRXt7aIbzMbCEBFmdezPLbsfeJqwvoETAkj00o/thumbnail.png"
                            />
                            <img
                                src="https://image.mux.com/nr7EnaIAXw01AewsHmmZteXLr3K900v002NSMrTn6lAAP00/thumbnail.png"
                            />
                            <img
                                src="https://image.mux.com/sfR6d6NwI9RAj4hgVKWU01Ee90201kpSPCF41x24T52Suw/thumbnail.png"
                            />
                            <img
                                src="https://images.beta.cosmos.so/dbe7b1c2-ed70-4af1-97db-beb01faf22cc?format=webp"
                            />
                        </div>
                    </section>

                    <section className="w-single">
                        <div className="w-single_tab">
                            <div className="w-single_tab_container">
                                <div className="w-single_tab_field">
                                    <h2>Commercial</h2>
                                </div>
                                <h3>03</h3>
                            </div>
                        </div>
                        <div className="w-single_gallery">
                            <img
                                src="https://image.mux.com/bUaE21XAyGg01ukbrs6gjfbLLKdiWkJiOKl4k6BijKt00/thumbnail.png"
                            />
                            <img
                                src="https://image.mux.com/iUNO01UbTljTejVeCTpbQCbIYCMkXj85I2LJuRtIx00wg/thumbnail.png"
                            />
                            <img
                                src="https://images.beta.cosmos.so/fac6b277-7c72-477b-ba2b-acd451b69e02?format=webp&w=400"
                            />
                            <img
                                src="https://images.beta.cosmos.so/4576b37a-a95f-42b6-a3fb-13121feda12e?format=webp&w=400"
                            />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default HorizontalSection