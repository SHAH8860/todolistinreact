import "./App.css";
import Apidata from "./component/Apidata";
import Listform from "./component/Listform";
import MyContextProvider from "./component/ContextUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <MyContextProvider>
      <Router>
        <Routes>
          <Route exact path="/list" element={<Listform />} />
          <Route exact path="/data" element={<Apidata />} />
          <Route exact path="/list/:id" element={<Listform />} />
        </Routes>
        <div className="container">
          <Listform />
        </div>
        <div className="container">
          <Apidata />
        </div>
      </Router>
      </MyContextProvider>
    </>
  );
}

export default App;
