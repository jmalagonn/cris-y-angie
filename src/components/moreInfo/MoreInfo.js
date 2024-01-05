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
                        <h1 className={`${styles.sectionTitle} title`}>Dress Code</h1>
                        <Image src={suitIcon} alt="traje" className="icon" />
                        <p className={styles.p}>Lorem Ipsum</p>
                    </div>
                    <div>
                        <h1 className={`${styles.sectionTitle} title`}>Regalo</h1>
                        <Image src={giftIcon} alt="regalo" className="icon" />
                        <p className={styles.p}>Lluvia de sobres</p>
                    </div>
                </div>
            </div>
            <h1 className="title special-font">¡Los esperamos!</h1>
        </section>
    );
}

export default MoreInfo;