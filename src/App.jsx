import { Header } from './components/Header';
import { Post } from './components/post/Post';
import { Sidebar } from './components/sidebar/Sidebar';
import styles from './App.module.css';
import './global.css';


export default function App(){

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Allan Lopes" 
            content="Meu primeiro post React"/>
        </main>
      </div>
    </div>

    
  )
}


