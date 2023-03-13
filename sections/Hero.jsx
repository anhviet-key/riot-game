'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
// import Video from '../public/who-we-are-video.mov';

const Hero = () => (
  <section className={`${styles.yPaddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} px-6 mx-auto flex flex-col hvB`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading} font-pressStart`}
        >
          game
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          {/* <h1 className={styles.heroHeading}>Le</h1>
          <h1 className={styles.heroHeading}>G</h1> */}
          <h1 className={`${styles.heroHeading} font-pressStart`}>universe</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        {/* <img
          src="/cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        /> */}
        <div>
          <video
            src="/who-we-are-video.mov"
            controls={false}
            autoPlay
            muted
            loop
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
        </div>
        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
          <img
            src="/png.png"
            alt="riot1"
            className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
