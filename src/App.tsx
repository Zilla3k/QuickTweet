import Header from './components/Header/Header';
import { Post } from './components/Post/Post';
import { Sidebar } from './components/Sidebar/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/zilla3k.png',
      name: 'Henrique P',
      role: 'Developer React',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifolio. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: '👉 henrique.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-16 20:00:00'),
  }
];

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
