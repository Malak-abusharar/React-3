import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet} from 'react-helmet-async';
import { Link} from "react-router-dom";
import {auth} from "../firebase/Config.js"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
   <Helmet>
          <title>SignUp Page</title>
        </Helmet>
  <Header/>
  <main>
        <form>
          <p>Create a new account</p>
          <input onChange={(eo) => {
            setEmail(eo.target.value)
            // console.log(eo.target)
            // console.log(eo.target.value)
          }
          }
          required placeholder="email" type="email"/>
        <input onChange={(eo) => {
            setPassword(eo.target.value)
          }
          }
        required placeholder="password" type="password"/>
        <button onClick={(eo) => {
          eo.preventDefault();
          createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
  console.log("success")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error")
    console.log(errorCode)
    console.log(errorMessage)
  });
        }
        }
        >Sign up</button>
        <p className="account"><Link to="/Signin">Sign in</Link></p>
        </form>
  </main>
  <Footer/>
    </div>
  )
}
