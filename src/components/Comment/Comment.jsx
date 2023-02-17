import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

import profile from '../../assets/img/profile.png';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatarComment} src={profile} />

      <div className={styles.boxComment}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorComment}>
              <strong>Henrique P</strong>
              <time
                title="16 de Fevereiro às 21h"
                dateTime="2023-02-16 21:21:04"
              >
                Comentado há 1h
              </time>
            </div>
            <button title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>Parabens</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Curtir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
