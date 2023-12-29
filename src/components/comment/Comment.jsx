/* eslint-disable react/prop-types */
import { Avatar } from '../avatar/Avatar';
import { Trash, ThumbsUp } from "phosphor-react"
import styles from './Comment.module.css';

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://i.pinimg.com/564x/63/c7/9e/63c79e7b326a066dbf1c0165fb08ae8a.jpg"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gohan</strong>

                            <time title='08 de Dezembro 2023' dateTime='2023-08-12 16:45'>Cerca de 1h atrás</time>

                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={22}/>
                        </button>
                    </header>


                    <p>{props.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={22}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}