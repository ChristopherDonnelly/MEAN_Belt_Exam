import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient){
    this.getDocs();
  }
  
  getDocs(){
    return this._http.get('/belt');
  }

  createDoc(data){
    return this._http.post('/belt', data);
  }

}
