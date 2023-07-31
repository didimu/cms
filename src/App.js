import './App.css';
import './common.css';
import './cms.css';
import Header from './component/Header';
import Main from './component/Main';
import Content from './component/Content';
import Footer from './component/Footer';

function App() {
  return (
     <div>
        <Header></Header>
        <Main></Main>
        <Content></Content>
        <Footer></Footer>
     </div>
  );
}

export default App;
