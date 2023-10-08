import logo from './logo.svg';
import './App.css';
import {Link,Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx' ;
import CreatePizza from './components/CreatePizza';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/pizza/new" element={<CreatePizza/>} />
      </Routes>
    
    </div>
  );
}

export default App;
