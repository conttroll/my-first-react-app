import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App () {
  return (
      <BrowserRouter>
          <div className="wrapper">
              <Header />
              <Nav />
              <div className="main">
                  <Route path="/home" render={ () =>
                      <Main /> }
                  />
                  <Route path="/dialogs" render={ () =>
                      <DialogsContainer /> }
                  />
                  <Route path="/News" render={() => <News />} />
              </div>
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;
