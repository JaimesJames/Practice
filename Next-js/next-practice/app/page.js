import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "home | JaimesJames",
};

export default function Home() {

 
  return (
    
    <>
      <div className='content-space'>
        <h1 className={styles.title}>first page</h1>
        <Image src='/IMG_0498.png' width={700} height={500} alt='logo' style={{marginTop:'1.5rem'}}/>
        <p>Welcome to JaimesJames space!</p>
        <Link href='/product' className={styles.btn}>Next!</Link>
      </div>
    </>
  );
}
