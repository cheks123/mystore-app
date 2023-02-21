import { Injectable } from '@angular/core';
import { ICart } from './interface/store_data';

@Injectable()
export class CartService {

  constructor() { }

  getCart():ICart[]{
    const products = window.localStorage.getItem('cart')
    return products ? JSON.parse(products) : []

  }

  addToCart(product:ICart):void{
    const cartData:ICart[] = this.getCart()
    const checkProduct:ICart | undefined = cartData.find(data=> data.id === product.id)
    if(checkProduct){
      checkProduct.quantity = product.quantity
    }
    else{
      cartData.unshift(product)
    }
    window.localStorage.setItem('cart', JSON.stringify(cartData))
    console.log(cartData)

  }

  getTotal():number{
    let total = 0
    const cart = this.getCart()
    for(let i=0; i<cart.length; i++){
      let price:number = Number(cart[i].price)
      let quantity:number = Number(cart[i].quantity)
      total += price * quantity
    }
    return total
  }

  clearCart():void{
    window.localStorage.clear()
  }

}
