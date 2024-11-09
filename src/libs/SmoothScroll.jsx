import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis();
    AOS.init();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return children;
}