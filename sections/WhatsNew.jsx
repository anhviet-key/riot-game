'use client';

import { motion } from 'framer-motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import styles from '../styles';
import { fadeIn, planetVariants, textVariant } from '../utils/motion';
import { newFeatures, newFeatures as newFeaturesConstants } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={newFeaturesConstants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={textVariant(1.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex ${styles.flexCenter}`}
      >
        {/* <img src="/shadow.png" alt="shadow" className="animation02 w-[70%]" /> */}
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-1 flex justify-center flex-col"
      >
        <TypingText title="| Exclusive content" />
        <TitleText title={<>Watch movies and explore Arcane</>} />
        <div className="mt-[48px] flex flex-row flex-wrap justify-between gap-[24px]">
          {newFeatures.map((future, index) => (
            <NewFeatures key={index} {...future} />
          ))}
        </div>
      </motion.div>
      <div className={`flex ${styles.flexCenter} m-auto relative flex-[1.5]`}>
        <motion.div variants={planetVariants('right')} className="absolute">
          <img
            src="/whats-new.png"
            alt="event"
            className="w-[90%] h-[90%] object-contain"
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
    </motion.div>
  </section>
);

export default WhatsNew;
