import React, { useContext, useEffect, useState } from "react";
import Button from "../Button";
import Relogio from "./Relogio";
import styles from "./Cronometro.module.scss";
import MateriaContext from "../../store/materia";
import { tempoParaSegundos } from "../../utils/date";

const Cronometro: React.FC = () => {
  const { materias, materiaSelecionada, setMaterias } =
    useContext(MateriaContext);
  const [tempo, setTempo] = useState<number>(
    tempoParaSegundos(materiaSelecionada.time)
  );

  useEffect(() => {
    setTempo(tempoParaSegundos(materiaSelecionada.time));
  }, [materiaSelecionada]);

  const regressiva = (contador: number = 0) => {
    if (contador > 0) {
      setTimeout(() => {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }, 1000);
    } else {
      finalizarTarefa();
    }
  };

  const finalizarTarefa = () => {
    const materiasAtualizado = materias.map((item) => {
      if (item.id === materiaSelecionada.id) {
        return {
          ...item,
          selecionada: false,
          completada: true,
        };
      }

      return item;
    });

    setMaterias(materiasAtualizado);
  };

  return (
    <div className={styles.cronometro}>
      <div>
        <Relogio tempo={tempo} />
      </div>
      <Button
        onClick={() => {
          regressiva(tempo);
        }}
      >
        Começar
      </Button>
    </div>
  );
};

export default Cronometro;
