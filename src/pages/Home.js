import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <button>
        <Link to="/funcionarios"> Relação de Funcionários</Link>
      </button>
      <button>
        <Link to="/createnewemployee"> Novo Funcionário</Link>
      </button>
      <Link to="/employeedelete/"> Excluir Funcionário</Link>
    </div>
  );
}

export default Home;
