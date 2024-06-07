// importação dos css
import './App.css'
// importação de componentes
import NavBar from './components/NavBar/NavBar';

// importação router dom
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  )
}

export default App
