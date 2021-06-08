import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const { CLIENTS_APP_URL } = process.env

export default function Home() {
  return (
    <div className={styles.container}>
      <p><a href="/clients">Dashboard page</a></p>
      <p>{CLIENTS_APP_URL}</p>
    </div>
  )
}
