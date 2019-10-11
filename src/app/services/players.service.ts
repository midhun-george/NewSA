import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayersService {

  constructor(private http : Http) { }
  getSearch(){
    return this.http.get("../assets/data/search/searchItems.json").map(
      res =>res.json().searchItems
    
    )
  }

}
