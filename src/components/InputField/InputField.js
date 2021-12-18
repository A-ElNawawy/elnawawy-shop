import styles from "./InputField.module.css";

const InputField = ({ label, type, placeholder, value }) => {
  return (
    <div className={styles.inputField}>
      <label>
        <h3>{label}</h3>
        <input type={type} placeholder={placeholder} value={value} />
      </label>
    </div>
  );
};

export default InputField;
