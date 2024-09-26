import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <div>
      <input className={styles.display} value={displayValue} type="text" />
    </div>
  );
};

export default Display;
