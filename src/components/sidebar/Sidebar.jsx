import { Avatar } from "../avatar/Avatar"
import { PencilLine } from "phosphor-react"
import styles from "../sidebar/Sidebar.module.css"

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/AllanLps.png"/>

                <strong>Allan Lopes</strong>
                <span>Web Developer</span>
            </div>

            <footer>

                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}