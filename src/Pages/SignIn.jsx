import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet} from 'react-helmet-async';
import { Link} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/Config.js"
import {useState} from "react";
import { useNavigate } from "react-router";
export default function SignIn() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
   <Helmet>
          <title>SignIn Page</title>
        </Helmet>
  <Header/>
  <main>
    <form>
      <input onChange={(eo) => {
        setEmail(eo.target.value)}}
      required placeholder="email" type="email"/>
    <input onChange={(eo) => {
        setPassword(eo.target.value)}}
    required placeholder="password" type="password"/>
    <button onClick={(eo) => {
      eo.preventDefault()
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("log in")
    navigate("/");
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("faild log in")
  });
    }
    }
    >Sign in</button>
    <p className="account"><Link to="/Signup">Sign up</Link></p>
    </form>
  </main>
  <Footer/>
    </div>
  )
}
