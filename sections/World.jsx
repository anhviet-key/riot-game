'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import styles from '../styles';
import { fadeIn } from '../utils/motion';
import { newFeatures as newFeaturesConstants } from '../constants';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={newFeaturesConstants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={<>We are present all over the world</>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        {/* <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/location-icon.png" alt="map" className="w-full h-full" />
        </div> */}
      </motion.div>
    </motion.div>
  </section>
);

export default World;
