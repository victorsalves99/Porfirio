// importação dos css
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
