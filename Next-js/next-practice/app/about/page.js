import styles from "@/app/about/about.module.css";
import Image from "next/image";
// import Link from "next/link";
import "../globals.css";

export const metadata = {
    title: "about us",
  };

const About = () => {
  return (
    <>
      <div className='content-space about'>
        <h1 className={styles.title}>About us</h1>
        <Image src="/IMG_0498.png" width={700} height={500} alt="logo"  style={{ marginTop: "1.5rem" }} />
      </div>
    </>
  );
};
export default About;
