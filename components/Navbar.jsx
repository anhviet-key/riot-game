'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { newUpgrades } from '../constants';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'initial';
  }, [active]);

  return (
    <div>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          <img
            src="/search.svg"
            alt="search"
            className="w-[24px] h-[24px] object-contain hover:cursor-pointer"
          />
          <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
            <span className="text-red-500">RIOT</span> GAMES
          </h2>
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain hover:cursor-pointer"
            onClick={() => setActive(true)}
          />
        </div>
      </motion.nav>
      <div
        className={`${
          active ? 'menu-nav02' : 'menu-nav01'
        } hidden lg:flex absolute top-0 left-0 flex-row w-full h-[35vh] bg-white z-[9999] py-[24px] px-[78px]`}
      >
        <div className="flex-[0.7]">
          <div className="w-10 h-10 flex items-center gap-1">
            <img src="/icon.png" alt="logo" className="w-full h-full" />{' '}
            <span className="text-red-500">RIOT</span> GAMES
          </div>
          <h3 className="text-[48px] flex-wrap">
            Information about the latest updates
          </h3>
        </div>
        <div className="flex-1 relative cursor-pointer">
          <Link href="#more">
            <div className="absolute flex gap-2 w-full h-full rounded-md">
              {newUpgrades.map((upgrade) => (
                <div className="flex-1 border-2 p-3 rounded-md border-transparent transition duration-75 ease-linear hover:border-gray-300 text-sm">
                  <img
                    src={upgrade.imgUrl}
                    alt={upgrade.title}
                    className="w-full h-[85%] object-fill rounded-md border-2 border-gray-500"
                  />
                  <span className="esclipse text-gray-500">
                    {upgrade.title}
                  </span>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </div>
      {active ? (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-500 opacity-40 z-[999]"
          onClick={() => setActive(false)}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Navbar;
