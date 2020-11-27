import styles from "./App.module.scss";
import {
  Header,
  TopNews,
  SearchNews,
  Categories,
  Category,
  Article,
} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CountryProvider } from "./context/CountryContext";
import { ArticleProvider } from "./context/ArticleContext";
function App() {
  return (
    <Router>
      <CountryProvider>
        <ArticleProvider>
          <div className={styles.container}>
            <Header />

            <Switch>
              <Route path="/" exact component={TopNews} />
              <Route path="/search" component={SearchNews} />
              <Route path="/categories/:id" component={Category} />
              <Route path="/categories" component={Categories} />
              <Route path="/article" component={Article} />
              <Route render={() => <h3>Not Found</h3>} />
            </Switch>
          </div>
        </ArticleProvider>
      </CountryProvider>
    </Router>
  );
}

export default App;
