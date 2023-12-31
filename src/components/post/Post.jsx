/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Comment } from '../comment/Comment'
import { Avatar } from "../avatar/Avatar"
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from "date-fns/locale/pt-BR"
import styles from './Post.module.css'
import { useState } from 'react'


export function Post({ author, publishedAt, content, id }) {
    const [comments, setComments] = useState([
        'Post!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true,

    })

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')


    }

    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar hasBorder src={author.avatarURL} />
                        <div className={styles.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                    </div>

                    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                    </time>
                </header>
                <div className={styles.content}>
                    {content?.map(line => {
                        if (line.type === "paragraph") {

                            return <p key={line.content}>{line.content}</p>

                        } else if (line.type === "link") {

                            return <p key={line.content}><a href=''>{line.content}</a></p>
                        }
                    })}
                </div>

                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea
                        onChange={handleNewCommentChange}
                        name='textComment'
                        placeholder='Deixe um comentário'
                        value={newCommentText}
                    />
                    <footer>
                        <button type="submit">Publicar</button>
                    </footer>

                </form>
                <div className={styles.commentList}>
                    {comments.map(comment => {
                        return <Comment content={comment} key={comment}/>
                    })}

                </div>

            </article>
        </>
    )
}