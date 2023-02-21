import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';
import { IStore } from '../../interface/store_data';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product_id:number
  product:IStore
  quantity:string ="1"
  numberOfProducts:string[] = ['1', '2', '3', '4', '5']

  constructor(private _route:ActivatedRoute, private _store: StoreService, private _cart:CartService) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params)=> this.product_id = Number(params.get('product_id')))

    this._store.getStore().subscribe(product =>{
      this.product = product.filter((item)=>item.id === this.product_id)[0]
    })
  }

  
  addProductToCart(product:any):void{
    product.quantity = this.quantity
    this._cart.addToCart(product)

  }

}
