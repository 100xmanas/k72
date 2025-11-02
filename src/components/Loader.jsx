import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

function Loder({children}) {

  const loaderParentDiv = useRef(null)

  const path = useLocation().pathname;

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(loaderParentDiv.current, {
      display: "block",
    });

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: 0.3,
      },
    });

    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: 0.3,
      },
    });

    tl.to(loaderParentDiv.current, {
      display: "none",
    });

    tl.to(".stair", {
      y: "0%",
    });
  }, [path]);

  return (
    <div ref={loaderParentDiv} className="h-screen w-full fixed z-20 top-0">
      <div className="h-full w-full flex">
        <div className="stair h-full w-1/2 bg-black"></div>
        <div className="stair h-full w-1/2 bg-black"></div>
        <div className="stair h-full w-1/2 bg-black"></div>
        <div className="stair h-full w-1/2 bg-black"></div>
        <div className="stair h-full w-1/2 bg-black"></div>
        <div className="stair h-full w-1/2 bg-black"></div>
      </div>

      <div>
        {children}
      </div>
    </div>
  );
}

export default Loder;
