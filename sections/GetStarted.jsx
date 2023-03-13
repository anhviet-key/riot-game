'use client';

import { motion } from 'framer-motion';
import { StartSteps, TitleText, TypingText } from '../components';
import styles from '../styles';
import {
  staggerContainer,
  fadeIn,
  planetVariants,
  textVariant,
} from '../utils/motion';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <div className={`flex ${styles.flexCenter} m-auto relative flex-[1.5]`}>
        <motion.div
          variants={planetVariants('left')}
          // className={`flex ${styles.flexCenter} flex-[1.5]`}
          className="absolute"
        >
          <img
            src="/event.png"
            alt="event"
            className="w-[90%] h-auto object-contain"
          />
        </motion.div>
        <motion.div
          variants={textVariant(1.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="absolute top-24"
        >
          <img src="/shadow.png" alt="shadow" className="animation02 w-[70%]" />
        </motion.div>
      </div>

      <img src="/right.png" alt="shadow" className="w-20 hidden lg:block" />
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-1 flex justify-center flex-col"
      >
        <TypingText title="| Outstanding events" />
        <TitleText title={<>What's happening ?</>} />
        <div className="mt-[31px] flex flex-col m-w-[370px] gap-[10px]">
          {startingFeatures.map((future, index) => (
            <StartSteps
              key={index}
              imgUrl={future.imgUrl}
              text={future.title}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
