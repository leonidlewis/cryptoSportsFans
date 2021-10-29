import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Main from "./pages/Main";
import Roadmap from "./pages/Roadmap";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Footer from "./pages/Main/Footer";
import Menu from "./component/Menu";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("clcik----", isMenuOpen);
  };
  return (
    <Router>
      <div className="App">
        <Menu isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/roadmap" component={Roadmap} />
          <Route path="/terms" component={Terms} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
