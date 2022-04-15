import React from "react";
import styles from "./Relogio.module.scss";

// import { Container } from './styles';

interface IRelogio {
  tempo: number;
}

const Relogio: React.FC<IRelogio> = ({ tempo }) => {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0");
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0");

  return (
    <div className={styles.relogio}>
      <span>{minutoDezena}</span>
      <span>{minutoUnidade}</span>
      <span>:</span>
      <span>{segundoDezena}</span>
      <span>{segundoUnidade}</span>
    </div>
  );
};

export default Relogio;
