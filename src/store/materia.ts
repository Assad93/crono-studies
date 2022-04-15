import React, { createContext } from "react";
import IMateria from "../types/materia";

interface IContext {
  materias: IMateria[];
  setMaterias: React.Dispatch<React.SetStateAction<IMateria[]>>;
  materiaSelecionada: IMateria;
  setMateriaSelecionada: React.Dispatch<React.SetStateAction<IMateria>>;
}

const MateriaContext = createContext<IContext>({
  materias: [],
  setMaterias: () => {},
  materiaSelecionada: {
    name: "",
    time: "00:00:00",
    selecionada: false,
    completada: false,
    id: "",
  },
  setMateriaSelecionada: () => {},
});

export default MateriaContext;
