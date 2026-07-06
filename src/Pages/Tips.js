import Header from "../component/Header";
import Footer from "../component/Footer";
import Content from "../component/Content";
import { Helmet} from 'react-helmet-async';
export default function Tips() {
  return (
      <>
       <Helmet>
        <title>Tips Page</title>
      </Helmet>
      <Helmet>
        <title>Framework Page</title>
      </Helmet>
      <Header/>
<Content data="Tips"/>
<Footer/>
    </>
  )
}

