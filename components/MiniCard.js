import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function MiniCard(props) {
    return (
    <Link  href={ props.link }>
        <a className={styles.card}>
            <img src='favicon.ico' className={styles.companyImage}/>
            <p>Company name</p>
        </a>
    </Link>
  )
}
