import styles from './Header.module.css';

import quickLogo from '../../assets/logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={quickLogo} alt="" />
    </header>
  );
}
