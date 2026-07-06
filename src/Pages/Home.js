import Header from "../component/Header";
import Footer from "../component/Footer";
import { Helmet} from 'react-helmet-async';
export default function Home() {
  return (
        <>
         <Helmet>
        <title>Home Page</title>
      </Helmet>
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
    </>
  )
}
