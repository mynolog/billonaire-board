import BillionaireList from '@/components/BillionaireList/BillionaireList'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.box}>
      <BillionaireList />
    </div>
  )
}
