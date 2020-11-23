import styles from "./App.module.scss";
import { Header, TopNews } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CountryProvider } from "./context/CountryContext";
function App() {
  return (
    <Router>
      <CountryProvider>
        <div className={styles.container}>
          <Header />
          <TopNews />
        </div>
      </CountryProvider>
    </Router>
  );
}

export default App;
