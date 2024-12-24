import Link from 'next/link';
import Social from '@/components/ui/social/social';
import Payments from '@/components/ui/payments/payments';
import Address from '@/components/ui/address/address';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerNav}>
            <div className={styles.footerCol}>
              <h3 className={styles.footerTitle}>Велосипеди</h3>
              <ul className={styles.footerMenu}>
                <li className={styles.footerItem}>
                  <Link className={styles.footerLink} href="/">
                    Види велосипедів
                  </Link>
                </li>
                <li className={styles.footerItem}>
                  <Link className={styles.footerLink} href="/">
                    Каталог
                  </Link>
                </li>
                <li className={styles.footerItem}>
                  <Link className={styles.footerLink} href="/">
                    Акції
                  </Link>
                </li>
                <li className={styles.footerItem}>
                  <Link className={styles.footerLink} href="/">
                    Пошук
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h3 className={styles.footerTitle}>Інформація</h3>
              <ul className={styles.footerMenu}>
                <li className={styles.footerItem}>
                  <Link className={styles.footerLink} href="/">
                    Про нас
                  </Link>
                </li>
                <li className={styles.footerItem}>
                  <Link className={styles.footerLink} href="/">
                    Контакти
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h3 className={styles.footerTitle}>Клієнтам</h3>
              <ul className={styles.footerMenu}>
                <li className={styles.footerItem}>
                  <Link className={styles.footerLink} href="/">
                    Доставка
                  </Link>
                </li>
                <li className={styles.footerItem}>
                  <Link className={styles.footerLink} href="/">
                    Умови оплати
                  </Link>
                </li>
                <li className={styles.footerItem}>
                  <Link className={styles.footerLink} href="/">
                    Гарантія
                  </Link>
                </li>
                <li className={styles.footerItem}>
                  <Link className={styles.footerLink} href="/">
                    Повернення
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Address />
        </div>
        <div className={styles.footerBottom}>
          <Payments />
          <Social />
        </div>
        <div className={styles.footerCopy}>&copy;BraveWheel 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
