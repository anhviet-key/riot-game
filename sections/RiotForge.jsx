'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { newFeatures as newFeaturesConstants, riotForges } from '../constants';
import RiotForgesCard from '../components/RiotForgesCard';

const RiotForge = () => {
  const [list, setList] = useState(riotForges);
  const [startIndex, setStartIndex] = useState(0);
  const [currentList, setCurrentList] = useState(
    list.slice(startIndex, startIndex + 3)
  );
  const ref01 = useRef();
  const ref02 = useRef();

  useEffect(() => {
    ref02.current.classList.add('active');
  }, []);
  const handleNext = () => {
    if (startIndex + 3 < list.length) {
      setStartIndex(startIndex + 3);
      setCurrentList(list.slice(startIndex + 3, startIndex + 6));
      ref01.current.classList.add('active');
      ref02.current.classList.remove('active');
    }
  };

  const handlePrev = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3);
      setCurrentList(list.slice(startIndex - 3, startIndex));
      ref01.current.classList.remove('active');
      ref02.current.classList.add('active');
    }
  };
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={newFeaturesConstants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Riot forge" textStyles="text-center" />
        <div className="mt-[50px] flex justify-end text-gray-500 gap-5">
          <div className="leftArrow" onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
              ref={ref01}
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </div>
          <div className="rightArrow" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
              ref={ref02}
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
        <div className="mt-[10px] flex flex-row flex-wrap lg:flex-nowrap gap-[30px]">
          {currentList.map((forge) => (
            <RiotForgesCard key={forge.name} {...forge} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default RiotForge;
