import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Cloud() {
  const ctn = useRef(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const awan = self.selector(".cloud");

      for (const Cloud of awan) {
        const direction = Math.random() > 0.5 ? 1 : -1;
        gsap
          .fromTo(
            Cloud,
            {
              x: direction === 1 ? -500 : window.innerWidth + 500,
              opacity: Math.floor(Math.random() * (90 - 70 + 1) + 70) / 100,
              scaleX: direction === 1 ? 1 : -1,
            },
            {
              x: direction === 1 ? window.innerWidth + 500 : -500,
              duration: Math.floor(Math.random() * (30 - 20 + 1) + 20),
              repeat: -1,
              ease: "none",
              delay: Math.floor(Math.random() * (3 - 0 + 1) + 0),
              immediateRender: true,
            }
          )
          .play();
      }
    }, ctn);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ctn} className="relative w-screen z-10">
      <img
        className="cloud absolute md:top-0 -top-32"
        src="/awan-1.png"
        alt="Cloud"
        width={150}
        height={100}
      />
      <img
        className="cloud absolute w-96 h-52 -top-10 md:top-24"
        src="/awan-2.png"
        alt="Cloud"
        width={100}
        height={50}
      />
      <img
        className="cloud absolute top-10"
        src="/awan-1.png"
        alt="Cloud"
        width={100}
        height={100}
      />
    </div>
  );
}
