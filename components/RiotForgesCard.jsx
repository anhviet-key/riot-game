'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { fadeIn } from '../utils/motion';

const RiotForgesCard = ({ name, url, imgDes }) => (
  <Link href="#more">
    <motion.div
      variants={fadeIn('up', 'spring', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="cursor-pointer flex-1 shadow-lg shadow-indigo-500/40 rounded-md hvBorder"
    >
      <div className="max-w-[400px] h-[250px] relative">
        <img
          src={url}
          alt={name}
          className="object-cover w-full h-full rounded-md"
        />
        <img src={imgDes} alt={name} className="absolute top-10 left-8 w-20" />
      </div>
    </motion.div>
  </Link>
);

export default RiotForgesCard;
