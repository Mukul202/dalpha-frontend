import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MiniCard from '/components/miniCard'

export default function Home() {
  return (
    <div className={styles.body}>
        <div className={styles.container}>
            <h1 className={styles.heading}>Digital Alpha</h1>
            <input type="text" className={styles.input} placeholder='Search Company Name'></input>
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
