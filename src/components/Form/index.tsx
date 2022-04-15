import React, { useContext, useState } from "react";
import Button from "../Button";
import styles from "./Form.module.scss";
import { v4 as uuid } from "uuid";
import IMateria from "../../types/materia";
import MateriaContext from "../../store/materia";

const Form: React.FC = () => {
  const { setMaterias } = useContext(MateriaContext);

  const [state, setState] = useState<IMateria>({
    name: "",
    time: "00:00:00",
    selecionada: false,
    completada: false,
    id: "",
  });

  const saveTask = (e: React.FormEvent) => {
    e.preventDefault();
    setMaterias((materiasAntigas) => [...materiasAntigas, { ...state }]);
    setState({
      name: "",
      time: "00:00:00",
      selecionada: false,
      completada: false,
      id: uuid(),
    });
  };

  return (
    <form className={styles.formContainer} onSubmit={saveTask}>
      <div>
        <label htmlFor="study">Matéria</label>
        <input
          id="study"
          name="study"
          placeholder="O que você quer estudar?"
          value={state.name}
          onChange={(e) => {
            setState({ ...state, name: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="time">Tempo de estudo</label>
        <input
          type="time"
          id="time"
          name="time"
          step="1"
          min="00:00:00"
          max="01:30:00"
          value={state.time}
          onChange={(e) => {
            setState({ ...state, time: e.target.value });
          }}
        />
      </div>
      <div className="">
        <Button type="submit">Cadastrar</Button>
      </div>
    </form>
  );
};

export default Form;
