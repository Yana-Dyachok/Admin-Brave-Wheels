import Link from 'next/link';
import styles from './social.module.scss';

const Social = () => {
  return (
    <ul className={styles.social}>
      <li className={styles.socialItem}>
        <Link
          className={`${styles.socialLink} ${styles.socialLinkInstagram}`}
          href="https://www.instagram.com/"
          title="Перейти в інстаграм"
          aria-label="Інстаграм"
        ></Link>
      </li>
      <li className={styles.socialItem}>
        <Link
          className={`${styles.socialLink} ${styles.socialLinkGoogle}`}
          href="https://workspace.google.com/intl/uk/gmail/"
          title="Перейти в пошта"
          aria-label="пошта"
        ></Link>
      </li>
      <li className={styles.socialItem}>
        <Link
          className={`${styles.socialLink} ${styles.socialLinkFaceBook}`}
          href="https://fb.com"
          title="Перейти в фейсбук"
          aria-label="Фейсбук"
        ></Link>
      </li>
      <li className={styles.socialItem}>
        <Link
          className={`${styles.socialLink} ${styles.socialLinkTelegram}`}
          href="https://web.telegram.org/a/"
          title="Перейти в телеграм"
          aria-label="телеграм"
        ></Link>
      </li>
    </ul>
  );
};

export default Social;
