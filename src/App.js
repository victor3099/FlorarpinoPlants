import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './pages/Home'
import { Container, Row } from 'react-bootstrap';


function App() {


  return <><Header />
    <Home />
    <Footer />
  </>
}

export default App;
