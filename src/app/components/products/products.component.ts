import { Component, Input, OnInit } from '@angular/core';
import { IStore } from '../../interface/store_data';
import { CartService } from '../../cart.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() product:IStore
  numberOfProducts:string[] = ['1', '2', '3', '4', '5']
  quantity:string = '1'

  constructor(private _cart:CartService) { }

  ngOnInit() {
    

  }

  selectChange(value:string):void{
    this.quantity = value
  }

  addProductToCart(product:any):void{
    product.quantity = this.quantity
    this._cart.addToCart(product)
    alert(`${product.name} added to cart`)

  }

}
