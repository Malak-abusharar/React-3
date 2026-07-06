import Content from "../component/Content";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet} from 'react-helmet-async';
export default function Basic() {
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
<Content data="Basic"/>
<Footer/>
    </>
  )
}
