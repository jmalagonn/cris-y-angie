import styles from "./Banner.module.css";
import Image from "next/image";
import logoBanner from "../../assets/images/logo-banner.svg";

export const Banner = () => {
    return (
        <section className={`${styles.banner}`}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <Image src={logoBanner} alt="Logo" />
                <div  className={styles.scrollArrow}>
                    <a href="#news"><span></span><span></span><span></span></a>
                </div>
            </div>
        </section>
    );
}

export default Banner;