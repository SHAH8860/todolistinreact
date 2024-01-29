import "./App.css";
import Apidata from "./component/Apidata";
import Listform from "./component/Listform";
import MyContextProvider from "./component/ContextUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Oneapp from "./component/Oneapp";
import Header from "./component/Header";

function App() {
  return (
    <>
    <MyContextProvider>
      <Router>
        <Routes>
          <Route exact path="/list" element={<Listform />} />
          <Route exact path="/data" element={<Apidata />} />
          <Route exact path="/list/:id" element={<Listform />} />
          <Route exact path="/one" element={<Oneapp/>}/>
        </Routes>
        <div className="container-fluid">
          <Header/>
        </div>
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
