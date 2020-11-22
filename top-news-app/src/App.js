import styles from "./App.module.scss";
import { Header } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
      </div>
    </Router>
  );
}

export default App;
