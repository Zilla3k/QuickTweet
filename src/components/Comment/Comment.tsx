import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment } : CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function likeComment() {
    setLikeCount(likeCount + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/zilla3k.png" alt='' />

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
          <button onClick={likeComment}>
            <ThumbsUp />
            Curtir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
