'use client';
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HorizontalSection from "@/components/HorizontalSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const mm = gsap.matchMedia();

  useGSAP(() => {
    let scroller = document.querySelector('.scroll');
    let sections = gsap.utils.toArray('.frame section');
    let tabs = gsap.utils.toArray('.w-single_tab');
    let secciones = gsap.utils.toArray('.w-single');

    mm.add("(min-width: 769px)", () => {
      let maxWidth = 0;
      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
      });

      let scrollTween = gsap.to(sections, {
        x: () => `-${maxWidth - window.innerWidth}`,
        ease: "none",
        scrollTrigger: {
          trigger: '.app',
          pin: true,
          scrub: 1,
          end: "+=" + scroller.offsetWidth,
          // end: () => `+=${maxWidth}`
        }
      })

      tabs.forEach((item, index) => {
        let fakePin = gsap.to(item, {
          x: () => secciones[index].offsetWidth,
          ease: "none",
          scrollTrigger: {
            id: `fake${index}`,
            containerAnimation: scrollTween,
            trigger: item,
            scrub: true,
            start: "left left",
            // end: () => `left ${secciones[index].offsetWidth}`,
            // end: () => `${secciones[0].offsetWidth} left`,
            // end: () => "+=" + secciones[index].offsetWidth,
            // end: () => `${secciones[index + 1].offsetWidth} left`,
            end: () => `${secciones[index].offsetWidth} left`,
            // markers: true
          }
        });
      });
    });

  }, [])

  return (
    <>
      <section className="bg-gray-100 h-svh flex justify-center items-center">
        <Hero />
      </section>
      <section className="bg-gray-100 h-svh flex justify-center items-center">
        <h1 className="text-[24rem]">AFU 😆</h1>
      </section>
      <div className="outer">
        <div className="scroll">
          <HorizontalSection />
        </div>
      </div >
      {/* <section className="bg-zinc-100 h-svh flex justify-center items-center">
        <h1>Chau 🤟</h1>
      </section> */}
      <About />

      <section className="bg-zinc-100 h-svh flex justify-center items-center">
        {/* <h1 className="text-[24rem]">Chau 🤟</h1> */}
        <Contact />

      </section>
    </>
  );
}
