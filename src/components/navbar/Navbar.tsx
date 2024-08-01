"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Reveal from "../utils/Reveal";
import logo from "@/public/logo/argt-logo.png";
import { IoMdMail as MailIcon } from "react-icons/io";

import SimpleReveal from "../utils/SimpleReveal";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const isPhoneMenuVisible = false;

  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight / 2) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <>
            <NavbarScroll isScrolling={isScrolling} />
            <FixedNavbar />
          </>
        ) : (
          <FixedNavbar pathname={pathname} />
        )}
      </AnimatePresence>
    </>
  );
}

function FixedNavbar({ pathname }: any) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      x: "0%",
      transition: {
        delay: 0.15,
        duration: 0.5,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      x: "100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const navbarOptions = [
    { title: "Home", url: "/" },
    { title: "About", url: "/#aboutus" },
    { title: "Services", url: "/#services" },
  ];

  return (
    <motion.nav
      initial="closed"
      animate={mobileNavOpen ? "opened" : "closed"}
      className={`${
        pathname === "/"
          ? " text-white fixed transparent  xl:absolute top-0  z-30 flex justify-between w-full px-8 xl:px-28 py-4     "
          : "text-black fixed transparent  xl:absolute top-0 z-30  flex justify-between w-full px-8 xl:px-28 py-4 "
      }`}
    >
      {mobileNavOpen ? (
        <AnimatePresence>
          <motion.div
            variants={mobileMenuVariant}
            className="fixed top-0 left-0 h-screen  w-full flex flex-col items-center  bg-black/80 backdrop-blur-[8px] "
          >
            <div className=" flex justify-between items-center p-4 w-full">
              <Link className="flex justify-center items-center " href="/">
                <div className="w-[100px] lg:w-[80px] ">
                  <Image
                    src={logo}
                    className="w-full"
                    objectFit="cover"
                    alt="Logo"
                  />
                </div>
              </Link>

              <motion.button
                className=" flex justify-center items-center"
                variants={fadeInVariant}
                onClick={() => setMobileNavOpen(false)}
              >
                <svg
                  className="fill-white  h-8 w-8 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </motion.button>
            </div>
            <motion.ul className="w-full px-4" variants={ulVariant}>
              {navbarOptions.map((element, i) => {
                return (
                  <Reveal sequence={i + 1} key={element.url}>
                    <motion.button
                      variants={liVariant}
                      whileTap={{ scale: 0.85 }}
                      onClick={() => setMobileNavOpen(false)}
                      className="navbarItem p-3"
                    >
                      <Link
                        className="text-white font-extrabold text-5xl "
                        href={element.url}
                      >
                        {element.title}
                      </Link>
                    </motion.button>
                  </Reveal>
                );
              })}
            </motion.ul>
            <motion.div
              variants={fadeInVariant}
              className="flex justify-center items-center "
            >
              <div
                className=" xl:block "
                onClick={() => setMobileNavOpen(false)}
              >
                <SimpleReveal sequence={5}>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={() => setMobileNavOpen(false)}
                    className="p-24"
                  >
                    <Link
                      href="/contactus"
                      onClick={() => setMobileNavOpen(false)}
                      className=" bg-blue-600 hover:bg-blue-400 transition p-4  text-white font-base hover:ease-linear rounded-lg"
                    >
                      Contact Us
                    </Link>
                  </motion.button>
                </SimpleReveal>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="flex w-full items-center   justify-center ">
          <div className="w-full xl:max-w-[1200px] flex justify-between items-center">
            <div className="flex justify-center items-center gap-24">
              <div className="flex items-center gap-2  text-white w-full">
                <div className="overflow-y-hidden ">
                  <SimpleReveal sequence={1}>
                    <motion.div
                      className="text-black text-2xl font-bold gap-4 flex items-center w-full"
                      variants={hideNavItemsVariant}
                    >
                      {/* argt logo */}

                      <Link
                        className="flex justify-center items-center "
                        href="/"
                      >
                        <div className="w-[100px] lg:w-[80px] ">
                          <Image
                            src={logo}
                            className="w-full"
                            objectFit="cover"
                            alt="Logo"
                          />
                        </div>
                      </Link>
                    </motion.div>
                  </SimpleReveal>
                </div>
              </div>
              <div className="hidden xl:flex gap-4 w-full justify-center">
                {navbarOptions.map((element, i) => {
                  return (
                    <Reveal sequence={i + 1} key={element.url}>
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        className="navbarItem"
                      >
                        <Link className="text-xl" href={`#${element.url}`}>
                          {element.title}
                        </Link>
                      </motion.button>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <div className="hidden xl:flex justify-end w-full">
              <SimpleReveal sequence={5}>
                <motion.button whileTap={{ scale: 0.85 }} className="p-2">
                  <Link
                    href="/#contactus"
                    className="w-full  font-medium text-base   
                   shadow-slate-100 cursor-pointer flex justify-evenly items-center gap-4 group "
                  >
                    <div className="message-icon p-2 bg-bright-red group-hover:rounded-full transition-all group-hover:ease-linear  duration-500">
                      <MailIcon className="bg-bright-red h-[30px] w-[30px]  fill-white" />
                    </div>
                    <span className="group-hover:text-bright-red transition-all group-hover:ease-in-out duration-300 text-white">
                      REQUEST A QUOTE
                    </span>
                  </Link>
                </motion.button>
              </SimpleReveal>
            </div>
          </div>
        </div>
      )}

      <div className="xl:hidden">
        <motion.div
          variants={hideNavItemsVariant}
          onClick={() => setMobileNavOpen(true)}
        >
          {/* set Mobile menu open icon */}
          <svg
            className="fill-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            id="Bold"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M1.5,6h21a1.5,1.5,0,0,0,0-3H1.5a1.5,1.5,0,0,0,0,3Z" />
            <path d="M22.5,8H1.5a1.5,1.5,0,0,0,0,3h21a1.5,1.5,0,0,0,0-3Z" />
            <path d="M22.5,18H1.5a1.5,1.5,0,0,0,0,3h21a1.5,1.5,0,0,0,0-3Z" />
            <path d="M22.5,13H1.5a1.5,1.5,0,0,0,0,3h21a1.5,1.5,0,0,0,0-3Z" />
          </svg>
        </motion.div>
      </div>
    </motion.nav>
  );
}

// scroll navbar

function NavbarScroll({ isScrolling }: any) {
  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      x: "0%",
      transition: {
        delay: 0.15,
        duration: 0.5,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      x: "100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const navbarOptions = [
    { title: "Home", url: "/" },
    { title: "About", url: "/#aboutus" },
    { title: "Services", url: "/#services" },
  ];
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="hidden fixed z-50 xl:flex w-full right-2 xl:right-auto  justify-between  py-2 ts-bg xl:left-1/2 top-0  bg-dark-blue text-white px-28 "
    >
      <div className="flex w-full items-center   justify-center ">
        <div className="w-full xl:max-w-[1200px] flex justify-between items-center">
          <div className="flex gap-24 text-xl justify-center items-center">
            <div className="flex items-center gap-2  text-white w-full">
              <div className="overflow-y-hidden ">
                <SimpleReveal sequence={1}>
                  <motion.div
                    className="text-black text-2xl font-bold gap-4 flex items-center w-full"
                    variants={hideNavItemsVariant}
                  >
                    {/* argt logo */}

                    <Link
                      className="flex justify-center items-center "
                      href="/"
                    >
                      <div className="w-[100px] lg:w-[80px] ">
                        <Image
                          src={logo}
                          className="w-full"
                          objectFit="cover"
                          alt="Logo"
                        />
                      </div>
                    </Link>
                  </motion.div>
                </SimpleReveal>
              </div>
            </div>
            <div className="hidden xl:flex gap-4 w-full justify-center">
              {navbarOptions.map((element, i) => {
                return (
                  <Reveal sequence={i + 1} key={element.url}>
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      className="navbarItem"
                    >
                      <Link href={`#${element.url}`}>{element.title}</Link>
                    </motion.button>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="hidden xl:flex justify-end w-full">
            <SimpleReveal sequence={5}>
              <motion.button whileTap={{ scale: 0.85 }} className="p-2">
                <Link
                  href="/#contactus"
                  className="w-full  font-medium text-base   
                   shadow-slate-100 cursor-pointer flex justify-evenly items-center gap-4 group "
                >
                  <div className="message-icon p-2 bg-bright-red group-hover:rounded-full transition-all group-hover:ease-in-out  duration-500">
                    <MailIcon className="bg-bright-red h-[30px] w-[30px]  fill-white" />
                  </div>
                  <span className="group-hover:text-bright-red transition-all group-hover:ease-in-out duration-300 text-white">
                    REQUEST A QUOTE
                  </span>
                </Link>
              </motion.button>
            </SimpleReveal>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 400,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};
