import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";
import SharedBanner from "../../Shared/DetailsContainer/SharedBanner/SharedBanner";
const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  // const [error,setError]=useState([])
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from)
  if (user) {
    navigate(from, { replace: true });
  }
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleUserSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);
  };
  const resetPassword=()=>{
    if (email) {
    // sendPasswordResetEmail(email)
    // toast('Email sent')
    }
  }
  
  return (
    <div className="login">
      <SharedBanner>login</SharedBanner>
      <div className="form-container">
        <form onSubmit={handleUserSignIn} action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
            />
            <p>{error?.message}</p>
            {loading && <p>loading...</p>}
          </div>
          <input type="submit" className="form-submit" value="Login" />
          <p>
            New here?{" "}
            <Link className="form-link" to="/signup">
              Create account
            </Link>{" "}
          </p>
          {/* <p>
            Forget password?
            <button onClick={resetPassword}>
              Reset Password
            </button>
          </p> */}
           
        </form>
        <SocialLogin></SocialLogin>
      </div>

      
    </div>
  );
};

export default Login;
