import Link from 'next/link';
import styles from './address.module.scss';

const Address = () => {
  return (
    <address className={styles.address}>
      <div className={styles.addressGroup}>
        <Link className={styles.addressLink} href="tel:0445007050">
          044 500 70 50
        </Link>
        <div className={styles.addressText}>
          Оформлення замовлення:
          <div>
            <time dateTime="T09:00">9:00</time> -
            <time dateTime="T21:00"> 21:00</time>
          </div>
        </div>
      </div>
      <div className={styles.addressGroup}>
        <Link className={styles.addressLink} href="tel:0445008060">
          044 500 70 50
        </Link>
        <div className={styles.addressText}>
          Служба підтримки:
          <div>
            <time dateTime="T09:00">9:00</time> -
            <time dateTime="T21:00"> 21:00</time>
          </div>
        </div>
      </div>
    </address>
  );
};

export default Address;
