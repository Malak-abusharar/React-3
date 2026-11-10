import Header from "../component/Header";
import Footer from "../component/Footer";
import Content from "../component/Content";
import { Helmet} from 'react-helmet-async';
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config.js";
export default function Tips() {
      let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if(!user){
      navigate("/")
    }})
  return (
      <>
       <Helmet>
        <title>Tips Page</title>
      </Helmet>
      <Header/>
<Content data="Tips"/>
<Footer/>
    </>
  )
}

