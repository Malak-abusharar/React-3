import Header from "../component/Header";
import Footer from "../component/Footer";
import Content from "../component/Content";
import { Helmet} from 'react-helmet-async';
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config.js";
export default function Frameworks() {
    let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if(!user){
      navigate("/")
    }})
        if (loading) {
        return (
          <div>
            <Header/>
            <p>Loading...</p>
            <Footer/>
          </div>
        );
      }
      if (error) {
        return (
          <div>
            <Header/>
            <p>Error: {error}</p>
              <Footer/>
          </div>
        );
      }
    
      if(user){
        if(!user.emailVerified){
navigate("/")
        }
        if(user.emailVerified){
  return (
      <>
      <Helmet>
          <title>Framework Page</title>
        </Helmet>
<Header/>
      <Content data="Frameworks"/>
  <Footer/>
    </>
  )
        }
      }

}
