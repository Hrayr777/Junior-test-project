import Main from "./components/main/Main";
import About from "./components/about/About";
import Story from "./components/story/Story";
import styles from "./App.module.css";
import { IconContext } from "react-icons";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function App() {
  const categories = [
    {
      title: "Country:",
      value: "United Kingdom",
      id: 0,
    },
    {
      title: "Language:",
      value: "English",
      id: 1,
    },
    {
      title: "Genre:",
      value: "Historiography",
      id: 2,
    },
    {
      title: "Publication date:",
      value: "1991",
      id: 3,
    },
    {
      title: "Share on us:",
      value: (
        <>
          <IconContext.Provider value={{ color: "#1b3764", size: "18px" }}>
            <span>
              <FaFacebookF />
            </span>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#1b3764", size: "18px" }}>
            <span className={styles.icon}>
              <FaTwitter />
            </span>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#1b3764", size: "18px" }}>
            <span>
              <FaLinkedinIn />
            </span>
          </IconContext.Provider>
        </>
      ),
      id: 4,
    },
  ];
  const data = [
    {
      title: "Great Author Awards - 1996 & 2000",
      value:
        "How to navigate around the interface and toggle on/off the panels you wish to use.",
      number: "01",
      id: 0,
    },
    {
      title: "10 Times New York Times ® Best Seller",

      value:
        "How to navigate around the interface and toggle on/off the panels you wish to use.",
      number: "02",
      id: 1,
    },
    {
      title: "Writer of Hack Productivity",
      value:
        "How to navigate around the interface and toggle on/off the panels you wish to use.",
      number: "03",
      id: 2,
    },
  ];
  return (
    <div>
      <Main />
      <About categories={categories} />
      <Story data={data} />
    </div>
  );
}

export default App;
