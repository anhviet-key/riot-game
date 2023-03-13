'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({
  id,
  imgUrl,
  imgDes,
  title,
  index,
  link,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id
        ? 'lg:flex-[3.5] flex:10'
        : 'lg:flex-[0.5] flex-[2] min-h-[150px]'
    } flex items-center justify-center min-w-[170px] h-[400px] lg:h-[520px] transition-[flex] duration-[1s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    {active !== id ? (
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full rounded-[24px] object-cover"
      />
    ) : (
      <Link
        href={link}
        target="_blank"
        className="absolute w-full h-full rounded-[24px]"
      >
        <img
          src={imgUrl}
          alt={title}
          className="absolute w-full h-full rounded-[24px] object-cover"
        />
      </Link>
    )}

    {active !== id ? (
      <h3 className="styleText font-semibold sm:text-[26px] ease-in-out text-[18px] text-white absolute left-10 lg:left-0 w-[230px] z-0 lg:bottom-20 lg:w-[150px] lg:rotate-[-90deg] lg:origin-[0,0] tracking-wide capitalize">
        {title}
      </h3>
    ) : (
      <>
        <div className="absolute w-[250px] h-[200px] top-5 left-5">
          <img src={imgDes} alt={title} className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] hover:cursor-default">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <img src="./headset.svg" alt="headset" className="w-1/2 h-1/2" />
          </div>
          <p className="animation01 font-normal text-[16px] w-[max-content] leading-[20px] text-white uppercase transition duration-75 ease-in hover:text-orange-400">
            <Link href={link} target="_blank">
              Enter the Game
            </Link>
          </p>
          <h2 className="mt-[24px] font-semibold w-max text-[18px] xl:text-[32px] text-white capitalize">
            {title}
          </h2>
        </div>
      </>
    )}
  </motion.div>
);

export default ExploreCard;
