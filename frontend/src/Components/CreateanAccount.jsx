import "./CreateanAccount.css";
import Logo from "./Assets/GlobalTweet.jpg"
import { useNavigate } from "react-router-dom";


function CreateanAccount(){
    
    const navigate = useNavigate()

    return(
        <div className="CreateanAccountcontainer">
         <div className="CreateanAccountnew">
      
           <img className="GlobalTweetimage" src={Logo} />
        
        <div> 

            <p> Sign up here,</p>

           <input className="Name" type="text" placeholder="Name" /> <br/><br/>
           
        </div>

        <div>
            <input className="Email" type="email" placeholder="Email" /> <br/><br/>
        </div>

        <div>
            <input className="Mobile" type="number" placeholder="Mobile Number" /> <br/><br/>
        </div>

        <div>
            <input className="Username" type="text" placeholder="Username" /> <br/><br/>
        </div>

        <div>
            <input className="Password" type="password" placeholder="Password" /> <br/><br/>
        </div>

        <div>
          <button className="CreateanAccount">Create an Account</button>
        </div>
        <div>
          <p > Already have an Account? <a onClick={()=>navigate('/')} href="">Signin</a></p>
        </div>

      </div>
    </div>
        
        
    )
}

export default CreateanAccount