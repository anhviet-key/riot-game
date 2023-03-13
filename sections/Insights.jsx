'use client';

import { motion } from 'framer-motion';
import { InsightCard, TitleText, TypingText } from '../components';
import styles from '../styles';
import { insights, newFeatures as newFeaturesConstants } from '../constants';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={newFeaturesConstants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Latest news" textStyles="text-center" />
      <TitleText
        title={<>Insights about the activities </>}
        textStyles="text-center"
      />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
