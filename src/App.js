import React, {useState} from "react";



import GlobalStyle from "./components/GlobalStyle";

// Pages

import Nav from "./components/Nav";
import AboutUs from './pages/AboutUs';

import ContactUs from "./pages/ContactUs";
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetails';

import RecentWork from './pages/RecentWork';

// import styles from "./styles.css/App.scss";
import {Switch, Route, useLocation} from "react-router-dom";
//animation 
import {AnimatePresence} from "framer-motion";

function App() {

  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
        <GlobalStyle/>
        <Nav/>

        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
                <AboutUs />
            </Route>  

            <Route path="/work" exact>
                <OurWork />
            </Route>  

            {/*add anything after / id  */}
            <Route path="/work/:id">
                <MovieDetail/>
            </Route>

            {/*render out recent work when path is /recent*/}
            <Route path="/recent">
                <RecentWork/>
            </Route>


            <Route path="/contact">
              <ContactUs/>
            </Route> 


          </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
