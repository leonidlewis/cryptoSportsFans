import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Main from "./pages/Main";
import Roadmap from "./pages/Roadmap";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/roadmap" component={Roadmap} />
          <Route path="/terms" component={Terms} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
