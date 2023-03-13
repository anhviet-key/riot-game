/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import styles from '../styles';

const StartSteps = ({ imgUrl, text }) => (
  <Link href="#more">
    <div className={`${styles.flexCenter} flex-row hvBorder`}>
      <div
        className={`${styles.flexCenter} w-[90px] h-[70px] rounded-[24px] bg-[#323F5D] overflow-hidden border-custom`}
      >
        <p className="font-bold text-[20px] text-white w-full h-full rounded-[20px] overflow-hidden">
          <img src={imgUrl} alt="text" className="w-full h-full object-cover" />
        </p>
      </div>
      <div className="flex-1 ml-[30px] font-normal leading-[32.4px]">
        <p className="text-[18px] text-[#B0B0B0]">{text}</p>
        <span className="text-white opacity-[0.3]">Read more</span>
      </div>
    </div>
  </Link>
);

export default StartSteps;
