import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import ProjectCard from "../components/projects/ProjectCard";

import p1 from "../assets/imgs/p11.jpg";
import p2 from "../assets/imgs/p10.jpg";
import p3 from "../assets/imgs/p8.jpg";
import p4 from "../assets/imgs/p7.jpg";
import p5 from "../assets/imgs/p6.jpg";
import p6 from "../assets/imgs/p5.jpg";
import p7 from "../assets/imgs/p4.jpg";
import p8 from "../assets/imgs/p3.jpg";
import p9 from "../assets/imgs/p2.jpg";

function Projects() {
  const imgs = [
    {
      img1: p1,
      img2: p2,
    },
    {
      img1: p3,
      img2: p4,
    },
    {
      img1: p4,
      img2: p5,
    },
    {
      img1: p6,
      img2: p7,
    },
    {
      img1: p8,
      img2: p9,
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.9,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <div>
      <div className="mt-[35vh] px-2">
        <h2 className="uppercase font-[font2] text-9xl pt-4">Projects</h2>
      </div>
      
      <div className="lol">
        {imgs.map((img, idx) => (
          <div key={idx} className="hero h-[50vh] w-full flex gap-5 px-2 mb-5">
            <ProjectCard img1={img.img1} img2={img.img2} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
