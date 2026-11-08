import Header from "../component/Header";
import Footer from "../component/Footer";
import { Helmet} from 'react-helmet-async';
import { Link} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config.js";
export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  return (
        <div>
         <Helmet>
        <title>Home Page</title>
      </Helmet>
  <Header/>
    {user &&   <main className="hero-section">
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
      </main>}
      {!user && 
      <main className="auth"> 
      <p><Link to="/Signin">Sign in</Link> to continue...</p>
      </main>}
<Footer/>
    </div>
  )
}
