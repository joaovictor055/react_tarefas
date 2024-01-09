import { useState } from "react";
import "./App.css";

interface ITarefa {
  nome: string;
  checked: boolean;
  onChecked?: (checked: boolean) => void;
}

const Tarefa = ({ nome, checked, onChecked }: ITarefa) => {
  function onChange() {
    if (onChecked) onChecked(!checked);
  }

  return (
    <div>
      <input
        type="checkbox"
        id="scales"
        name="scales"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="scales">{nome}</label>
    </div>
  );
};

interface Task {
  nome: string;
  checked: boolean;
}

function App() {

  // CLINCANDO EM ADCIONAR, NOVA TAREFA SERÀ ADICIONADA A LISTA DE TAREFAS

  const [tasks, setTasks] = useState<Task[]>([]);

  const handleUpdateTarefa = (checked: boolean) => {
    // setTarefa({ ...tarefa, checked: checked });
  };

  return (
    <>
      <div className="App" style={{ margin: "auto" }}>
        <h1>TAREFAS</h1>

        <div>
          <input />
          <button>ADICIONAR</button>
        </div>

        <h3>lavar louça</h3>

        {tasks.map((t) => {
          return <Tarefa nome={t.nome} checked={t.checked} />;
        })}
      
      </div>
    </>
  );
}

///  [Nome da terefa] [Adcionar]

/// Lista de tarefas

/// [] Compras
/// [] Lavar o banheiro

export default App;
