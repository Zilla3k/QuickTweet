import { Avatar } from '../Avatar/Avatar';
import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

import backgroundProfile from '../../assets/img/react-bg.jpg';
import profile from '../../assets/img/profile.png';

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img className={styles.bgProfile} src={backgroundProfile} />

        <div className={styles.profile}>
          <Avatar src={profile} />
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
