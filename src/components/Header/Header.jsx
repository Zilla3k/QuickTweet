import styles from './Header.module.css';

import quickLogo from '../../assets/logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <img src={quickLogo} alt="" />
    </header>
  );
}

export default Header;
