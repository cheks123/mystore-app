import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  first_name:string = ""
  last_name:string = ""

  constructor() { }

  ngOnInit() {
    const checkout_data = JSON.parse(window.localStorage.getItem('checkout'))
    this.first_name = checkout_data.first_name
    this.last_name = checkout_data.last_name
    window.localStorage.clear()
  }

}
