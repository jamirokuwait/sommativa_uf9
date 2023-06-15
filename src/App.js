
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Navbar from './components/Navbar';
import BoxAdmin from './components/BoxAdmin';
import BoxUtente from './components/BoxUtente';
import BoxAlert from './components/BoxAlert';
import Footer from './components/Footer';

function App() {

  return (
    <div className="page-container">
      <div className="header" >
        <Header />
        <Navbar />
      </div>
      <div className="content-container">
        <div className="box-container-admin">
          <BoxAdmin />
        </div>
        <div className="box-container-utente">
          <BoxUtente />
        </div>
        <div className="box-container-alert">
          <BoxAlert />
        </div>
      </div>{/**/}
      <div className='footer'>
        <Footer />
      </div>
    </div >

  );
}

export default App;
