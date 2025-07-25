import Home from "./Components/Home";
import SendFile from "./Components/SendFile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/send' element={<SendFile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
