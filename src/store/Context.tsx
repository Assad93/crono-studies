import React, { useState } from "react";
import IMateria from "../types/materia";
import MateriaContext from "./materia";

const Context: React.FC = ({ children }) => {
  const [materias, setMaterias] = useState<IMateria[]>([]);
  const [materiaSelecionada, setMateriaSelecionada] = useState<IMateria>({
    name: "",
    time: "00:00:00",
    selecionada: false,
    completada: false,
    id: "",
  });

  return (
    <MateriaContext.Provider
      value={{
        materias,
        setMaterias,
        materiaSelecionada,
        setMateriaSelecionada,
      }}
    >
      {children}
    </MateriaContext.Provider>
  );
};

export default Context;
