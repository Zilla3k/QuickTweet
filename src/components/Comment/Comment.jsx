import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../Avatar/Avatar';

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/zilla3k.png" />

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
            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
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
