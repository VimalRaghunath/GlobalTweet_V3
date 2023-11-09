import "./App.css"
import CreateanAccount from "./Components/CreateanAccount"
import Signin from "./Components/Signin"
import Home from "./Components/Home/Home"
import { Routes,Route } from "react-router-dom"


function App(){

    return(

      <div className="App">
        <Routes>

          <Route path="/" element={<Signin/>} />
          <Route path="/createanaccount" element={<CreateanAccount/>}/>
          <Route path="/home" element={<Home/>}/>
  
        </Routes>
      </div>
      
    )
}

export default App