import Button from "@mui/material/Button";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Signin() {

  const navigate = useNavigate()

  const Signin = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(
        "http://localhost:7777/api/user/",
        {
          
          username : username,
          password: password,
        }
      );

      if (response.data.status == "success") {
        alert("Signed Successfully");
        navigate("/home");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
   

  return (
    <div className="container">
      <div className="Signin">
        <h1 className="SignintoGlobalTweet">Sign in to GlobalTweet</h1>
        <button className="SigninwithGoogle">Sign in with Google</button>
        <button className="SigninwithApple">Sign in with Apple</button>

        
          <div className="hr-main">
            <div className="hr1"></div>
            <div className="hr2">or</div>
            <div className="hr3"></div> 
          </div> <br/><br/>
         <form action="" onSubmit={Signin}>
        <div>
           <input className="input1" type="text" placeholder="Email/username" id="username"/> <br/><br/>
           
        </div>

        <div>
            <input className="input2" type="password" placeholder="Password" id="password" /> <br/><br/>
        </div>

        <div>
          <button className="signinbutton" type="submit" >Sign In</button>
        </div>
        <div>
          <button onClick={()=>navigate('/createanaccount')} className="CreateanAccount">Create an Account</button>
        </div>
        <footer className="footer">
          <a href="foote">Forgot Password?...</a>
        </footer>
       </form>
      </div>
    </div>
  );
}

export default Signin;
