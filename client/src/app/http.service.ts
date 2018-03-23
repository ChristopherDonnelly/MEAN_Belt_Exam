import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient){
    this.getAllPets();
  }
  
  getAllPets(){
    return this._http.get('/pets');
  }

  getPet(id){
    return this._http.get('/pets/'+id);
  }

  updatePet(id, data){
    console.log(data)
    return this._http.put('/pets/'+id, data);
  }

  createPet(data){
    return this._http.post('/pets', data);
  }

  removePet(id){
    return this._http.delete('/pets/'+id);
  }

}
