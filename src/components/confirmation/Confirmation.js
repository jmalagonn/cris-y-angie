import styles from "./Confirmation.module.css";

export const Confirmation = () => {
    const waLink = "https://wa.me/573012630788";
    const text = "Hola! Soy (...) y quiero confirmar mi asistencia y la de (...) al matrimonio de Angie y Cristian.";

    return (
        <a className={styles.link} href={`${waLink}/?text=${encodeURIComponent(text)}`} target="_blank">Confirmar asistencia</a>
    );
}

export default Confirmation;