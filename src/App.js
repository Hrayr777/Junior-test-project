import styles from './App.module.css';
import Atomic from "./components/Atomic";
import About from "./components/About";

function App() {

  return(
      <div className={styles.wrapper}>
          <Atomic />
          <About />
      </div>
  )
}

export default App;
