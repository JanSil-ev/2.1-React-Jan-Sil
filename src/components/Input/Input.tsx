import styles from "./styles.module.scss";

interface InputProps {
  value: string;
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  value,
  label,
  name,
  onChange
}: 
InputProps) => {
  return (
    <div className={styles.input}>
      <label htmlFor="">{label}</label>
      <input
        type="text"
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
};
