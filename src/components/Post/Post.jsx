import styles from './Post.module.css';
import { Comment } from '../Comment/Comment';

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

      <form className={styles.formComment}>
        <strong>Deixe seu comentario</strong>

        <textarea placeholder="Nossa, ficou incriv|" />

        <div>
          <button type="submit">Comentar</button>
        </div>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
