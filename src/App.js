import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';

/** Get Routes working from navbar to specific page */
function App() {
  return (
    <Router>
      <AboutPage />
      <Switch>
        
        {/* <Route path='/' component={Home} exact /> */}
        {/* <Route path='/about' exact component={AboutPage} /> */}
        {/* <Route path='/showcase' exact component={Services} />
        <Route path='/pubawards' exact component={Products} /> */}
      </Switch>
    </Router>
  );
}

export default App;
