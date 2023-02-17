import styles from './Post.module.css';

import profile from '../../assets/img/profile.png';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src={profile} alt="" />
          <div className={styles.authorInfo}>
            <strong>Henrique P</strong>
            <span>Developer</span>
          </div>
        </div>

        <time title="16 de Fevereiro às 21h" dateTime="2023-02-16 21:21:04">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifolio. O nome do projeto é
          DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">henrique.design/doctorcare</a>
        </p>

        <p>
          <a href="">#projetc</a> <a href="">#porftolio</a>{' '}
          <a href="">#doctorcare</a>
        </p>
      </div>
    </article>
  );
}
