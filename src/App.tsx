import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomeTwo from "./pages/homes/HomeTwo";
import ScrollToTopRoute from "./components/scrolltotop/ScrollToTopRoute";
import Collection from "./pages/collection/Collection";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path="/collection">
            <Collection />
          </ScrollToTopRoute>

          <ScrollToTopRoute exact={true} path="/contact">
            <Contact />
          </ScrollToTopRoute>

          <ScrollToTopRoute exact={true} path="/">
            <HomeTwo />
          </ScrollToTopRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
