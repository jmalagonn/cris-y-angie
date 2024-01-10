import Image from "next/image";
import suitIcon from "@/assets/images/traje.svg";
import giftIcon from "@/assets/images/regalo.svg";
import styles from "./MoreInfo.module.css";

export const MoreInfo = () => {
  return (
    <section className={`${styles.spaceAround} section`}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div>
            <h1 className={`${styles.sectionTitle} title special-font blue`}>Dress Code</h1>
            <Image src={suitIcon} alt="traje" className="icon" />
            <div className={styles.textInfo}>
              <p className={styles.p}><b>Hombres:</b> traje formal y tenis blancos.</p>
              <p className={styles.p}><b>Mujeres:</b> vestido de un solo tono<br /> (Reservamos color blanco y negro).</p>
            </div>
          </div>
          <div>
            <h1 className={`${styles.sectionTitle} title special-font yellow`}>Regalo</h1>
            <Image src={giftIcon} alt="regalo" className="icon" />
            <div className={styles.textInfo}>
              <p className={styles.p}>Lluvia de sobres</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className={`${styles.specialText} title special-font blue`}>¡Los esperamos!</h1>
    </section>
  );
};

export default MoreInfo;
