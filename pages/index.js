import styles from '../styles/Home.module.css'
import MiniCard from '/components/miniCard'
import SearchInput from '/components/Search'

export default function Home() {
  return (
    <div className={styles.body}  style={{height:'100vh'}}>
        <div className={styles.container}>
          <img src="/logo.png" className={styles.logoMain} />
            <SearchInput/>
            <div className={styles.grid}>
                <MiniCard link="/"/>
                <MiniCard link="/"/>
                <MiniCard link="/"/>
                <MiniCard link="/"/>
            </div>
        </div>
    </div>
  )
}
