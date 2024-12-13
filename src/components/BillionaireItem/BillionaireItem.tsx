import Image from 'next/image'
import type { Billionaire } from '@/types/Billionaire'
import styles from './BillionaireItem.module.css'

type BillionaireItemProps = {
  billionaire: Billionaire
}

export default function BillionaireItem({ billionaire }: BillionaireItemProps) {
  let imageURL: string | null = billionaire.squareImage
  if (imageURL.includes('undefined')) {
    imageURL = null
  }
  return (
    <li className={styles.item_box}>
      {imageURL ? (
        <Image width={200} height={200} src={imageURL || ''} alt={billionaire.name} />
      ) : (
        <div className={styles.default_image_box}>이미지 없음</div>
      )}
      <div>
        <span className={styles.name}>{billionaire.name}</span>
      </div>
      <div className={styles.desc}>
        <span>{billionaire.netWorth.toFixed(0).slice(0, 3)} Billion</span>
        <span>/</span>
        <span>{billionaire.industries}</span>
      </div>
    </li>
  )
}
