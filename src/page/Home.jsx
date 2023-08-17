import '../css/common.css';
import '../css/cms.css';
import '../css/contents.css';
import Header from '../component/Header';
import Main from '../component/Main';
import Content from '../component/Content';
import Footer from '../component/Footer';

function Home() {
  return (
     <div>
        <Header></Header>
        <Main></Main>
        <Content></Content>
        <Footer></Footer>
     </div>
  );
}

export default Home;