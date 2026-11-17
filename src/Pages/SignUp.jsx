import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { auth } from "../firebase/Config.js";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
//error
//loading
//not signin
//signin without email verification
//signin with email verification
export default function SignUp() {
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [UserName, setUserName] = useState("");
  const [Error, setError] = useState(false);
  const [MessageError, setMessageError] = useState("");

  const signUpBTN = (eo) => {
    eo.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("sign up success");
        sendEmailVerification(auth.currentUser).then(() => {
          // Email verification sent!
          console.log("email sent");
        });

        updateProfile(auth.currentUser, {
          displayName: UserName,
        })
          .then(() => {
            // Profile updated!
            console.log("success update");
          })
          .catch((error) => {
            // An error occurred
            console.log("fail update");
          });

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
        console.log("error");
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  if (error) {
    return (
      <div>
        <Header />
        <p>Error: {error}</p>
        <Footer />
      </div>
    );
  }
  if (loading) {
    return (
      <div>
        <Header />
        <p>Loading...</p>
        <Footer />
      </div>
    );
  }

  if (user) {
    if (!user.emailVerified) {
      navigate("/");
    }
    if (user.emailVerified) {
      navigate("/");
    }
  }

  if (!user) {
    return (
      <div>
        <Helmet>
          <title>SignUp Page</title>
        </Helmet>
        <Header />
        <main>
          <form>
            <p>Create a new account</p>
            <input
              onChange={(eo) => {
                setUserName(eo.target.value);
              }}
              required
              placeholder="enter user name:"
              type="text"
            />
            <input
              onChange={(eo) => {
                setEmail(eo.target.value);
                // console.log(eo.target)
                // console.log(eo.target.value)
              }}
              required
              placeholder="email"
              type="email"
            />
            <input
              onChange={(eo) => {
                setPassword(eo.target.value);
              }}
              required
              placeholder="password"
              type="password"
            />
            <button
              onClick={(eo) => {
                signUpBTN(eo);
              }}
            >
              Sign up
            </button>
            <p className="account">
              <Link to="/Signin">Sign in</Link>
            </p>
            {Error && <p>{MessageError}</p>}
          </form>
        </main>
        <Footer />
      </div>
    );
  }
}
