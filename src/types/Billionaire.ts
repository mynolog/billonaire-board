export type Billionaire = {
  id: string
  name: string
  squareImage: string
  netWorth: number
  industries: string[]
}

export type BillionaireDetail = {
  id: string
  state: string
  city: string
  name: string
  country: string
  position: number
  industries: string[]
  financialAssets: FinancialAsset[]
  thumbnail: string
  squareImage: string
  bio: string[]
  about: string[]
  netWorth: number
}

export interface FinancialAsset {
  exchange: string
  ticker: string
  companyName: string
  numberOfShares: number
  sharePrice: number
  currencyCode: string
  exchangeRate: number
  interactive: boolean
  currentPrice: number
  exerciseOptionPrice?: number
}
