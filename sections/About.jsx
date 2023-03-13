'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Social Impact" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        {/* <span className="font-extrabold text-white">Lorem</span> ipsum dolor sit
        amet consectetur adipisicing elit.
        <span className="font-extrabold text-white">Quos</span> officia, dolores
        dolore deleniti necessitatibus saepe debitis
        <span className="font-extrabold text-white"> ex </span> repellat esse
        ea,
        <span className="font-extrabold text-white">
          nesciunt blanditiis provident ullam molestiae.
        </span>
        Voluptatem ea et cumque ab. */}
        <span>
          We believe that anyone with
          <span className="font-extrabold text-white"> passion </span>,
          <span className="font-extrabold text-white"> vision </span>, and
          <span className="font-extrabold text-white"> perseverance </span> can
          make a positive impact. As part of that ethos, we also believe that
          there are ways where we, as a company, can provide long-term value and
          positive impact to the players, partners, Rioters, and communities we
          serve.
          <br /> Through corporate social responsibility, we hope to apply our
          unique resources and strengths to create a positive and lasting impact
          for
          <span className="font-extrabold text-white">
            {' '}
            all of our stakeholders{' '}
          </span>
          ,<span className="font-extrabold text-white"> players </span>,
          <span className="font-extrabold text-white"> Rioters </span>,
          <span className="font-extrabold text-white"> our communities </span>,
          <span className="font-extrabold text-white"> and our planet </span>.
        </span>
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-content mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
