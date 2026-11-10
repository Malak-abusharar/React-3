import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet} from 'react-helmet-async';
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config.js";
import Moment from 'react-moment';
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
<main>
  <div className="basic-page">
    <p>Welcome {user.displayName}</p>
    <p>Email: {user.email}</p>
    <p>Last sign in: <Moment fromNow ago date={user.metadata.lastSignInTime}/></p>
    <p>Account created:   <Moment fromNow ago date={user.metadata.creationTime}/></p>
    <button className="delete">Delete account</button>
  </div>
</main>

<Footer/>
    </>
  )
}
