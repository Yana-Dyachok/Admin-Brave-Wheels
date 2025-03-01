import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import styles from './input-item.module.scss';

const InputItem = <T extends FieldValues>({
  error,
  register,
  name,
  label,
  placeholder,
}: {
  name: string;
  label: string;
  register?: UseFormRegister<T>;
  error?: string;
  placeholder?: string;
}) => {
  return (
    <label htmlFor={name} className={styles.inputWrapper}>
      {label}
      <input
        type="text"
        {...(register ? register(name as Path<T>) : {})}
        name={name}
        className={styles.input}
        placeholder={placeholder}
      />
      <span className={styles.errorMessage}>{error}</span>
    </label>
  );
};

export default InputItem;
