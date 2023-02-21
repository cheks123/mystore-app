import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../cart.service';
import { ICart, ICheckout } from '../../interface/store_data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:ICart[] = []
  totalPrice:number = 0
  isNotEmpty:boolean = false
  first_name:string = ''
  last_name:string = ''
  address:string = ''
  credit_card_num:string = ''

  constructor(private _cart:CartService, private _router:Router) { }

  ngOnInit() {
    this.cart = this._cart.getCart()
    this.totalPrice = this._cart.getTotal()
    if (this.cart.length > 0){
      this.isNotEmpty = true
    }
    else{
      this.isNotEmpty = false
    }
  }

  checkout():void{
    
    const checkout_data = {first_name: this.first_name, last_name: this.last_name, address: this.address}
    window.localStorage.setItem('checkout', JSON.stringify(checkout_data))
    this._router.navigate(['checkout'])

  }

}
