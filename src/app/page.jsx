export const metadata = {
  title : `Nasa's Photo of the Day`
}
import styles from './page.module.css'; 


export default function Home() {
  return (
    <h1 className={styles.header}>Nasa Image Of the Day</h1>
  )
}