import CreateanAccount from "./Components/CreateanAccount"
import Signin from "./Components/Signin"
import Homefeed from "./Components/Home/Homefeed/Homefeed"
import { Routes,Route } from "react-router-dom"


function App(){

    return(

      <div>
        <Routes>

          <Route path="/" element={<Signin/>} />
          <Route path="/createanaccount" element={<CreateanAccount/>}/>
          <Route path="/home" element={<Homefeed/>}/>
  
        </Routes>
      </div>
      
    )
}

export default App