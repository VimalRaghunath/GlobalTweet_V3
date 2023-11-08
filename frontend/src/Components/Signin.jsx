import Button from "@mui/material/Button";
import "./Signin.css";

function Signin() {
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
        <div>
           <input className="input1" type="email" placeholder="Email/username" /> <br/><br/>
           
        </div>

        <div>
            <input className="input2" type="password" placeholder="Password" /> <br/><br/>
        </div>

        <div>
          <button className="signinbutton">Sign In</button>
        </div>
        <div>
          <button className="CreateanAccount">Create an Account</button>
        </div>
        <footer className="footer">
          <a href="foote">Forgot Password?...</a>
        </footer>
      </div>
    </div>
  );
}

export default Signin;
