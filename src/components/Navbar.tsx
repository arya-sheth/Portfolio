import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const handleScroll = (target: string) => {
    if (smoother && typeof smoother.scrollTo === "function") {
      smoother.scrollTo(target, true, "top top");
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    // ScrollSmoother is a premium plugin. If it's missing, standard scrolling will be used.
    if ((gsap as any).plugins && (gsap as any).plugins.ScrollSmoother) {
      smoother = (gsap as any).plugins.ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.7,
        speed: 1.7,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
      });

      if (smoother) {
        smoother.scrollTop(0);
      }
    }


    window.addEventListener("resize", () => {
      if (smoother && typeof (smoother as any).refresh === "function") {
        (smoother as any).refresh(true);
      }
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          AS
        </a>
        <a
          href="mailto:aryafasheth@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          aryafasheth@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
