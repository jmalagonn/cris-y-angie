import Image from "next/image";
import calendar from "@/assets/images/calendar.svg";
import styles from "./DateSection.module.css";
import { useEffect, useState } from "react";

const marriageDate = new Date("2024-03-27T12:00:00.000-05:00");
const currentDate = new Date();
const remainingMs = marriageDate.getTime() - currentDate.getTime();

export const DateSection = () => {
  const [seconds, setSeconds] = useState(
    parseInt(Math.floor(remainingMs / 1000))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const getTotalMinutes = () => parseInt(Math.floor(seconds / 60));
  const getTotalHours = () => parseInt(Math.floor(getTotalMinutes() / 60));

  const getFormatedSeconds = () => seconds % 60;
  const getMinutes = () => parseInt(getTotalMinutes() % 60);
  const getHours = () => parseInt(getTotalHours() % 24);
  const getDays = () => parseInt(Math.floor(getTotalHours() / 24));

  return (
    <section id="save-the-date" className="section">
      <h1 className={`${styles.title} ${styles.main}`}>Fecha</h1>
      <Image src={calendar} alt="calendar" className={styles.calendar} />
      <h1 className={styles.title}>23 de marzo de 2024</h1>
      <div className={styles.countDown}>
        <div>
          <p className={styles.number}>{getDays()}</p>
          <p className={styles.label}>Días</p>
        </div>
        <div>
          <p className={styles.number}>{getHours()}</p>
          <p className={styles.label}>Horas</p>
        </div>
        <div>
          <p className={styles.number}>{getMinutes()}</p>
          <p className={styles.label}>Minutos</p>
        </div>
        <div>
          <p className={styles.number}>{getFormatedSeconds()}</p>
          <p className={styles.label}>Segundos</p>
        </div>
      </div>
    </section>
  );
};

export default DateSection;
