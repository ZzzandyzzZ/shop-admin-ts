const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION as string

const API_BASE_URL = `${API_URL}/api/${API_VERSION}`
const PRODUCTS_URL = `${API_BASE_URL}/products`
const USERS_URL = `${API_BASE_URL}/users`
const CATEGORIES_URL = `${API_BASE_URL}/categories`
const AUTH_URL = `${API_BASE_URL}/auth`
const FILES_URL = `${API_BASE_URL}/files`

const endPoints = {
  products: {
    getProducts: PRODUCTS_URL,
    postProducts: PRODUCTS_URL,
    getProduct: (id: string) => `${PRODUCTS_URL}/${id}`,
    putProducts: (id: string) => `${PRODUCTS_URL}/${id}`,
    deleteProducts: (id: string) => `${PRODUCTS_URL}/${id}`,
  },
  users: {
    getUsers: USERS_URL,
    postUsers: USERS_URL,
  },
  auth: {
    login: `${AUTH_URL}/login`,
    profile: `${AUTH_URL}/profile`,
  },
  categories: {
    getCategories: CATEGORIES_URL,
    postCategories: CATEGORIES_URL,
    getCategoriesProduct: (id: string) => `${CATEGORIES_URL}/${id}/products`,
    putCategories: (id: string) => `${CATEGORIES_URL}/${id}`,
  },
  files: {
    postFiles: `${FILES_URL}/upload`,
    getFiles: (fileName: string) => `${FILES_URL}/${fileName}`,
  },
}

export default endPoints
