import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/Display";

const App = () => {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal(" ");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
};

export default App;
