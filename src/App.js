import './App.css';
import Vestido from './constructor/vestidos';
function App() {
  return (
    <div className='d-flex mx-auto mt-5'>
      <Vestido
      imagen='maria'
      nombre='Maria'
      pais='Republica Dominicana'
      cargo='Desarrolladora'
      empresa='Google'
      testimonio='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt maiores non unde veniam sapiente distinctio laboriosam consequuntur perspiciatis aut dicta.'
      />
      <Vestido
      imagen='antonio'
      nombre='Antonio'
      pais='El Salvador'
      cargo='Designer'
      empresa='YouTube'
      testimonio='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt maiores non unde veniam sapiente distinctio laboriosam consequuntur perspiciatis aut dicta.'
      />
      <Vestido
      imagen='michael'
      nombre='Michael'
      pais='Mexico'
      cargo='Desarrollador'
      empresa='Pinterest'
      testimonio='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt maiores non unde veniam sapiente distinctio laboriosam consequuntur perspiciatis aut dicta.'
      />
    </div>
);
}

export default App;
