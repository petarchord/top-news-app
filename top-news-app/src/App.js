import styles from "./App.module.scss";
import {
  Header,
  TopNews,
  SearchNews,
  Categories,
  Category,
} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CountryProvider } from "./context/CountryContext";
function App() {
  return (
    <Router>
      <CountryProvider>
        <div className={styles.container}>
          <Header />

          <Switch>
            <Route path="/" exact component={TopNews} />
            <Route path="/search" component={SearchNews} />
            <Route path="/categories/:id" component={Category} />
            <Route path="/categories" component={Categories} />
          </Switch>
        </div>
      </CountryProvider>
    </Router>
  );
}

export default App;
