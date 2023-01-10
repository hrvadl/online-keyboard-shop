import { ICart } from '@/redux/types/reducers/login'
import { IProduct } from '@/redux/types/reducers/products'
import { URL } from '../enums/urls'
import { deleteAuthed, get as getReq, postAuthed, putAuthed } from './fetch'

class ProductService {
  static async get(params = ''): Promise<[IProduct[], number]> {
    return getReq<[IProduct[], number]>(`${URL.PRODUCTS}${params}`)
  }

  static async getOne(id: number): Promise<IProduct> {
    return getReq<IProduct>(`${URL.PRODUCTS}${id}`)
  }

  static async addToCart(id: number): Promise<ICart> {
    return postAuthed(URL.CART, { body: JSON.stringify({ id }) })
  }

  static async removeFromCart(id: number): Promise<ICart> {
    return deleteAuthed(`${URL.CART}${id}`)
  }

  static async changeCart(id: number, quantity: number): Promise<ICart> {
    return putAuthed(`${URL.CART}${id}`, { body: JSON.stringify({ quantity }) })
  }

  static async countProduct(): Promise<number> {
    return getReq<number>(`${URL.PRODUCTS}count/`)
  }
}

export { ProductService }
