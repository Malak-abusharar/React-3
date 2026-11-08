import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet} from 'react-helmet-async';
import { Link} from "react-router-dom";
import {auth} from "../firebase/Config.js"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
import { useNavigate } from "react-router";

export default function SignUp() {
    let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
  const [MessageError, setMessageError] = useState("");
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
  navigate("/");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(true);
      switch (errorCode) {
                    case "auth/invalid-email":
                      setMessageError("Wrong Email");
                      break;
                    case "auth/invalid-password":
                      setMessageError("Wrong Password");
                      break;
                    case "auth/invalid-credential":
                      setMessageError("Wrong");
                      break;
                    case "auth/too-many-requests":
                      setMessageError("Tray Later!");
                      break;
                      case "auth/weak-password":
                      setMessageError("weak password");
                      break;
                    default:
                      console.log("error");
                  }
    console.log("error")
    console.log(errorCode)
    console.log(errorMessage)
  });
        }
        }
        >Sign up</button>
        <p className="account"><Link to="/Signin">Sign in</Link></p>
        {error && <p>{MessageError}</p>}
        </form>
  </main>
  <Footer/>
    </div>
  )
}
