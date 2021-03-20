import './App.css';
import Nav from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App () {
  return (
      <BrowserRouter>
          <div className="wrapper">
              <HeaderContainer />
              <Nav />
              <div className="main">
                  <Route path="/profile/:userId?" render={ () =>
                      <MainContainer /> }
                  />
                  <Route path="/dialogs" render={ () =>
                      <DialogsContainer /> }
                  />
                  <Route path="/users" render={ () =>
                      <UsersContainer /> }
                  />
                  <Route path="/news" render={() => <News />} />
                  <Route path="/login" render={() => <Login />} />
              </div>
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;
