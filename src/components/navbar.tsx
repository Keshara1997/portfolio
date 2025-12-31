import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { logo, menu, close, resume } from "../assets";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

type NavbarProps = {
  hide: boolean;
};

// Navbar
export const Navbar = ({ hide }: NavbarProps) => {
  // state variables
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active link based on scroll position
  useEffect(() => {
    const handleScrollActive = () => {
      const sections = NAV_LINKS.filter((link) => !link.link && !(link as any).download);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(section.title);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollActive);
    handleScrollActive(); // Check on mount

    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "KAVINDA-KESHARA.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-primary/80 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10"
          : "bg-transparent",
        hide && "opacity-0 pointer-events-none"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-xl font-bold cursor-pointer flex items-center transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500">
            Keshara1997
          </p>
        </Link>

        {/* Nav Links (Desktop) */}
        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="relative group">
              <a
                href={link.link ? link.link : (link as any).download ? "#" : `#${link.id}`}
                target={link.link ? "_blank" : undefined}
                rel={link.link ? "noreferrer noopener" : undefined}
                className={cn(
                  "relative text-[16px] font-medium cursor-pointer transition-all duration-300",
                  active === link.title
                    ? "text-white"
                    : "text-secondary hover:text-white",
                  "before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-cyan-400 before:to-purple-500 before:transition-all before:duration-300",
                  active === link.title && "before:w-full",
                  "hover:before:w-full"
                )}
                onClick={(e) => {
                  if ((link as any).download) {
                    e.preventDefault();
                    handleDownloadResume();
                  } else if (!link.link) {
                    setActive(link.title);
                  }
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="relative w-8 h-8 flex items-center justify-center z-50"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "absolute w-6 h-0.5 bg-white transition-all duration-300",
                toggle ? "rotate-45 translate-y-0" : "-translate-y-2"
              )}
            />
            <span
              className={cn(
                "absolute w-6 h-0.5 bg-white transition-all duration-300",
                toggle ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute w-6 h-0.5 bg-white transition-all duration-300",
                toggle ? "-rotate-45 translate-y-0" : "translate-y-2"
              )}
            />
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={cn(
              "fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300",
              toggle ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
            onClick={() => setToggle(false)}
          />

          {/* Mobile Menu */}
          <div
            className={cn(
              "fixed top-0 right-0 h-full w-[280px] bg-gradient-to-b from-primary via-primary to-black-200 z-40 shadow-2xl transition-transform duration-300 ease-in-out",
              toggle ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              {/* Nav Links (Mobile) */}
              <ul className="list-none flex flex-col gap-6">
                {NAV_LINKS.map((link, index) => (
                  <li
                    key={link.id}
                    className={cn(
                      toggle ? "opacity-100 animate-fade-in" : "opacity-0"
                    )}
                    style={{ animationDelay: toggle ? `${index * 0.1}s` : "0s" }}
                  >
                    <a
                      href={link.link ? link.link : (link as any).download ? "#" : `#${link.id}`}
                      target={link.link ? "_blank" : undefined}
                      rel={link.link ? "noreferrer noopener" : undefined}
                      className={cn(
                        "relative text-lg font-medium cursor-pointer transition-all duration-300 block py-2",
                        active === link.title
                          ? "text-white"
                          : "text-secondary hover:text-white",
                        "before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-cyan-400 before:to-purple-500 before:transition-all before:duration-300 before:opacity-0",
                        active === link.title && "before:opacity-100",
                        "hover:before:opacity-100 pl-4"
                      )}
                      onClick={(e) => {
                        if ((link as any).download) {
                          e.preventDefault();
                          handleDownloadResume();
                        } else if (!link.link) {
                          setActive(link.title);
                        }
                        setToggle(false);
                      }}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
