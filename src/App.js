import styles from './App.module.css';
import Atomic from "./components/Atomic";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {

  return(
      <div className={styles.wrapper}>
          <Atomic />
          <About />
          <Contacts />
      </div>
  )
}

export default App;
