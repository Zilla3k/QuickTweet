import styles from './Sidebar.module.css';

import { PencilLine } from 'phosphor-react';

import backgroundProfile from '../../assets/img/react-bg.jpg';
import profile from '../../assets/img/profile.png';

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img className={styles.bgProfile} src={backgroundProfile} />

        <div className={styles.profile}>
          <img className={styles.avatar} src={profile} />
          <strong>Henrique P</strong>
          <span>Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar Perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
