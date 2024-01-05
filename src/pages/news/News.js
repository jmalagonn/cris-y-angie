import styles from "./News.module.css";
import Image from "next/image";
import collageImg from "@/assets/images/collage.png";

export const News = () => {
  return (
    <section id="news" className={`${styles.news} section`}>
      <h1 className={`${styles.title} special-font`}>¡NOS CASAMOS!</h1>
      <Image src={collageImg} alt="collage" className={styles.collage}/>
    </section>
  );
};

export default News;
