import Login from "./pages/Login/Login";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tarefas" element={<ListarTarefa />} />
      </Routes>
    </div>
  );
}

export default App;
