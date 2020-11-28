import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import csi from './components/views/csi';
// import acc from './components/views/acc';
// import magd from './components/views/magd';
import Home from './components/views/Home';


function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          { <Route path = "/" exact component = {Home} />}
          {/* <Route path='/csi' component={CSI} />
          <Route path='/acc' component={ACC} />
          <Route path='/magd' component={MAGD} />
          <Route path='/csi' component={CONTACT} />
          <Route path='/acc' component={LOGIN} />
          <Route path='/magd' component={CALENDAR} /> */}
        </Switch>
        <Footer/>
    </Router>
    </>
  );
}

export default App;
