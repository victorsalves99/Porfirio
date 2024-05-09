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
import Footer from './components/Footer/Footer';

function App() {


  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
