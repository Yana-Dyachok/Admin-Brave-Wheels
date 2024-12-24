import styles from './payments.module.scss';

const Payments = () => {
  return (
    <ul className={styles.payments}>
      <li className={`${styles.paymentsIcon} ${styles.paymentsApay}`}></li>
      <li className={`${styles.paymentsIcon} ${styles.paymentsGpay}`}></li>
      <li className={`${styles.paymentsIcon} ${styles.paymentsMC}`}></li>
      <li className={`${styles.paymentsIcon} ${styles.paymentsVisa}`}></li>
    </ul>
  );
};

export default Payments;
