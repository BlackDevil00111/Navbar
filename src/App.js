
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./components/navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
