import { useState } from "react";
import styles from "./App.module.scss";
import {
  Header,
  TopNews,
  SearchNews,
  Categories,
  Category,
  Article,
  NotFound,
  SideDrawer,
  BackDrop,
} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CountryProvider } from "./context/CountryContext";
import { ArticleProvider } from "./context/ArticleContext";
function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  return (
    <Router>
      <CountryProvider>
        <ArticleProvider>
          <div className={styles.container}>
            <Header toggleSideDrawer={setSideDrawerOpen} />
            <SideDrawer
              open={sideDrawerOpen}
              toggleSideDrawer={setSideDrawerOpen}
            />
            <BackDrop
              open={sideDrawerOpen}
              toggleSideDrawer={setSideDrawerOpen}
            />
            <Switch>
              <Route path="/" exact component={TopNews} />
              <Route path="/search" component={SearchNews} />
              <Route path="/categories/:id" component={Category} />
              <Route path="/categories" component={Categories} />
              <Route path="/article" component={Article} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </ArticleProvider>
      </CountryProvider>
    </Router>
  );
}

export default App;
