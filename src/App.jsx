import Header from './components/Header/Header';
import { Post } from './Post';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar/Sidebar';

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Henrique P"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque omnis obcaecati saepe distinctio expedita nam sequi dolores, odit pariatur vero libero soluta magni ad non tenetur adipisci et esse unde."
          />
        </main>
      </div>
    </>
  );
}
