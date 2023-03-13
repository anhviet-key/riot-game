// import Link from 'next/link';
// import styles from '../styles';

const NewFeatures = ({ imgUrl, title, imgUrlpre }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    {/* <div className={`${styles.flexCenter} w-[70px] h-[70px] bg-[#323F5D]`}>
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div> */}
    <h1 className="font-bold text-[24px] leading-[30.24px] text-white py-8 inline">
      <img
        src={imgUrl}
        alt="icon"
        className="h-[30px] object-fill w-24 float-left mr-2"
      />
      <span>{title}</span>
    </h1>
    <div className="flex-1 ml-0 hvBorder imgBorder w-full h-[400px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] overflow-hidden">
      {/* <Link href="#"> */}
      <img
        src={imgUrlpre}
        title={title}
        className="w-full h-full object-fill hvImg"
      />
      {/* </Link> */}
    </div>
  </div>
);

export default NewFeatures;
