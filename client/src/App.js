import {Routes,Route} from 'react-router-dom';
import CreateImage from "./components/CreateImage";
import TextCompletion from "./components/TextCompletion";
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/createimage' element={<CreateImage/>} />
        <Route path='/textcompletion' element={<TextCompletion/>}/>
      </Routes>
    </div>
  );
}

export default App;
