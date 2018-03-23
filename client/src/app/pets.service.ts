import { Injectable } from '@angular/core';

@Injectable()
export class PetsService {

  _id = '';
  name = '';
  type = '';
  description = '';
  likes = 0;
  liked = false;
  skills = [];
  all = [];
  
  constructor() { }

  clear(){
    this._id = '';
    this.name = '';
    this.type = '';
    this.description = '';
    this.likes = 0;
    this.skills.length = 0;
    this.skills = ['', '', ''];
    this.all.length = 0;
  }
}
