import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => (
          <button
            onClick={() => onButtonClick(buttonName)}
            className={styles.button}
          >
            {buttonName}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonContainer;
