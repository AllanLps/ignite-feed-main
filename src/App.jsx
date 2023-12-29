/* eslint-disable react/jsx-key */
import { Header } from './components/Header';
import { Post } from './components/post/Post';
import { Sidebar } from './components/sidebar/Sidebar';
import styles from './App.module.css';
import './global.css';

// Array de posts

const posts = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com/AllanLps.png",
      name: "Allan Lopes",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: <a href="#">👉 jane.design/doctorcare</a> },
    ],
    publishedAt: new Date('2023-12-27 09:00:00'),
  },

  {
    id: 2,
    author: {
      avatarURL: "https://i.pinimg.com/564x/63/c7/9e/63c79e7b326a066dbf1c0165fb08ae8a.jpg",
      name: "Gohan Dev",
      role: "Saiyajin and Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: <a href="#">👉 jane.design/doctorcare</a> },
    ],
    publishedAt: new Date('2023-12-27 15:56:00'),
  },
]

/* Desafio: Tranformar isso em API */

export default function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>


  )
}


