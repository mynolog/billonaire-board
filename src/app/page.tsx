import BillionaireList from '@/components/BillionaireList/BillionaireList'
import styles from './page.module.css'

export default async function Home() {
  return (
    <div className={styles.page}>
      <BillionaireList />
    </div>
  )
}
