import Content from "../component/Content";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet} from 'react-helmet-async';
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config.js";
export default function Basic() {
  let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if(!user){
      navigate("/")
    }})
  return (
    <>
     <Helmet>
        <title>Basic Page</title>
            <meta
      name="description"
      content="Basic Page"
    />
      </Helmet>
<Header/>
{/* <Content data="Basic"/> */}
<main>Welcome {user.displayName}</main>
<Footer/>
    </>
  )
}
