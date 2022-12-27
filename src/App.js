import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from './Componants/Home/Home';
import Library from './Componants/Library/Library';
import LastListening from './Componants/LastListening/LastListening';

function App()
{
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/library' exact  element={<Library />}></Route>
        <Route path='/last-listening' exact  element={<LastListening />}></Route>
      </Routes>
    </div>
  );
}

export default App;

                