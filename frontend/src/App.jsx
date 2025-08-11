import Home from "./Components/Home";
import ReceiveFile from "./Components/ReceiveFile";
import SendFile from "./Components/SendFile";
import About from "./Components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/send' element={<SendFile />} />
          <Route path='/receive' element={<ReceiveFile />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
