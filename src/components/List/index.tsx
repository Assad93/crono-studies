import React, { useContext } from "react";
import MateriaContext from "../../store/materia";
import Item from "./Item";
import styles from "./List.module.scss";

const List: React.FC = () => {
  const { materias } = useContext(MateriaContext);

  return (
    <div className={styles.listContainer}>
      <div className={styles.board}>
        <h2>Matérias</h2>
        <ul className={styles.list}>
          {materias.map((item) => (
            <Item key={item.id} materia={{ ...item }} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
