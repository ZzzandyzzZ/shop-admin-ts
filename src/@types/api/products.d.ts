interface IProductCategory {
  id: number
  name: string
  image: string
  creationAt: string
  updatedAt: string
}

interface IProductsApiData {
  category: IProductCategory
  creationAt: string
  description: string
  id: number
  images: string[]
  price: number
  title: string
  updatedAt: string
}
