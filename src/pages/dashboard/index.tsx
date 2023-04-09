import Chart from '@components/common/Chart'
import useFetch from '@hooks/useFetch'
import Image from 'next/image'
import endPoints from 'services/api'

const API_PRODUCT_LIMIT = 5
const API_PRODUCT_OFFSET = 0

export default function Dashboard(): JSX.Element {
  const products = useFetch<IProductsApiData>(
    endPoints.products.getProducts(API_PRODUCT_LIMIT, API_PRODUCT_OFFSET)
  )
  const categoryName = products?.map((product) => product.category.name)
  const categoryOccurrences = categoryName.reduce(
    (prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
    {}
  )
  const chartData = {
    datasets: [
      {
        label: 'Categories',
        data: categoryOccurrences,
        borderWidth: 2,
        backgroundColor: ['#ffbb1', '#c0c0c0', '#50Af95', '#f3ba2f', '#2a71d0'],
      },
    ],
  }
  return (
    <>
      <Chart className="mb-8 mt-2" chartData={chartData} />
    </>
  )
}
