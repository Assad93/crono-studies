import Cronometro from "../components/Cronometro";
import Form from "../components/Form";
import List from "../components/List";
import Context from "../store/Context";
import styles from "./App.module.scss";

function App() {
  return (
    <Context>
      <div className={styles.AppStyle}>
        <div className={styles.wrapper}>
          <Cronometro />
          <Form />
        </div>
        <List />
      </div>
    </Context>
  );
}

export default App;
