import type { FinancialAsset } from '@/types/Billionaire'
import styles from './FinancialAssetItem.module.css'

type FinancialAssetItemProps = Pick<FinancialAsset, 'ticker' | 'numberOfShares' | 'exerciseOptionPrice'>

export default function FinancialAssetItem({ ticker, numberOfShares, exerciseOptionPrice }: FinancialAssetItemProps) {
  return (
    <li className={styles.asset_box}>
      <p>Ticker: {ticker}</p>
      <p>Shares: {numberOfShares.toLocaleString()}</p>
      {exerciseOptionPrice && <p>Excercise Price: ${exerciseOptionPrice.toFixed(2)}</p>}
    </li>
  )
}
