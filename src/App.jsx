import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./huzaifa-folder/Home";
import Main from "./huzaifa-folder/OutletHeader";
import InputData from "./huzaifa-folder/InputData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home/>}/>
          <Route path="/details" element={<InputData/>}/>
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}


export default App;
