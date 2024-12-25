import Link from 'next/link';
import Logo from '../../ui/logo/logo';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link
          href="https://brave-wheels.netlify.app/home"
          className={`${styles.logo} ${styles.navLink}`}
        >
          <Logo />
        </Link>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link
                href="https://brave-wheels.netlify.app/catalog"
                className={styles.navLink}
              >
                Каталог
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>
                Акції
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#" className={styles.navLink}>
                Підтримка
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`${styles.headerActions}`}>
          <Link
            href="https://brave-wheels.netlify.app/catalog"
            className={styles.iconSearch}
          ></Link>
          <Link
            href="https://brave-wheels.netlify.app/cart"
            className={styles.iconCart}
          ></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
