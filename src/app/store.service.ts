import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { IStore } from './interface/store_data';

@Injectable()
export class StoreService {
  private _store_url = '../assets/data.json';

  constructor(private _http:HttpClient) { }

  getStore():Observable<IStore[]>{
    return this._http.get<IStore[]>(this._store_url)
  }

}
