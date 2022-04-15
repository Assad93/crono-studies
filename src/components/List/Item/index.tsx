import React, { useContext } from "react";
import MateriaContext from "../../../store/materia";
import IMateria from "../../../types/materia";
import styles from "./Item.module.scss";
import { FaCheck } from "react-icons/fa";

interface ItemProps {
  materia: IMateria;
}

const Item: React.FC<ItemProps> = ({ materia }) => {
  const { materias, setMaterias, materiaSelecionada, setMateriaSelecionada } =
    useContext(MateriaContext);

  const selecionarMateria = () => {
    setMateriaSelecionada(materia);
    const materiasAtualizado = materias.map((item) => ({
      ...item,
      selecionada: item.id === materia.id ? true : false,
    }));

    setMaterias(materiasAtualizado);
  };

  return (
    <li
      className={`${styles.item} ${
        materia.selecionada ? styles.itemSelecionado : ""
      } ${materia.completada ? styles.itemCompletado : ""} `}
      onClick={() => {
        if (!materia.completada) {
          selecionarMateria();
        }
      }}
    >
      <div>
        <h3>{materia.name}</h3>
        <span>{materia.time}</span>
      </div>
      {materia.completada && (
        <span>
          <FaCheck size={36} />
        </span>
      )}
    </li>
  );
};

export default Item;
