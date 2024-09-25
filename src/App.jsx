import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./huzaifa-folder/Home";
import Main from "./huzaifa-folder/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}


export default App;
