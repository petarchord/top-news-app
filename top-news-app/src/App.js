import styles from "./App.module.scss";
import { Header, Home } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
