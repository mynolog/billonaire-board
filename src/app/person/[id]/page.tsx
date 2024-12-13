import { BASE_URL } from '@/app/constants/api'
import { BillionaireDetail } from '@/types/Billionaire'
import Image from 'next/image'
import styles from './page.module.css'
import FinancialAssetList from '@/components/FinancialAssetList/FinancialAssetList'
import GoHome from '@/components/GoHome/GoHome'

type DetailProps = {
  params: {
    id: string
  }
}

export default async function Detail({ params }: DetailProps) {
  const { id } = await params
  const res = await fetch(`${BASE_URL}/person/${id}`)
  const detail: BillionaireDetail = await res.json()

  let imageURL: string | null = detail.squareImage
  if (imageURL.includes('undefined')) {
    imageURL = null
  }
  return (
    <div className={styles.box}>
      <GoHome className={styles.go_home} />
      <div className={styles.about_box}>
        {imageURL ? (
          <Image priority width={250} height={250} src={imageURL || ''} alt={detail.name} />
        ) : (
          <div className={styles.default_image_box}>이미지 없음</div>
        )}
        <h3 className={styles.sub_title}>{detail.name}</h3>
        <div className={styles.bio}>
          <p>Networth: {detail.netWorth.toFixed(0).slice(0, 3)} Bilion</p>
          <p>Country: {detail.country}</p>
          <p>
            Industry:&nbsp;
            {detail.industries.map((industry, i) => (
              <span key={i}>{industry} &nbsp;</span>
            ))}
          </p>
          <br />
          <p>{detail.bio}</p>
        </div>
      </div>
      <div className={styles.financial_box}>
        <h3 className={styles.sub_title}>Financial Assets</h3>
        <FinancialAssetList finacialAssets={detail.financialAssets} />
      </div>
    </div>
  )
}
