import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  

  constructor(private _cart:CartService, private _router: Router) { }
  

  ngOnInit() {
  }

  clear_cart():void{
    const numOfItemInCart:number = this._cart.getCart().length
    if(numOfItemInCart == 0){
      alert("There is no item in the cart")
      return
    }
    window.localStorage.clear()
    window.alert("Cart cleared")
    this._router.navigate(['/'])
    
  }

}
