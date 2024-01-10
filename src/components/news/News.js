import styles from "./News.module.css";
import Image from "next/image";
import collageImg from "@/assets/images/collage.png";

export const News = () => {
  return (
    <section id="news" className={`${styles.news} section`}>
      <h1 className={`${styles.title} special-font`}>¡NOS CASAMOS!</h1>
      <p className={styles.p}>Queremos compartir con ustedes la alegría de unir nuestras vidas ante Dios.<br />Invitandolos a<br /><span>Nuestra boda</span></p>
      <Image src={collageImg} alt="collage" className={styles.collage}/>
    </section>
  );
};

export default News;
