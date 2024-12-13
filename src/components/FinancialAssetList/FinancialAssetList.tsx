import type { FinancialAsset } from '@/types/Billionaire'
import styles from './FinancialAssetList.module.css'
import FinancialAssetItem from '../FInancialAssetItem/FinancialAssetItem'

type FinancialAssetListProps = {
  finacialAssets: FinancialAsset[]
}
export default function FinancialAssetList({ finacialAssets }: FinancialAssetListProps) {
  return (
    <ul className={styles.asset_box}>
      {finacialAssets.map((finacialAsset, index) => (
        <FinancialAssetItem
          key={`${index}-${finacialAsset.ticker}`}
          ticker={finacialAsset.ticker}
          numberOfShares={finacialAsset.numberOfShares}
          exerciseOptionPrice={finacialAsset.exerciseOptionPrice}
        />
      ))}
    </ul>
  )
}
