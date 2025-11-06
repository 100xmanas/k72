import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import mem1 from "../assets/imgs/mem 1.jpg";
import mem2 from "../assets/imgs/mem 2.jpg";
import mem3 from "../assets/imgs/mem 3.jpg";
import mem4 from "../assets/imgs/mem 4.jpg";
import mem5 from "../assets/imgs/mem 5.jpg";
import mem6 from "../assets/imgs/mem 6.jpg";
import mem7 from "../assets/imgs/mem 7.jpg";

function Agency() {
  const imgs = [mem1, mem2, mem3, mem4, mem5, mem6, mem7];

  const imageDivRef = useRef(null);
  const imgRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 22%",
        end: "top -92%",
        scrub: true,
        pin: true,

        onUpdate: (elem) => {
          // console.log(elem.progress);
          // console.log(Math.floor(elem.progress * imgs.length));

          let imgIndex;
          if (elem.progress < 1) {
            imgIndex = Math.floor(elem.progress * imgs.length);
          } else {
            imgIndex = imgs.length - 1;
          }

          imgRef.current.src = imgs[imgIndex];
        },
      },
    });
  });

  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="absolute h-[20vw] w-[14vw] left-96 top-50 overflow-hidden rounded-4xl"
        >
          <img
            ref={imgRef}
            className="h-full w-full object-cover"
            src={mem1}
            alt="Img"
          />
        </div>
        <div className="relative font-[font2] py-[50vh]">
          <div className="">
            <h1 className="text-[16.5vw] uppercase text-center leading-[18vw]">
              100xmanas <br /> Douze
            </h1>
          </div>
          <div className="pl-[40%] pb-16">
            <p className="text-[4vw] leading-[4vw] text-left">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Every day in a
              developer’s life begins with curiosity and ends with creation.
              Coffee beside the keyboard, they dive into lines of code—sometimes
              battling bugs, sometimes celebrating breakthroughs.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Agency;
