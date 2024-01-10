import mapIcon from "@/assets/images/map.svg";
import styles from "./Place.module.css";
import Image from "next/image";

export const Place = () => {
    return (
        <section className="section">
            <h1 className={`special-font title blue`}>Lugar</h1>
            <Image src={mapIcon} alt="Mapa" className={styles.icon}/>
            <h2 className={styles.subtitle}>Hacienda Arkadia By Alex Rodriguez</h2>
            <p className={styles.city}>Chía, Cundinamarca</p>
            <a href="https://waze.com/ul/hd2g7dqggh" target="_blank" className="button">Ver ubicación</a>
        </section>
    );
};

export default Place;