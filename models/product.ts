import { IAsset } from './asset'
import { IGallery } from './gallery'
import { IIncludes } from './includes'
import { ISuggestion } from './suggestion'

export interface IProduct {
  id: number
  slug: string
  name: string
  shortName: string
  image: IAsset
  category: string
  categoryImage: IAsset
  new: boolean
  price: number
  description: string
  features: string
  includes: IIncludes[]
  gallery: IGallery
  others: ISuggestion[]
}
