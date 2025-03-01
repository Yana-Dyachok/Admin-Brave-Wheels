'use client';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { useState } from 'react';
import styles from '../input-item/input-item.module.scss';

const InputPassword = <T extends FieldValues>({
  error,
  register,
}: {
  register?: UseFormRegister<T>;
  error?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <label htmlFor="password" className={styles.inputWrapper}>
      Enter password:
      <input
        type={showPassword ? 'text' : 'password'}
        {...(register ? register('password' as Path<T>) : {})}
        name="password"
        className={styles.input}
      />
      <button
        className={`${styles.passwordEye} ${showPassword ? styles.passwordEyeClosed : styles.passwordEyeOpen}`}
        type="button"
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      ></button>
      <span className={styles.errorMessage}>{error}</span>
    </label>
  );
};

export default InputPassword;
