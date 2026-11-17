import Header from "../component/Header";
import Footer from "../component/Footer";
import { Helmet} from 'react-helmet-async';
import { Link} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config.js";
import { sendEmailVerification } from "firebase/auth";
//error
//loading
//not signin
//signin without email verification
//signin with email verification
export default function Home() {
  const [user, loading, error] = useAuthState(auth);
    if (error) {
      return (
        <div>
          <Header/>
          <p>Error: {error}</p>
            <Footer/>
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
if(!user){
  return(
    <div>
      <Header/>
      <main className="auth"> 
      <p><Link to="/Signin">Sign in</Link> to continue...</p>
      </main>
      <Footer/>
    </div>
  )
}

if(user){
  if(!user.emailVerified){
return(
      <div>
        <Header/>
        <main>
          <div>
            <p className="verfiy-mass">We send you an emial to verfiy your account</p>
            <button className="delete"
            onClick={() => {
              sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    console.log("email sent again")
  });

            }
            }>Send agin</button>
          </div>
        </main>
        <Footer/>
      </div>
    )
  }
  if(user.emailVerified){
    return(
      <div>
        <Header/>
         <main className="hero-section">
        <div className="hero-text">
          <h2>Start your journey with Web Development</h2>
          <p>Learn step-by-step and build real projects.</p>
          <a href="#" className="hero-btn">
            Start Learning
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="hero-img"
        />
      </main>
        <Footer/>
      </div>
    )
  }
}
}
