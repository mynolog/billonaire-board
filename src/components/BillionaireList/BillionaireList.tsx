import type { Billionaire } from '@/types/Billionaire'
import BillionaireItem from '../BillionaireItem/BillionaireItem'
import styles from './BillionaireList.module.css'

const URL = 'https://billions-api.nomadcoders.workers.dev/'

export default async function BillionaireList() {
  const res = await fetch(URL)
  const billionaires: Billionaire[] = await res.json()
  return (
    <ul className={styles.list_box}>
      {billionaires.map((billionaire) => (
        <BillionaireItem key={billionaire.id + billionaire.name} billionaire={billionaire} />
      ))}
    </ul>
  )
}
