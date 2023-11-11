<<<<<<< HEAD
import "./App.css"
import CreateanAccount from "./Components/CreateanAccount"
import Signin from "./Components/Signin"
import Home from "./Components/Home/Home"
=======
import CreateanAccount from "./Components/CreateanAccount"
import Signin from "./Components/Signin"
import Homefeed from "./Components/Home/Homefeed/Homefeed"
>>>>>>> d9d7c5f24cc8094e220d94fed9353a7f5555c88c
import { Routes,Route } from "react-router-dom"


function App(){

    return(

<<<<<<< HEAD
      <div className="App">
=======
      <div>
>>>>>>> d9d7c5f24cc8094e220d94fed9353a7f5555c88c
        <Routes>

          <Route path="/" element={<Signin/>} />
          <Route path="/createanaccount" element={<CreateanAccount/>}/>
<<<<<<< HEAD
          <Route path="/home" element={<Home/>}/>
=======
          <Route path="/home" element={<Homefeed/>}/>
>>>>>>> d9d7c5f24cc8094e220d94fed9353a7f5555c88c
  
        </Routes>
      </div>
      
    )
}

export default App