import { Component, OnInit } from '@angular/core';
import { IStore } from '../../interface/store_data';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:IStore[]

  constructor(private _store: StoreService) { }

  ngOnInit() {
  this._store.getStore().subscribe(data => {this.products = data})
  
    
  }


}
